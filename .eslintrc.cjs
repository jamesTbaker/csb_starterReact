module.exports = {
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'extends': [
		'eslint:recommended',
		'plugin:promise/recommended',
	],
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'plugins': [
		'promise',
	],
	'settings': {
		'import/resolver': {
			'node': {
				'moduleDirectory': ['node_modules', './src']
			}
		}
	},
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			},
		],
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				'code': 80,
				'comments': 80,
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'no-trailing-spaces': 'off',
		'implicit-arrow-linebreak': 'off',
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'always-multiline',
		}],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 2 }],
		'no-unreachable': 'error',
		'semi': ['error', 'always'],
		'no-unexpected-multiline': 'error',
		'quotes': [
			'error',
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true,
			},
		],
		'quote-props': ['error', 'always'],
		'promise/always-return': 'off',
		'promise/no-nesting': 'off',

	},
};
