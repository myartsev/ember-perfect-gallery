import Ember from 'ember';
import layout from '../templates/components/ember-perfect-gallery';

export default Ember.Component.extend({
  layout,
  counter: 0,

  actions: {
    doSomething: function() {
      console.log('something');
      this.incrementProperty('counter');
    }
  }
});
