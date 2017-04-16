'use strict';

let assert = require('assert');

Feature('google search');

Before((I) => {
    I.amOnPage('/');
    I.see('Gmail');
    I.fillField('q', 'codeceptJs');
    I.pressKey('Enter');
    I.click('CodeceptJS');
});

Scenario('Test codeceptJS main page motto', (I) => {
    I.see("MODERN ERA ACCEPTANCE TESTING FOR NODEJS"); //without css selector
    // I.see('MODERN ERA ACCEPTANCE TESTING FOR NODEJS', '.motto'); - with css selector
});

Scenario('Test codeceptJS main page motto using assert', function*(I) {
    let text = yield I.grabTextFrom('.motto');
    assert.equal(text, 'MODERN ERA ACCEPTANCE TESTING FOR NODEJS');
});

After((I) => {
    I.say('Perfect score!');
});
