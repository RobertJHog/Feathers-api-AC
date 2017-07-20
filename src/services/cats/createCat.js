'use strict';

// src/services/cat/hooks/createCat.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const cat = hook.params.newCat;

    hook.data.cat = {
      name: cat._name
      }
  };
};
