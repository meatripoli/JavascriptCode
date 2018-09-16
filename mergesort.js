var splitarray=[]
var x

function splitv2(array){
  var arraylen=array.length
  if(arraylen===1){
    return array
  }
  const x=array.slice(0,Math.floor(arraylen/2))
  const y=array.slice(x.length,arraylen)
  return mergeold(splitv2(x),splitv2(y))
}
function merge(x,y){
  var xcount=0
  var ycount=0
  var newarray=[]
  for( var j=0;j<x.length+y.length;j++){    //if element in 1st array is smaller then element in second array
    if(x[xcount]<=y[ycount] & xcount<x.length){
      newarray.push(x[xcount])
      xcount=xcount+1
    }
    else if(x[xcount]>y[ycount] & ycount<y.length){
      newarray.push(y[ycount])
      ycount=ycount+1
    }
    else if(xcount==x.length){
      newarray.push(y[ycount])
      ycount=ycount+1
    }
    else if(ycount==y.length){
      newarray.push(x[xcount])
      xcount=xcount+1
    }
  }
  return(newarray)
}
splitv2([4,9,7,6,5,3,1])
