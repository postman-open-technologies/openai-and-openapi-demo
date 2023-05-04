#!/usr/bin/env node

import * as fs from "node:fs";
import * as yaml from "yaml";

import { validator } from '@exodus/schemasafe';

import { parser } from '@exodus/schemasafe';

const parse = parser(yaml.parse(fs.readFileSync('./schemas/ai-plugin.json', "utf8")), { includeErrors: true, allErrors: true, mode: 'lax', requireStringValidation: false });

console.log(parse(JSON.stringify(yaml.parse(fs.readFileSync(process.argv[2], "utf8")))));
