import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

const errors = [];
const __filename = fileURLToPath(import.meta.url);

const schemas = await glob(
    path.join(path.dirname(__filename), "/../domains/**/schema.json")
)

for (const schemaPath of schemas) {
  const examples = await glob(path.join(
      path.dirname(schemaPath),
      "**/examples/*.json"
  ));

  const eventName = path.basename(path.dirname(schemaPath));

  /** @type {import("ajv").Schema} schema */
  const schema = JSON.parse(fs.readFileSync(schemaPath).toString());

  examples.forEach((examplePath) => {
    const data = JSON.parse(fs.readFileSync(examplePath).toString());

    const validateFn = ajv.compile(schema);
    const valid = validateFn(data);
    if (!valid) {
      errors.push({
        eventName,
        errors: validateFn.errors,
      });
    }
  })
}


// const examples = await glob(
//     path.join(path.dirname(__filename), "/../domains/**/examples/*.json")
// )
//
// examples.forEach((examplePath) => {
//   const schemaPath = path.join(
//     path.dirname(path.dirname(examplePath)),
//     "schema.json"
//   );
//   const eventName = path.basename(path.dirname(schemaPath));
//
//   /** @type {import("ajv").Schema} schema */
//   const schema = JSON.parse(fs.readFileSync(schemaPath).toString());
//   const data = JSON.parse(fs.readFileSync(examplePath).toString());
//
//   const validateFn = ajv.compile(schema);
//   const valid = validateFn(data);
//   if (!valid) {
//     errors.push({
//       eventName,
//       errors: validateFn.errors,
//     });
//   }
// });

if (errors.length) {
  console.log(`🚨 Some errors were detected in examples:`);
  errors.forEach((errorSet) => {
    console.log(`\nIn ${errorSet.eventName}`);

    errorSet.errors.forEach((error) => {
      console.log(`- ${error.instancePath} ${error.message}`);
    });
  });

  process.exit(1);
} else {
  console.log("🎉 Examples are valid");
}
