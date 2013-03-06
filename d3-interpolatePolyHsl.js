d3.interpolatePolyHsl = function(ends,mids){

  // prepare segments array
  var segments = [];
  segments.push(ends[0]);
  if(mids){
    if(Array.isArray(mids)){
      for(color in mids){
        segments.push(mids[color]);
      }
    } else {
      segments.push(mids);
    }
  }
  segments.push(ends[1]);

  // return function that interpolates appropriate segment as hsl
  return function(fraction){
    var point = [
      Math.floor(fraction*((segments.length)-1)),
      fraction*((segments.length)-1) % 1
    ];
    var segment_scale = d3.scale.linear().domain([0,1]).interpolate(d3.interpolateHsl).range([segments[point[0]],segments[point[0]+1]]);
    var rgb = segment_scale(point[1]);
    return rgb;
  }

}