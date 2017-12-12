import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Compiler,
  Component,
  ComponentRef,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  Input,
  NgModule,
  NgModuleRef,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CodemirrorComponent} from 'ng2-codemirror';

@Component({
  selector: 'sb-sketch',
  templateUrl: 'sketch.component.html',
  styleUrls: ['sketch.component.scss']
})
export class SketchComponent implements AfterViewInit, OnDestroy {

  @Input()
  source = `<p>Edit this template</p>
<sb-card title="A card component"
 content="This demo depends on a
 module declaring this component.">`;

  @Input()
  modules: NgModule[];

  configuration = {
    theme: 'mdn-like',
    lineNumbers: true,
    mode: 'xml',
    htmlMode: true,
    extraKeys: {
      'Tab': 'emmetExpandAbbreviation',
      'Enter': 'emmetInsertLineBreak',
      'Ctrl-S': () => {
        this.update();
      }
    }
  };

  @ViewChild('beamer', {read: ViewContainerRef})
  private _container: ViewContainerRef;
  @ViewChild(CodemirrorComponent)
  private _sketch: CodemirrorComponent;

  private _componentRef: ComponentRef<any>;

  constructor(private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>) {
  }

  ngAfterViewInit(): void {
    this._sketch.instance.setSize('100%', '100%');
  }

  ngOnDestroy() {
    this.destroy();
  }

  update() {
    this.destroy();
    const BeamerComponent: Type<any> = this.buildBeamerComponent();
    const BeamerModule: Type<any> = this.buildBeamerModule(BeamerComponent);

    this._compiler.compileModuleAndAllComponentsAsync(BeamerModule)
      .then(factories => {
        const f = factories.componentFactories.find(value => value.componentType === BeamerComponent);
        this._componentRef = f.create(this._injector, [], null, this._m);
        this._container.insert(this._componentRef.hostView);
      });
  }

  private buildBeamerComponent(): Type<any> {
    return <Type<any>>Component({
      selector: 'sb-beamer',
      template: this.source,
      changeDetection: ChangeDetectionStrategy.OnPush
    })(class {
    });
  }

  private buildBeamerModule(BeamerComponent): Type<any> {
    return <Type<any>>NgModule(<NgModule>{
      declarations: [BeamerComponent],
      imports: this.modules,
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })(class {
    });
  }

  private destroy() {
    if (this._componentRef) {
      this._componentRef.destroy();
    }
  }
}
