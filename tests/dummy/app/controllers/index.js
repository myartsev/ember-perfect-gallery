import Ember from 'ember';

export default Ember.Controller.extend({
  // A post-processed version of the photos model for
  // ember-perfect-layout. Necessary because the add-on
  // takes a simple array, not an Ember Data object.
  //
  // Should ember-perfect-gallery be updated to take in
  // an ember-data model directly instead of a simple array?
  modelPhotos: Ember.computed('model.[]', function() {
    let ret = [];

    this.get('model').forEach((photo) => {
      ret.push({
        src: photo.data.src,
        ratio: photo.data.ratio,
        href: photo.data.href
      });
    });

    return ret;
  }),

  setup() {
    this.get('modelPhotos');
  }
});
