// CommonJS
const NativeExtension = require('..');
console.log("CommonJS import:", NativeExtension);

// ES Module
import('../index.mjs').then(NativeExtension => {
  console.log("ES Module import:", NativeExtension);
});