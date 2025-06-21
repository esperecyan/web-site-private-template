import path from 'node:path';
import {fileURLToPath} from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/** @type {import('webpack').Configuration} */
export default {
	mode: 'development',
	entry: './docs/scripts/index.js',
	output: {
		path: path.resolve(dirname, 'docs/scripts'),
		filename: 'index.js',
		scriptType: 'module',
	},
	devtool: 'source-map',
};
