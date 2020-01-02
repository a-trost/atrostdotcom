# GraphQL
Learned from howtographql.com (Which seems to be created by prisma.io)

## What is GraphQL?

* Declarative data fetching
* Single Endpoint

REST was fine for when applications were simpler and development times weren't as fast.

GraphQL minimizes the amount of data getting transferred because you're only asking for what you need. This makes your apps faster.

It's hard for a REST endpoint to suit itself well to many different frontends.

The way that REST APIs need to be continually modified to account for different requirements slows down production time. Instead of having to wait for your backend to update to handle the frontend needs, the frontend just changes their request.

## GraphQL is the better REST

REST endpoints result in under-fetching and over-fetching when you're calling for your data. Having worked on a production app with a REST endpoint, I know what this is like. We needed to hit several endpoints to flesh out a single page, and when the designs changed, I needed to get another developer to change the way the API worked, or open a new endpoint.

GraphQL uses 'resolver functions' to get the data. I'm assuming this will work similarly to Redux's or RxJS's resolvers.

GraphQL is strongly typed to define the capabilities of an API. Without this I doubt a lot of the filtering features would work.

Creating the typed schema up front allows for a sort of contract between the frontend and backend. This way the frontend can mock their data for testing while the backend is being created.

## GraphQL Core Concepts

GraphQL has a "Schema Definition Language" or SDL. This is where you define the types.

If there is an exclamation point following the type, it's required.

```
type Person {
	name: String!
	age: Int!
}
```

Line breaks, not commas or semicolons, are what start the next value.

### Adding Relations

We can add related fields like this. Make sure you don't use a protected word for the name of your schema.

```
type Person {
	name: String!
	age: Int!
	posts:[Post!]!
}
```

```
type Post {
	title: String!
	author: Person!
}
```

### Fetching Data with Queries

```
{
	allPersons {
		name
	}
}
```

Here the `allPersons` field is the *root* of the query and everything that follows the root field is the *payload*.

You can specify params with parentheses after the field like this:

```
{
	allPersons(last: 3) {
		name
	}
}
```

That `last` argument is specified in the schema.