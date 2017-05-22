import Ember from 'ember';
export { default } from 'ember-perfect-gallery/components/ember-perfect-gallery';

export default Ember.Component.extend({
  actions: {
    doSomething: () => {
      console.log('something');
    }
  }
});
