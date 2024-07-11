import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const NativeExtension = require('./index.js');

export default NativeExtension;