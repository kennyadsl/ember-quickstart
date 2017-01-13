/* global server */
import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scientists');

test('visiting /scientists', function(assert) {
  visit('/scientists');

  andThen(() => {
    assert.equal(currentURL(), '/scientists');
  });
});

test("I can view the scientists list", function(assert) {
  let scientists = server.createList('scientists', 3);

  visit('/scientists');

  andThen(() => {
    assert.equal(find('li').length, 3);

    assert.equal(find('li:first').text(), scientists[0].name);
    assert.equal(find('li:nth-child(2)').text(), scientists[1].name);
    assert.equal(find('li:nth-child(3)').text(), scientists[2].name);
  });
});
