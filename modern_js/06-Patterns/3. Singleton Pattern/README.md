## Singleton Pattern
- It is a manifestation of the module pattern, a singleton object, and it is an immediate anonymous function. It can only return on instance object at a time.
- An examples of why you want to use Singleton Patter:
1. One user created at a time.
2. Logged in users, to prevent creating multiple users at once.

```js
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object('Object instance!!!');
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // true


```
