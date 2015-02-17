var express = require('express');
var router = express.Router();
var config = require('../config/app.js');

/* GET users listing. */
router.get('/', function(req, res) {
	var users = req.db.get('users');
	var page = req.query.page || 1;
	var perPage = req.query.perPage || config.pagination.perPage;
	var term = req.query.term;

	var query = {};
	if (term) {
		query.$or = [
			{ firstName : { $regex : term, $options: 'i' } },
			{ lastName : { $regex : term, $options: 'i' } }
		];
	}

	var count = users.count(query).success(function(total) {
		users.find(query,
		{ 	
			limit : perPage, 
			skip : (perPage * page) - perPage, 
			fields : { 
				_id : true,
				firstName : true,
				lastName: true,
				status : true
			}
		})
		.success(function(doc) {
			res.send({
				_metadata : {
					page : page, 
					perPage : perPage, 
					pageCount : Math.ceil(total / perPage), 
					totalCount : total,
					term : term
				},
				users : doc
			});
		})
		.error(function(err) {
			res.send(err);
		});
	})
	.error(function(err) {
		res.send(err);
	});

});

module.exports = router;
