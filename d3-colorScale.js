d3.interpolatePolyHsl = function(a,b,c,d){

  console.log("debug:",a,b,c,d);

  return function(x){ return x }
}

/*
d3.interpolateHsl = function(a, b) {
  a = d3.hsl(a);
  b = d3.hsl(b);
  var h0 = a.h, s0 = a.s, l0 = a.l, h1 = b.h - h0, s1 = b.s - s0, l1 = b.l - l0;
  if (h1 > 180) h1 -= 360; else if (h1 < -180) h1 += 360;
  return function(t) {
    return d3_hsl_rgb(h0 + h1 * t, s0 + s1 * t, l0 + l1 * t) + "";
  };
};
*/

// takes a fraction and an array of colours that conform to https://github.com/mbostock/d3/wiki/Colors#wiki-d3_rgb 
// returns a colour string that is fraction along the combined segments "rrr,ggg,bbb" (so users can use rgb or rgba as desired)
/*function InterpolateRGBColors(fraction,cols,logging){

  if(!logging) var logging = false;

  var saturation = 100, lightness = 100;
  var toReturn = "", segments = [], points = [], colors = [];

  // rgb segments
  for(var c = 0; c < (cols.length-1); c++){
    segments.push([cols[c],cols[c+1]]);
  }

  // points as [segment,distance_along_segment]
  /*var scale = d3.scale.linear().domain([0,(n-1)]).range([0,cols.length-1]);
  for(var i = 0; i< n; i++){
    if(i!=(n-1)){
      points.push([Math.floor(scale(i)),(scale(i)%1)]);
    } else {
      // final point is a special case)
      points.push([(segments.length)-1,1]);
    }
  }

  var point = [
    Math.floor(fraction*((cols.length)-1)),
    fraction*((cols.length)-1) % 1
  ];

  if (logging) console.log(segments);

  var segment_scale = d3.scale.linear().domain([0,1]).interpolate(d3.interpolateRgb).range([segments[point[0]][0],segments[point[0]]][1]);
  toReturn = [d3.rgb(segment_scale(point[1])).r,d3.rgb(segment_scale(point[1])).g,d3.rgb(segment_scale(point[1])).b].join(",");

  if (logging) console.log(toReturn);
  return toReturn;
}*/