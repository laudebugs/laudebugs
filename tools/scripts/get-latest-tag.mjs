export const getLatestTag = async () => {
	const { stdout } = await execa('git', ['describe', '--abbrev=0', '--tags']);
	return stdout;
};
