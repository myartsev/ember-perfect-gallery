import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.setup();
  },

  model() {
    return this.get('store').findAll('photo');
  },

  actions: {
    addPhoto() {
      Ember.$.get('http://localhost:4200/add-photo', () => {
        this.refresh();
      });
    }
  }
});
