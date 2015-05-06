var express = require('express');
var router = express.Router();
var request = require('request');

var explorer = 'http://127.0.0.1:3001';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '$JBS' });
});

router.get('/api/lasttxs', function(req, res) {
  var uri = explorer + '/ext/getlasttxs/100/100';
  request({uri: uri, json: true}, function (error, response, body) {
    res.json({
      data: body.data,
    });
  });
}); 

router.get('/api/chart', function(req, res) {
  var uri = explorer + '/ext/getlasttxs/100/100';
  request({uri: uri, json: true}, function (error, response, body) {
    var chart = [];
    for (var i = 0; i < body.data.length; i++) {
      chart.push(body.data[i].total);
      if (i == body.data.length - 1) {
        res.json({
          chart: [chart.reverse()],
        });
      }
    }
  });
});

module.exports = router;
