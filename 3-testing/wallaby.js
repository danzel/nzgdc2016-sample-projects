module.exports = function (w) {

	return {
		files: [
			'src/**/*.ts',
			'test/utils/**/*.ts'
		],

		tests: [
			'test/**/*Spec.ts'
		],

		testFramework: 'ava',
		env: {
			type: 'node'
		},

		delays: {
			run: 500
		}
	};
};