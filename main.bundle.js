webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"header\">\n    <h1>Sketch Beamer</h1>\n  </header>\n  <nav class=\"nav\">\n    <ul>\n      <li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/acarrara/sketch-beamer\">GitHub</a></li>\n      <li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/package/sketch-beamer\">Npm</a></li>\n    </ul>\n  </nav>\n  <aside class=\"aside\">\n    <p>Html editor with dynamic loading of angular components.</p>\n    <p>Inspired by <a target=\"_blank\" rel=\"noopener noreferrer\"\n                      href=\"https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e\">this\n      article</a>. You can use the <a target=\"_blank\" rel=\"noopener noreferrer\"\n                                      href=\"https://docs.emmet.io/abbreviations/\">emmet</a> notation.</p>\n  </aside>\n  <main class=\"main\">\n    <sb-sketch [modules]=\"modules\"></sb-sketch>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: rgba(0, 83, 159, 0.65); }\n\ncode {\n  font-family: \"Fira Sans\", \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif; }\n\np, main {\n  padding: 0 1rem; }\n\nul, li {\n  margin: 0;\n  padding: 0; }\n\nul {\n  list-style: none; }\n\nli {\n  display: inline;\n  color: white;\n  padding-left: 1rem; }\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr auto;\n      grid-template-columns: 1fr auto;\n  -ms-grid-rows: auto auto 1fr;\n      grid-template-rows: auto auto 1fr;\n  grid-template-areas: \"header  nav\" \"aside   aside\" \"main    main\";\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.header {\n  grid-area: header; }\n\n.nav {\n  grid-area: nav; }\n  .nav a {\n    color: white; }\n\n.header, .nav {\n  margin: 0;\n  padding: 1rem;\n  font-family: \"Fira Sans\", \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n  background-color: rgba(0, 83, 159, 0.65);\n  color: white; }\n\n.aside {\n  grid-area: aside;\n  font-family: \"Fira Sans\", \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif; }\n  .aside * + * {\n    margin-top: 1.5rem; }\n\n.main {\n  grid-area: main; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_card_module__ = __webpack_require__("../../../../../src/card/card.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.modules = [
            __WEBPACK_IMPORTED_MODULE_1__card_card_module__["a" /* CardModule */]
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sb-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch_beamer_sketch_beamer_module__ = __webpack_require__("../../../../../src/sketch-beamer/sketch-beamer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__sketch_beamer_sketch_beamer_module__["a" /* SketchBeamerModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h2>{{title}}</h2>\n  <span>{{content}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 1px solid #aaa;\n  padding: 1em;\n  font-family: \"Fira Sans\", \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "content", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sb-card',
            template: __webpack_require__("../../../../../src/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/card/card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_component__ = __webpack_require__("../../../../../src/card/card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CardModule = (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__card_component__["a" /* CardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__card_component__["a" /* CardComponent */]
            ]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror__ = __webpack_require__("../../../../codemirror/lib/codemirror.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codemirror_mode_xml_xml__ = __webpack_require__("../../../../codemirror/mode/xml/xml.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codemirror_mode_xml_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_codemirror_mode_xml_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emmetio_codemirror_plugin_dist_emmet_codemirror_plugin_cjs__ = __webpack_require__("../../../../@emmetio/codemirror-plugin/dist/emmet-codemirror-plugin.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emmetio_codemirror_plugin_dist_emmet_codemirror_plugin_cjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__emmetio_codemirror_plugin_dist_emmet_codemirror_plugin_cjs__);








__WEBPACK_IMPORTED_MODULE_6__emmetio_codemirror_plugin_dist_emmet_codemirror_plugin_cjs__(__WEBPACK_IMPORTED_MODULE_4_codemirror__);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["b" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/sketch-beamer/sketch-beamer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createJitCompiler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchBeamerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch_component__ = __webpack_require__("../../../../../src/sketch-beamer/sketch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function createJitCompiler() {
    return new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__["a" /* JitCompilerFactory */]().createCompiler();
}
var SketchBeamerModule = (function () {
    function SketchBeamerModule() {
    }
    SketchBeamerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__sketch_component__["a" /* SketchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__sketch_component__["a" /* SketchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_codemirror__["CodemirrorModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["COMPILER_OPTIONS"], useValue: {}, multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["CompilerFactory"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__["a" /* JitCompilerFactory */], deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["COMPILER_OPTIONS"]] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], useFactory: createJitCompiler, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CompilerFactory"]] }
            ]
        })
    ], SketchBeamerModule);
    return SketchBeamerModule;
}());



/***/ }),

/***/ "../../../../../src/sketch-beamer/sketch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sketch\">\n  <codemirror #sketch [(ngModel)]=\"source\"\n              [config]=\"configuration\">\n  </codemirror>\n</div>\n<div class=\"beamer\"><ng-template #beamer></ng-template></div>\n"

/***/ }),

/***/ "../../../../../src/sketch-beamer/sketch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  grid-gap: 1rem; }\n\n@media (min-width: 1024px) {\n  :host {\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n    -ms-grid-rows: 1fr;\n        grid-template-rows: 1fr; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/sketch-beamer/sketch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_codemirror__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SketchComponent = (function () {
    function SketchComponent(_compiler, _injector, _m) {
        var _this = this;
        this._compiler = _compiler;
        this._injector = _injector;
        this._m = _m;
        this.source = "<p>Edit this template</p>\n<sb-card title=\"A card component\"\n content=\"This demo depends on a\n module declaring this component.\">";
        this.configuration = {
            theme: 'mdn-like',
            lineNumbers: true,
            mode: 'xml',
            htmlMode: true,
            extraKeys: {
                'Tab': 'emmetExpandAbbreviation',
                'Enter': 'emmetInsertLineBreak',
                'Ctrl-S': function () {
                    _this.update();
                }
            }
        };
    }
    SketchComponent.prototype.ngAfterViewInit = function () {
        this._sketch.instance.setSize('100%', '100%');
    };
    SketchComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    SketchComponent.prototype.update = function () {
        var _this = this;
        this.destroy();
        var BeamerComponent = this.buildBeamerComponent();
        var BeamerModule = this.buildBeamerModule(BeamerComponent);
        this._compiler.compileModuleAndAllComponentsAsync(BeamerModule)
            .then(function (factories) {
            var f = factories.componentFactories.find(function (value) { return value.componentType === BeamerComponent; });
            _this._componentRef = f.create(_this._injector, [], null, _this._m);
            _this._container.insert(_this._componentRef.hostView);
        });
    };
    SketchComponent.prototype.buildBeamerComponent = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sb-beamer',
            template: this.source,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        })((function () {
            function class_1() {
            }
            return class_1;
        }()));
    };
    SketchComponent.prototype.buildBeamerModule = function (BeamerComponent) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [BeamerComponent],
            imports: this.modules,
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })((function () {
            function class_2() {
            }
            return class_2;
        }()));
    };
    SketchComponent.prototype.destroy = function () {
        if (this._componentRef) {
            this._componentRef.destroy();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SketchComponent.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SketchComponent.prototype, "modules", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('beamer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], SketchComponent.prototype, "_container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_codemirror__["CodemirrorComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_codemirror__["CodemirrorComponent"])
    ], SketchComponent.prototype, "_sketch", void 0);
    SketchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sb-sketch',
            template: __webpack_require__("../../../../../src/sketch-beamer/sketch.component.html"),
            styles: [__webpack_require__("../../../../../src/sketch-beamer/sketch.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]])
    ], SketchComponent);
    return SketchComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map