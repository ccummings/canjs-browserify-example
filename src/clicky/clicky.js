var can = require('canjs');
require('canjs/map/define.js');
require('canjs/stache.js');

var template = require('./clicky.stache');

module.exports = can.Component.extend({
	tag: 'app-clicky',
	template: template,
	scope: {
		define: {
			count: {
				value: 0
			}
		},
		increment: function() {
			var count = this.attr('count');
			this.attr('count', count + 1);
		}
	}
});
