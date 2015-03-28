var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '$JBS' });
});

router.get('/api/lasttxs', function(req, res) {
  var uri = 'http://explorer.getjumbucks.com/ext/getlasttxs/100/100';
  request({uri: uri, json: true}, function (error, response, body) {
    res.json({
      data: body,
    });
  });
}); 

router.get('/api/chart', function(req, res) {
  var uri = 'http://explorer.getjumbucks.com/ext/getlasttxs/100/100';
  request({uri: uri, json: true}, function (error, response, body) {
    var chart = [];
    for (var i = 0; i < body.length; i++) {
      chart.push(body[i].total);
      if (i == body.length - 1) {
        res.json({
          chart: [chart.reverse()],
        });
      }
    }
  });
});

module.exports = router;
