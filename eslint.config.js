import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {includeIgnoreFile} from '@eslint/compat';
import esperecyanConfig from '@esperecyan/eslint-config';
import {configs as litConfig} from 'eslint-plugin-lit';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const gitignorePath = path.resolve(dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
	includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
	...esperecyanConfig,
	litConfig['flat/recommended'],
	{
		languageOptions: {
			ecmaVersion: 2024,
		},
	},
];
