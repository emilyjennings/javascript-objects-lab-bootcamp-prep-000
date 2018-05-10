var recipes = {};
  
function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({[key]: value}, object);
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
  Object.assign({'prop2': '2'}, recipes);
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({'prop2': '2'}, recipes)
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}