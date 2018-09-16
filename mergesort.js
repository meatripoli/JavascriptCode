var splitarray=[]
var x

function split(array) { 
  var arraylen=array.length
  x=array.splice(0,2)
  splitarray.push(sort(x))
  if(arraylen>2){
    split(array)
  }
  else{
    var splitarraylen=splitarray.length
    console.log(splitarray)
    for(var i=0;i<splitarraylen;i+= 2){
      x=splitarray[i]
      y=splitarray[i+1]
      merge(x,y)
    }
  }   
}

function splitv2(array){
  
  //return merge(x,y)
}

function sort(array){
  var newarray=[]
  if(array[0]>array[1]){
    newarray.push(array[1])
    newarray.push(array[0]) 
  }
  else{
    newarray=array
  }
  return newarray
}

function merge(x,y){
  var xcount=0
  var ycount=0
  var newarray=[]
  //if element in 1st array is smaller then element in second array
  for( var j=0;j<x.length+y.length;j++){
    if(x[xcount]<=y[ycount] & xcount<x.length){
      //console.log(x[xcount])
      newarray.push(x[xcount])
      xcount=xcount+1
      //console.log('xcount:'+xcount)
    }
    else if(x[xcount]>y[ycount] & ycount<y.length){
      //console.log(y[ycount])
      newarray.push(y[ycount])
      ycount=ycount+1
      //console.log('ycount:'+ycount)
    }
    else if(xcount==x.length){
      newarray.push(y[ycount])
      ycount=ycount+1
    }
    else if(ycount==y.length){
      newarray.push(x[xcount])
      xcount=xcount+1
    }
    //console.log(newarray)
    
  }
  return(newarray)
}
splitv2([4,9,7,6,5,3,1])
//merge([ 4,9,7 ],[6,5,3,1])