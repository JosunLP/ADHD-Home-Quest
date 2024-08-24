import { readFileSync, writeFileSync } from 'fs';

const rootConfigPath = './package.json';
const rootConfig = JSON.parse(readFileSync(rootConfigPath, 'utf8'));

// Read the package.json file
const packageJsonPath = './frontend/package.json';
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

packageJson.name = rootConfig.name + '_frontend';
packageJson.version = rootConfig.version;
packageJson.description = rootConfig.description;
packageJson.author = rootConfig.author;
packageJson.license = rootConfig.license;
packageJson.repository = rootConfig.repository;
packageJson.bugs = rootConfig.bugs;
packageJson.homepage = rootConfig.homepage;
packageJson.contributors = rootConfig.contributors;
packageJson.keywords = rootConfig.keywords;

// Write the updated package.json file
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Read the composer.json file
const composerJsonPath = './backend/composer.json';
const composerJson = JSON.parse(readFileSync(composerJsonPath, 'utf8'));

composerJson.name ='josunlp/' + rootConfig.name + '_backend';
composerJson.version = rootConfig.version;
composerJson.description = rootConfig.description;
composerJson.authors = rootConfig.contributors.map((contributor: any) => {
	return {
		name: contributor.name,
		email: contributor.email
	};
});
composerJson.license = rootConfig.license;
composerJson.keywords = rootConfig.keywords;

// Write the updated composer.json file
writeFileSync(composerJsonPath, JSON.stringify(composerJson, null, 2));

console.log('Updated package.json and composer.json files');