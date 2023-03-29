function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}
function myMap(collection, callback) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      result.push(callback(collection[key], key, collection));
    }
  }

  return result;
}
function myReduce(collection, callback, acc) {
  let start = acc !== undefined ? acc : collection[0];
  let startIndex = acc !== undefined ? 0 : 1;

  for (let i = startIndex; i < collection.length; i++) {
    start = callback(start, collection[i], collection);
  }

  return start;
}
function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }

  return undefined;
}
function myFilter(collection, predicate) {
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }

  return result;
}
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length;
  } else {
    throw new Error('Invalid collection type');
  }
}
function myFirst(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }
  if (n < 0) {
    throw new RangeError("The second argument must be a positive integer or 0.");
  }
  return array.slice(0, n);
}

