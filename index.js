function changeCompletely(element, index, array) {
  array[index] = element;
}
function doToElementsInArray(array, callback) {
  array.forEach(function(element){
    callback(element);
  });
}
