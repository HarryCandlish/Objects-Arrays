/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing 'Hello ' and the contents of `name`
function getGreeting(name) {
  return "Hello " + name;
}

// ageOneYear should add one to the `age` property of `obj`
function ageOneYear(obj) {
  return (obj.age += 1);
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}

// getValue should return the value of the property contained in `key`
function getValue(obj, key) {
  console.log(obj[key]);
  return obj[key];
}

// addName should add a `name` property to the object with the value of the `name` argument
function addName(obj, name) {
  console.log(name);
  return (obj.name = name);
}

// deleteProperty should remove the property contained in `key` from `obj`
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
function deleteProperty(obj, key) {
  console.log(obj[key]);
  return delete obj[key];
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy(val) {
  if (!val) {
    return Error("Oh no, an error!");
  }
}

// keys should return an array of the object's property names (keys)
// For example, given {foo: 1, bar: 2} it would return ['foo', 'bar']
function keys(obj) {
  console.log(Object.keys(obj));
  return Object.keys(obj);
}

// values should return an array of the object's own values
// For example, given {foo: 1, bar: 2} it would return [1, 2]
function values(obj) {
  console.log(Object.values(obj));
  return Object.values(obj);
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of `item`
// For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem(item, length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(item);
  }
  return arr;
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function makeArrayOfItems() {
  const arr = [];
  for (let value in arguments) {
    arr.push(arguments[value]);
  }
  return arr;
}

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
function hasItem(arr, item) {
  return arr.includes(item);
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex(arr, idx) {
  console.log(arr[idx]);
  if (arr[idx]) {
    return arr[idx];
  } else {
    return Error();
  }
}

// replaceItemAtIndex should replace the element at `idx` with `item`
function replaceItemAtIndex(arr, idx, item) {
  return (arr[idx] = item);
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
function insertItemAtIndex(arr, item, idx) {
  arr.splice(idx, 0, item);
  // at index postion idx(3), remove 0 elements, add item
  console.log(arr);
  return arr;
}

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
function deleteItemAtIndex(arr, idx) {
  arr.splice(idx, 1);
  // at index position remove 1 element
  console.log(arr);
  return arr;
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem(arr, item) {}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// {foo: 1, bar: 2}
function zipObject(keys, values) {}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject(obj) {}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
//   {b: 2, c: 3}
function findOneByProperty(arr, search) {}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll(arr, search) {}

module.exports = {
  addName: addName,
  ageOneYear: ageOneYear,
  deleteItem: deleteItem,
  deleteItemAtIndex: deleteItemAtIndex,
  deleteProperty: deleteProperty,
  getGreeting: getGreeting,
  getItemAtIndex: getItemAtIndex,
  getValue: getValue,
  findOneByProperty: findOneByProperty,
  findAll: findAll,
  hasItem: hasItem,
  insertItemAtIndex: insertItemAtIndex,
  keys: keys,
  makeArrayOfItem: makeArrayOfItem,
  makeArrayOfItems: makeArrayOfItems,
  makeObject: makeObject,
  replaceItemAtIndex: replaceItemAtIndex,
  returnErrorIfFalsy: returnErrorIfFalsy,
  unzipObject: unzipObject,
  values: values,
  zipObject: zipObject
};
