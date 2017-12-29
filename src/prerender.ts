// Load zone.js for the server.
//import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
var AppServerModuleNgFactory = require('../dist-server/main.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = fs.readFileSync(process.cwd() + '/dist/index.html', 'utf8');

// Render to HTML and log it to the console.
renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'})
    .then(html => fs.writeFileSync(process.cwd() + '/src/index.html', html));