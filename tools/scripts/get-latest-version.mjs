import { readFileSync } from 'fs';

export const getLatestVersion = (packageName) => {
	const packageJson = JSON.parse(
		readFileSync(`./packages/${packageName}/package.json`).toString()
	);

	const version = packageJson.version;

	return { version };
};
