// spec.js
var config = require('../test-helper');

describe('angularjs homepage', function() {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	beforeEach(function() {
		browser.get(config.rootUrl + '#/users');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toContain('Users');
	});

	it('should show results in table', function() {
		expect(element.all(by.repeater('user in users')).count()).toBeGreaterThan(0);
	});

	it('should filter results when searching', function() {
		element(by.model('term')).sendKeys('Riddle');
		element(by.id('search-users')).click();
		expect(element.all(by.repeater('user in users')).count()).toEqual(1);
	});

	it('should update results when paging', function() {
		var firstUser = element.all(by.css('table tbody tr td')).first().getText();
		element(by.cssContainingText('.pagination .ng-binding', '2')).click();
		var newUser = element.all(by.css('table tbody tr td')).first().getText();
		expect(firstUser).toNotEqual(newUser);
	});

});