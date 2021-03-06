'use strict';

const { lines } = require('mrm-core');

const ignores = [
	'node_modules',
	'.DS_Store',
	'Thumbs.db',
	'.idea',
	'.vscode',
	'*.sublime-project',
	'*.sublime-workspace',
	'*.log',
];

module.exports = function() {
	// .gitignore
	lines('.gitignore')
		.append(...ignores)
		.save()
	;
};
module.exports.description = 'Adds .gitignore';
