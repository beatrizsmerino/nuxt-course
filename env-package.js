import fs from "fs";
import dotenv from "dotenv";

import { getRepoName, getRepoDescription } from "./mixins/repo-mixins.js";

// Cargar las variables de entorno existentes de .env a process.env
dotenv.config();

// Define las nuevas variables o utiliza las existentes si ya están definidas
const newEnv = {
	"PACKAGE_NAME": getRepoName(),
	"PACKAGE_DESCRIPTION": getRepoDescription(),
};

// Leer el contenido actual del archivo .env
let envContent = "";
if (fs.existsSync(".env")) {
	envContent = fs.readFileSync(".env", "utf8");
}

// Convertir el contenido en un array de líneas
const envLines = envContent.split("\n");

// Función para actualizar o añadir una variable
function setEnvVariable(lines, key, value) {
	// eslint-disable-next-line require-unicode-regexp
	const envVarPattern = new RegExp(`^${key}=`);
	const existingLineIndex = lines.findIndex(line => envVarPattern.test(line));
	const envVarString = `${key}=${value}`;

	if (existingLineIndex !== -1) {
		// Si la variable ya existe, actualizarla
		lines[existingLineIndex] = envVarString;
	} else {
		// Si no existe, añadirla al final
		lines.push(envVarString);
	}
}

// Actualizar las variables en el array de líneas
setEnvVariable(envLines, "PACKAGE_NAME", newEnv.PACKAGE_NAME);
setEnvVariable(envLines, "PACKAGE_DESCRIPTION", newEnv.PACKAGE_DESCRIPTION);

// Eliminar líneas vacías y unir el array en un string
envContent = envLines.filter(line => line.trim() !== "").join("\n");

// Escribir el contenido actualizado al archivo .env
fs.writeFileSync(".env", envContent);

console.log(".env file has been updated with PACKAGE_NAME and PACKAGE_DESCRIPTION.");
