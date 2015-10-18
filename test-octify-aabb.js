var tape = require('tape');
var octifyAabb = require('./octify-aabb');

tape('test octifyAabb with box that spans origin in all three axes', function (t) {
  var result = octifyAabb([[1,1,1], [-1,-1,-1]]);

  var ae = [[-1,-1,-1], [0,0,0]];
  var bf = [[ 0,-1,-1], [1,0,0]];
  var cg = [[ 0, 0,-1], [1,1,0]];
  var dh = [[-1, 0,-1], [0,1,0]];

  var il = [[-1,-1, 0], [0,0,1]];
  var jm = [[ 0,-1, 0], [1,0,1]];
  var en = [[ 0, 0, 0], [1,1,1]];
  var ko = [[-1, 0, 0], [0,1,1]];

  t.deepEquals(result[0], ae, '');
  t.deepEquals(result[1], bf, '');
  t.deepEquals(result[2], cg, '');
  t.deepEquals(result[3], dh, '');

  t.deepEquals(result[4], il, '');
  t.deepEquals(result[5], jm, '');
  t.deepEquals(result[6], en, '');
  t.deepEquals(result[7], ko, '');

  t.end();
})

tape('test octifyAabb, with box in +x +y +z octant', function (t) {
  var result = octifyAabb([[6,6,6], [1,1,1]]);

  var ae = [[1  ,1  ,1], [3.5,3.5,3.5]];
  var bf = [[3.5,1  ,1], [6  ,3.5,3.5]];
  var cg = [[3.5,3.5,1], [6  ,6  ,3.5]];
  var dh = [[1  ,3.5,1], [3.5,6  ,3.5]];

  var il = [[1  ,1  ,3.5], [3.5,3.5,6]];
  var jm = [[3.5,1  ,3.5], [6  ,3.5,6]];
  var en = [[3.5,3.5,3.5], [6  ,6  ,6]];
  var ko = [[1  ,3.5,3.5], [3.5,6  ,6]];

  t.deepEquals(result[0], ae, '');
  t.deepEquals(result[1], bf, '');
  t.deepEquals(result[2], cg, '');
  t.deepEquals(result[3], dh, '');

  t.deepEquals(result[4], il, '');
  t.deepEquals(result[5], jm, '');
  t.deepEquals(result[6], en, '');
  t.deepEquals(result[7], ko, '');

  t.end();
})
