import fs from "fs";
import path from "path";

// Define the paths to the package.json files
const rootPackagePath = path.join(process.cwd(), "package.json");
const functionsPackagePath = path.join(process.cwd(), "functions", "package.json");

// Read the root package.json file
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, "utf8"));

// Read the functions package.json file
const functionsPackage = JSON.parse(fs.readFileSync(functionsPackagePath, "utf8"));

// Merge the dependencies and devDependencies from the root package.json into the functions package.json
// If there are any conflicts, the version from the root package.json will take precedence
functionsPackage.dependencies = {
	...(functionsPackage.dependencies || {}),
	...rootPackage.dependencies,
};

functionsPackage.devDependencies = {
	...(functionsPackage.devDependencies || {}),
	...rootPackage.devDependencies,
};

// If there are engines defined in the root package.json, use them
if (rootPackage.engines) {
	functionsPackage.engines = rootPackage.engines;
}

// Write the updated functions package.json file
fs.writeFileSync(functionsPackagePath, JSON.stringify(functionsPackage, null, 2), "utf8");

console.log("The dependencies have been synchronized successfully.");
