# octify-aabb
computes the octants surrounding the center point of an axis-aligned bounding box

`npm install octify-aabb`

```
var octifyAabb = require('./octify-aabb');
var result = octifyAabb([[1,1,1], [-1,-1,-1]]);
```

the result will contain eight AABBs, each defined in the usual way
