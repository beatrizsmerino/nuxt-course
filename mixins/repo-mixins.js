import { promises as fs } from "fs";
import { removeKebabCase, addUppercaseFirstLetter } from "./helper-functions-mixins.js";

const pkg = JSON.parse(await fs.readFile(new URL("../package.json", import.meta.url)));

export const getRepoName = () => addUppercaseFirstLetter(removeKebabCase(pkg.name) || "");
export const getRepoDescription = () => pkg.description || "";
