## Caching

### What is caching?
- caching refers to storing the result of an operation so that future requests return faster.
- If you do something once whether database query or rendering xml, you store the result so you do not have do it a second time.

### When do we caching?
- When computation is slow.
- When the underline computation will run multiple times.
- When the output is the same for a particular input.
- When you hosting provider charges for db access.

### How caching works?
<!-- cache hit -->
if request in cache:
  return cache[request]
  <!-- cache miss -->
else:
  r = db.read()
  cache[request] = r
  return r
