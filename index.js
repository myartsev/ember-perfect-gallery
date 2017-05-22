/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-perfect-gallery',

  included: function(app) {
    app.import('addon/styles/app.css');
  }
};
