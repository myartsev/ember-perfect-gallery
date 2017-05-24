import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

//Stub resizeService
const resizeStub = Ember.Service.extend({
  on() {}
});

moduleForComponent('ember-perfect-gallery', 'Integration | Component | ember perfect gallery', {
  integration: true,

  beforeEach: function() {
    this.register('service:resize', resizeStub);
    // Calling inject puts the service instance in the context of the test,
    // making it accessible as "resizeService" within each test
    this.inject.service('resize', {
      as: 'resizeService'
    });
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{ember-perfect-gallery}}`);

  assert.equal(this.$().find('#ember-perfect-gallery').length, 1);

  // Template block usage:
  // this.render(hbs`
  //   {{#ember-perfect-gallery}}
  //   {{/ember-perfect-gallery}}
  // `);
});
