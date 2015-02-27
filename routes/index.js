var express = require('express');
var router = express.Router();
var request = require('request');

function get_last_txs(cb) {
  var uri = 'http://127.0.0.1:3001/ext/getlasttxs';
  request({uri: uri, json: true}, function (error, response, body) {
    return cb(body);
  });
}
/* GET home page. */
router.get('/', function(req, res) {
  get_last_txs(function(txs) {
    res.render('index', { title: '$JBS', txs: txs});
  });
});

module.exports = router;
