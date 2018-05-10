var recipes = {};
  
function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({[key]: value}, object);
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  Object.assign({}, object);
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object)
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  
}