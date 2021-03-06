import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'codemirror';
import 'codemirror/mode/xml/xml';
import * as CodeMirror from 'codemirror';
import * as emmet from '@emmetio/codemirror-plugin/dist/emmet-codemirror-plugin.cjs';

emmet(CodeMirror);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
