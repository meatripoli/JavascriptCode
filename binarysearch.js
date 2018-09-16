function binarysearch(array,n){
  var median=Math.floor(array.length/2)
  if(array.length>1){
    console.log('array has multiple items')
    if(n==array[median]){
      console.log(n+' equals '+array[median])
      return 'found'
    }
    else if(n>array[median]){
      console.log(n+' is greater than '+array[median])
      var x=array.slice(median+1,array.length)
      console.log('new array:' + x)
      binarysearch(x,n)
    }
    else if(n<array[median]){
      console.log(n+' less than '+array[median])
      var x=array.slice(0,median)
      console.log('new array:' + x)
      binarysearch(x,n)
    }
  }
  else if(array.length==1 & n==array[0]){
    console.log(n+' equals '+array[0])
    return 'found'
  }
  else{
    console.log()
    return 'not found'
  }
}
//array=[1,3,4,5,7,9,13,15,16,17,19]
//n=17