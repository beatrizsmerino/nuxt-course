import pkg from "../package.json" assert { type: "json" };
import { removeKebabCase, addUppercaseFirstLetter } from "./helper-functions-mixins.js";

export const getRepoName = () => addUppercaseFirstLetter(removeKebabCase(pkg.name) || "");
export const getRepoDescription = () => pkg.description || "";
