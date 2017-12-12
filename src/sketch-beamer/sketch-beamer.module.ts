import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';
import {SketchComponent} from './sketch.component';
import {FormsModule} from '@angular/forms';
import {CodemirrorModule} from 'ng2-codemirror';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler();
}

@NgModule({
  declarations: [
    SketchComponent
  ],
  exports: [
    SketchComponent
  ],
  imports: [
    CodemirrorModule,
    FormsModule
  ],
  providers: [
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createJitCompiler, deps: [CompilerFactory]}
  ]
})
export class SketchBeamerModule {

}
