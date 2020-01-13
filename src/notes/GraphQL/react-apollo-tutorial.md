# React + Apollo

## Queries

Just set up my first actual working query with Apollo and it's pretty nice. We use a HOC for querying.

`<Query>` takes a `query` prop which is a GQL query just like with Gatsby. We specify it with a graphql tag:

```javascript
const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
```

Then my simple list rendering component looks like this:

```javascript
return (
  <Query query={FEED_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      const linksToRender = data.feed.links;

      return (
        <div>
          {linksToRender.map(link => (
            <Link key={link.id} link={link} />
          ))}
        </div>
      );
    }}
  </Query>
);
```

Not much going on here. I like that we get the `loading` and `error` props built in. `loading` is a boolean while `error` will contain info about what happened.

The `data` object is what we expect thanks to the declarative nature of GQL.

So far Apollo is pretty slick. I think getting a full project going with this would be a good idea for this month's learning.

---

## Mutations: Creating Links

So now we're going to be working on Mutations.

Already we're doing really interesting stuff. I guess I didn't even realize that in the last lesson we imported a `Query` component from `"react-apollo"`. Well now we're going to use a `Mutation` component.

The `Mutation` component seems to take a `mutation` which is written in the GraphQL syntax, just with `mutation` instead of `query`. It also takes `variables` which seems to be an object of whatever args we want to pass for this mutation. In this case it's the link and description we're submitting.

Here's our mutation component:

```jsx
<Mutation mutation={POST_MUTATION} variables={{ description, url }}>
  {postMutation => <button onClick={postMutation}>Submit</button>}
</Mutation>
```

The `<Mutation>` component gives its `render prop function` a `postMutation` function. We just need to call that on submit and Apollo takes care of the rest. Definitely a bit of magic going on, but I don't know if I mind.

## Routing

Going to use React Router with Apollo to add routing with data fetching, I assume.

The beginning is just setting up a header to contain links and our `App.js` to have a React Router `<Switch>` component.

Well I was incorrect, this really was just pure Routing. No React Router + Apollo integration, at least not in this section. I think the main point was to show you how to wrap your React app with two HOCs.

```jsx
<BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
</BrowserRouter>
```

The other bit we learn is that we're given access to some functions depending on how the mutation goes:

```jsx
<Mutation
mutation={POST_MUTATION}
variables={{ description, url }}
onCompleted={() => this.props.history.push('/')}>
```

Checking out the Docs for Apollo and they have a bunch of hooks now, which looks great. There it's `useMutation`. Here's their doc example:

```jsx
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

So we've got a great hook that returns a function to trigger the mutation, and the data. The `useMutation` function takes a GraphQL Mutation and it also takes an options object. In the example we're passing `variables` but it also accepts helpful things like `onCompleted` and `onError`.

## Authentication

Awesome, this should bring us back to Apollo rather than React Router. I don't have a ton of experience with Auth so I'm excited to see how this works. I'm assuming they take care of most things, provide sensible defaults, and just expose Auth components to use.

We're creating a Login component that doubles as a Signup component. Nice solution here. We're storing our JWTs in `localStorage` though, so this isn't a true blue auth tutorial. That's alright, I can get a sense of it from this.

I'm a little surprised that we log in with a mutation, but now that I think about it, that's the only option. It's essentially a POST, so that makes sense. Here's that Login mutation:

```javascript
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
```

Nothing unusual. We get the token back from the server, and in this example we put that token in local storage. Normally that's not what we'd do, but this works for now. The signup mutation is the same except we also provide a name on signup.

So we set this up and it works pretty well! Now we just need to make sure we send the user's token along with each request. Apollo gives us some middleware for this in [Apollo Link](https://github.com/apollographql/apollo-link).

We use `setContext` from Apollo Link to put our token in the header on every request.

```javascript
import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", // Check for token, otherwise don't send auth
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // We concat it onto the existing httpLink we define
  cache: new InMemoryCache(),
});
```

### Questions I have

Just realized I don't know how InMemoryCache works, or what it's handling exactly. It's a property that gets passed to `ApolloClient` when we instantiate it.


## More Mutations and Updating the Store

We're implementing the upvote/downvote feature now. 

For the upvote code we have this: 

```graphql
 mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
       id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
```

And

```jsx
 <Mutation mutation={VOTE_MUTATION} variables={{ linkId: this.props.link.id }}>
      {voteMutation => (
        <div className="ml1 gray f11" onClick={voteMutation}>
          ▲
        </div>
      )}
    </Mutation>
```

Once again using a mutation. We pass `VOTE_MUTATION` the mutation that we define, as well as the variables we need to send along. `linkId` is all that's needed so we send that.

The Mutation HOC provides a function that we can call whatever we want. We call it `voteMutation` here and call it on click. 

### Updating the Cache

Apollo lets us manually control the cache. We're going to use it so the UI updates the votes immediately after we click the button. Bit of optimistic updating. 

We actually add a callback to our `<Mutation>` component for `update`

```jsx
<Mutation
  mutation={VOTE_MUTATION}
  variables={{ linkId: this.props.link.id }}
  update={(store, { data: { vote } }) =>
    this.props.updateStoreAfterVote(store, vote, this.props.link.id)
  }
>
```

I really didn't think we'd be doing this kind of stuff with Apollo, but I guess we get into stores and cache with this afterall. I'd love it if I didn't have to worry about this stuff. It always feels like this is where new bugs get introduced in big projects.

It's nice to update the UI instantly, but for some reason this isn't working on mine. I'll check it out tomorrow. Does this wait for the call to get back? I'll look at the docs.