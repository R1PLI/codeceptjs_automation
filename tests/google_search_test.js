'use strict';

let assert = require('assert');

Feature('google search');

Before((I) => {
    I.amOnPage('/');

});

Scenario('Test codeceptJS main page motto', (I) => {
    I.see('Gmail');
    I.fillField('q', 'codeceptJs');
    I.pressKey('Enter');
    I.click('CodeceptJS');
    I.see("SCENARIO DRIVEN");
    I.see("BACKEND AGNOSTIC");
    I.see("INTERACTIVE SHELL");
    // I.see('MODERN ERA ACCEPTANCE TESTING FOR NODEJS', '.motto'); - with css selector
});

Scenario('Test codeceptJS main page motto using assert', function*(I) {
    let text;

    I.see('Gmail');
    I.fillField('q', 'codeceptJs');
    I.pressKey('Enter');
    I.click('CodeceptJS');
    text = yield I.grabTextFrom('.motto');
    assert.equal(text, 'MODERN ERA ACCEPTANCE TESTING FOR NODEJS');
});

After((I) => {
    I.say('Perfect score!');
});
