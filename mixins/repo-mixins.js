import pkg from "../package.json";
import { removeKebabCase, addUppercaseFirstLetter } from "./helper-functions-mixins.js";

export const getRepoName = () => addUppercaseFirstLetter(removeKebabCase(pkg.name));
