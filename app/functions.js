exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (arg) => {
      return str + ', ' + arg;
    }
  },

  makeClosures: function(arr, fn) {
    let response = [];
    arr.forEach(val => {
      response.push(() => fn(val)); // inserting reference to function on each index
    })
    return response;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function(...args) {
    return args.reduce((curr, acc) => {
      return curr + acc
    },0);

  },

  callIt: function(fn, ...args) {
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
