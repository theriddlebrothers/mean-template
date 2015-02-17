// spec.js
var config = require('../test-helper');

describe('angularjs homepage', function() {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	beforeEach(function() {
		browser.get(config.rootUrl);
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('RB Demo');
	});
  
});