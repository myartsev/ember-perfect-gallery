/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-perfect-gallery',

  included: function(app) {
    app.import('addon/styles/app.css');
    app.import(app.bowerDirectory + '/perfect-layout/dist/perfectLayout.js');
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('perfect-layout');
  }
};
