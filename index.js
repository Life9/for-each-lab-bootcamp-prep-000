function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}
  
function iterate(callback) {
  var bands = ["Lamb of God", "Sugar Ray", "Smash Mouth"]
  bands.forEach(callback);
  return bands
}

function doToArray(array, callback) {
  array.forEach(callback)
}