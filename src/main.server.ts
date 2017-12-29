import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core'

import {AppServerModule} from './app/app.server.module';
export {AppServerModule} from './app/app.server.module';

enableProdMode();

import { renderModule } from '@angular/platform-server';
import * as fs from 'fs';

// Load the index.html file.
var index = fs.readFileSync(process.cwd() + '/dist/index.html', 'utf8');

// Render to HTML and log it to the console.
renderModule(AppServerModule, {document: index, url: '/'})
    .then(html => fs.writeFileSync(process.cwd() + '/dist/sickindex.html', html));