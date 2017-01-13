import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-list', 'Integration | Component | people list', {
  integration: true
});

test('it renders nothing with no args', function(assert) {
  this.render(hbs`{{people-list}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders title if passed', function(assert) {
  this.render(hbs`
    {{people-list title="List of Scientists"}}
  `);
  assert.equal(this.$().text().trim(), 'List of Scientists');
});

test('it renders people list correctly', function(assert) {
  this.set('model', ['Marie Curie']);
  this.render(hbs`
    {{people-list title="List of Scientists" people=model}}
  `);
  assert.equal(this.$().text().trim(), 'List of Scientists\n\n\n    Marie Curie');
});
