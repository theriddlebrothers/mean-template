// conf.js
exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
 	capabilities: { 'browserName': 'chrome' },
	suites : {
		user : 'user.js'
	},
  	jasmineNodeOpts: { 
  		showColors: true
  	},
	// This can be changed via the command line as:
	// --params.login.user 'ngrocks'
	// -- use in test via: 
  	// var params = browser.params;
	params: {
		login: {
			user: 'admin',
			password: 'dev' 
		}
	},
}