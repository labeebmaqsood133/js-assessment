exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    },0);
  },

  remove: function(arr, item) {
    return arr.filter((val) => val !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for (var i=0; i<arr.length; i++){
      if(arr[i] === item){
        arr.splice(arr.indexOf(item), 1);
        i--;
      } 
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
  },

  count: function(arr, item) {
    let counter = arr.reduce((acc, curr) => {
      if (item === curr){ 
        return acc = acc + 1;
      }
      else{
        return acc = acc + 0;
      } 
    }, 0);
    return counter;
  },

  duplicates: function(arr) {
    var duplicates = arr.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);
    return duplicates;
  },

  square: function(arr) {
    return arr.map(val => val*val );
  },

  findAllOccurrences: function(arr, target) {
    let result = [];
    arr.map((value, index) => {
      value == target && result.push(index);
    });
    return result;
  }
};
