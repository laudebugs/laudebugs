const { readFileSync } = require('fs');

module.exports = {
	getLatestVersion: (packageName) => {
		const packageJson = JSON.parse(
			readFileSync(`./packages/${packageName}/package.json`).toString()
		);

		const version = packageJson.version;

		return { version };
	},
};
