/*
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|d (-1,0,-1)      |c (0,0,-1)       |
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|a (-1,-1,-1)     |b (0,-1,-1)      |
+-----------------+-----------------+


                   h (0,1,0)         g (1,1,0)
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|k (-1,0,0)       |e (0,0,0)        |f (1,0,0)
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|i (-1,-1,0)      |j (0,-1,0)       |
+-----------------+-----------------+


                   o (0,1,1)         n (1,1,1)
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |l (0,0,1)        |m (1,0,1)
+-----------------+-----------------+
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
|                 |                 |
+-----------------+-----------------+
*/

function octifyAabb (box) {
  var width = (box[1][0] - box[0][0])/2;
  var height = (box[1][1] - box[0][1])/2;
  var center = [(box[1][0] + box[0][0])/2, (box[1][1] + box[0][1])/2, (box[1][2] + box[0][2])/2];

  var a = box[0];
  var b = [(box[0][0] + width), box[0][1], box[0][2]];
  var c = [(box[0][0] + width), (box[0][1] + height), box[0][2]];
  var d = [box[0][0], (box[0][1] + height), box[0][2]];

  var e = center;
  var f = [center[0] + width, center[1], center[2]];
  var g = [center[0] + width, center[1] + height, center[2]];
  var h = [center[0], center[1] + height, center[2]];

  var i = [center[0] - width, center[1] - height, center[2]];
  var j = [center[0], center[1] - height, center[2]];
  var k = [center[0] - width, center[1], center[2]];

  var l = [center[0], center[1], box[1][2]];
  var m = [center[0] + width, center[1], box[1][2]];
  var n = box[1];
  var o = [center[0], center[1] + height, box[1][2]];

  return [[a,e], [b,f], [c,g], [d,h],
          [i,l], [j,m], [e,n], [k,o]];
}

module.exports = octifyAabb;
