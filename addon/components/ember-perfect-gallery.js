import Ember from 'ember';
import layout from '../templates/components/ember-perfect-gallery';

export default Ember.Component.extend({
  layout,

  actions: {
    doSomething: () => {
      console.log('something');
    }
  }
});
