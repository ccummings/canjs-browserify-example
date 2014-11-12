var $ = require('jquery');
var can = require('canjs');
require('canjs/stache.js');

require('./clicky/clicky');

var template = require('./index.stache');

$(function(){
	$('#app').html(template());
});