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

