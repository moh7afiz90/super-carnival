## Asynchronous Javascript, Ajax & Fetch API

### What is Asynchronous Programming?

- Synchronous Code
```js
posts = loadPostsSync();
  //...wait til posts are fetched
  //...do something with posts
doTheNextThing(); //Has to wait until posts load
```
- Asynchronous Code
```js
loadPostsSync(function(){;
  //...wait til posts are fetched
  //...do something with posts
});
doTheNextThing(); //Does not have to wait until posts load
```
### Browser/Server APIs
- Most Async code you work with will be part of an API or library:
1. XMLHttpRequest & fetch
2. jQuery Ajax, Axios, other HTTP libraries
3. Node.js fs(filesystem) module


### Handling Async code
1. Callbacks
2. Promises
3. Async/Await
