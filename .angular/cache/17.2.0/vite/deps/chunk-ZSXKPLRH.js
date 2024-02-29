import {
  DomSanitizer
} from "./chunk-3J7OZZ3Q.js";
import {
  NgClass,
  NgIf
} from "./chunk-NQJEINF4.js";
import {
  AfterRenderPhase,
  Component,
  Directive,
  ElementRef,
  HostBinding,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Renderer2,
  SkipSelf,
  ViewChild,
  afterNextRender,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-B6CDIRWE.js";

// node_modules/@coreui/icons-angular/fesm2022/coreui-icons-angular.mjs
var _c0 = ["svgElement"];
function IconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r0.innerHtml, ɵɵsanitizeHtml)("ngClass", ctx_r0.computedClasses)("cHtmlAttr", ctx_r0.attributes);
    ɵɵattribute("width", ctx_r0.width)("height", ctx_r0.height || ctx_r0.width)("viewBox", ctx_r0.viewBox);
  }
}
function IconComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 4);
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.computedClasses)("cHtmlAttr", ctx_r1.attributes);
    ɵɵattribute("width", ctx_r1.width)("height", ctx_r1.height || ctx_r1.width);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r1.use);
  }
}
function toCamelCase(str) {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase().replace("-", "");
  });
}
var _IconSetService = class _IconSetService {
  constructor() {
    this._iconNames = {};
    this._icons = {};
  }
  get iconNames() {
    return this._iconNames;
  }
  get icons() {
    return this._icons;
  }
  set icons(iconSet) {
    for (const iconsKey in iconSet) {
      this._iconNames[iconsKey] = iconsKey;
    }
    this._icons = iconSet;
  }
  getIcon(name) {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
};
_IconSetService.ɵfac = function IconSetService_Factory(t) {
  return new (t || _IconSetService)();
};
_IconSetService.ɵprov = ɵɵdefineInjectable({
  token: _IconSetService,
  factory: _IconSetService.ɵfac,
  providedIn: "root"
});
var IconSetService = _IconSetService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _IconSetModule = class _IconSetModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error("CoreUI IconSetModule is already loaded. Import it in the AppModule only");
    }
  }
  static forRoot() {
    return {
      ngModule: _IconSetModule,
      providers: [{
        provide: IconSetService
      }]
    };
  }
};
_IconSetModule.ɵfac = function IconSetModule_Factory(t) {
  return new (t || _IconSetModule)(ɵɵinject(_IconSetModule, 12));
};
_IconSetModule.ɵmod = ɵɵdefineNgModule({
  type: _IconSetModule
});
_IconSetModule.ɵinj = ɵɵdefineInjector({
  providers: [IconSetService]
});
var IconSetModule = _IconSetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetModule, [{
    type: NgModule,
    args: [{
      providers: [IconSetService]
    }]
  }], () => [{
    type: IconSetModule,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], null);
})();
var _IconDirective = class _IconDirective {
  set viewBox(viewBox) {
    this._viewBox = viewBox;
  }
  get viewBox() {
    return this._viewBox ?? this.scale;
  }
  get hostClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return this.customClasses ?? classes;
  }
  // @HostBinding('innerHtml')
  get innerHtml() {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? "";
    return this.sanitizer.bypassSecurityTrustHtml(this.titleCode + code);
  }
  constructor(renderer, elementRef, sanitizer, iconSet) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.sanitizer = sanitizer;
    this.iconSet = iconSet;
    this.size = "";
    this.xmlns = "http://www.w3.org/2000/svg";
    this.pointerEvents = "none";
    this.role = "img";
    afterNextRender(() => {
      this.elementRef.nativeElement.innerHTML = this.innerHtml;
    }, {
      phase: AfterRenderPhase.Write
    });
  }
  get titleCode() {
    return this.title ? `<title>${this.title}</title>` : "";
  }
  get code() {
    if (this.content) {
      return this.content;
    }
    if (this.iconSet && this.name) {
      return this.iconSet.getIcon(this.name);
    }
    if (this.name && !this.iconSet?.icons[this.name]) {
      console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`, this.name);
    }
    return void 0;
  }
  get scale() {
    return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : "0 0 64 64";
  }
  get computedSize() {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === "custom" || addCustom ? "custom-size" : this.size;
  }
  get computedClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !this.customClasses ? classes : this.customClasses;
  }
  toCamelCase(str) {
    return toCamelCase(str);
  }
};
_IconDirective.ɵfac = function IconDirective_Factory(t) {
  return new (t || _IconDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(IconSetService));
};
_IconDirective.ɵdir = ɵɵdefineDirective({
  type: _IconDirective,
  selectors: [["svg", "cIcon", ""]],
  hostVars: 6,
  hostBindings: function IconDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("viewBox", ctx.viewBox)("xmlns", ctx.xmlns)("pointer-events", ctx.pointerEvents)("role", ctx.role);
      ɵɵclassMap(ctx.hostClasses);
    }
  },
  inputs: {
    content: [InputFlags.None, "cIcon", "content"],
    size: "size",
    title: "title",
    customClasses: "customClasses",
    width: "width",
    height: "height",
    name: [InputFlags.HasDecoratorInputTransform, "name", "name", (value) => value && value.includes("-") ? toCamelCase(value) : value],
    viewBox: "viewBox",
    xmlns: "xmlns",
    pointerEvents: [InputFlags.None, "pointer-events", "pointerEvents"],
    role: "role"
  },
  exportAs: ["cIcon"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var IconDirective = _IconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      selector: "svg[cIcon]",
      exportAs: "cIcon",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: IconSetService
  }], {
    content: [{
      type: Input,
      args: ["cIcon"]
    }],
    size: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: [{
        transform: (value) => value && value.includes("-") ? toCamelCase(value) : value
      }]
    }],
    viewBox: [{
      type: HostBinding,
      args: ["attr.viewBox"]
    }, {
      type: Input
    }],
    xmlns: [{
      type: HostBinding,
      args: ["attr.xmlns"]
    }, {
      type: Input
    }],
    pointerEvents: [{
      type: HostBinding,
      args: ["attr.pointer-events"]
    }, {
      type: Input,
      args: ["pointer-events"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _HtmlAttributesDirective = class _HtmlAttributesDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  ngOnInit() {
    const attribs = this.cHtmlAttr;
    for (const attr in attribs) {
      if (attr === "style" && typeof attribs[attr] === "object") {
        this.setStyle(attribs[attr]);
      } else if (attr === "class") {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }
  setStyle(styles) {
    for (const style in styles) {
      if (style) {
        this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      this.renderer.addClass(this.el.nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? this.renderer.setAttribute(this.el.nativeElement, key, value) : this.renderer.removeAttribute(this.el.nativeElement, key);
  }
};
_HtmlAttributesDirective.ɵfac = function HtmlAttributesDirective_Factory(t) {
  return new (t || _HtmlAttributesDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_HtmlAttributesDirective.ɵdir = ɵɵdefineDirective({
  type: _HtmlAttributesDirective,
  selectors: [["", "cHtmlAttr", ""]],
  inputs: {
    cHtmlAttr: "cHtmlAttr"
  },
  exportAs: ["cHtmlAttr"],
  standalone: true
});
var HtmlAttributesDirective = _HtmlAttributesDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    cHtmlAttr: [{
      type: Input
    }]
  });
})();
var _IconComponent = class _IconComponent {
  set viewBox(viewBox) {
    this._viewBox = viewBox;
  }
  get viewBox() {
    return this._viewBox ?? this.scale;
  }
  get innerHtml() {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? "";
    return this.sanitizer.bypassSecurityTrustHtml(this.titleCode + code);
  }
  constructor(renderer, elementRef, sanitizer, iconSet) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.sanitizer = sanitizer;
    this.iconSet = iconSet;
    this.attributes = {
      role: "img"
    };
    this.size = "";
    this.use = "";
    this.customClasses = "";
    this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.classList.forEach((item) => {
      this.renderer.addClass(this.svgElementRef.nativeElement, item);
    });
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    const svgElement = this.svgElementRef.nativeElement;
    this.renderer.insertBefore(parentElement, svgElement, this.elementRef.nativeElement);
    this.renderer.removeChild(parentElement, this.elementRef.nativeElement);
  }
  get titleCode() {
    return this.title ? `<title>${this.title}</title>` : "";
  }
  get code() {
    if (this.content) {
      return this.content;
    }
    if (this.iconSet && this.name) {
      return this.iconSet.getIcon(this.name);
    }
    if (this.name && !this.iconSet?.icons[this.name]) {
      console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. To use icon by 'name' prop you need to add it to IconSet service. 
`, this.name);
    }
    return void 0;
  }
  get scale() {
    return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : "0 0 64 64";
  }
  get computedSize() {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === "custom" || addCustom ? "custom-size" : this.size;
  }
  get computedClasses() {
    const classes = {
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !this.customClasses ? classes : this.customClasses;
  }
  toCamelCase(str) {
    return toCamelCase(str);
  }
};
_IconComponent.ɵfac = function IconComponent_Factory(t) {
  return new (t || _IconComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(IconSetService));
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["c-icon"]],
  viewQuery: function IconComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.svgElementRef = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  inputs: {
    attributes: "attributes",
    content: "content",
    size: "size",
    title: "title",
    use: "use",
    customClasses: "customClasses",
    width: "width",
    height: "height",
    name: [InputFlags.HasDecoratorInputTransform, "name", "name", (value) => value && value.includes("-") ? toCamelCase(value) : value],
    viewBox: "viewBox"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "innerHtml", "ngClass", "cHtmlAttr", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "ngClass", "cHtmlAttr", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "innerHtml", "ngClass", "cHtmlAttr"], ["svgElement", ""], ["xmlns", "http://www.w3.org/2000/svg", "role", "img", "pointer-events", "none", 3, "ngClass", "cHtmlAttr"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconComponent__svg_svg_0_Template, 2, 6, "svg", 0)(1, IconComponent__svg_svg_1_Template, 2, 5, "svg", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.use && !!ctx.code);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.use);
    }
  },
  dependencies: [NgClass, NgIf, HtmlAttributesDirective],
  styles: [".icon[_ngcontent-%COMP%]{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}"]
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "c-icon",
      standalone: true,
      imports: [NgClass, NgIf, HtmlAttributesDirective],
      host: {
        ngSkipHydration: "true"
      },
      template: '<svg *ngIf="(!use) && (!!code)"\n     xmlns="http://www.w3.org/2000/svg"\n     [attr.width]="width"\n     [attr.height]="height || width"\n     [attr.viewBox]="viewBox"\n     [innerHtml]="innerHtml"\n     [ngClass]="computedClasses"\n     [cHtmlAttr]="attributes"\n     role="img"\n     pointer-events="none"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf="use"\n     xmlns="http://www.w3.org/2000/svg"\n     [attr.width]="width"\n     [attr.height]="height || width"\n     [ngClass]="computedClasses"\n     [cHtmlAttr]="attributes"\n     role="img"\n     pointer-events="none"\n>\n  <use [attr.href]="use"></use>\n</svg>\n',
      styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DomSanitizer
  }, {
    type: IconSetService
  }], {
    attributes: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    use: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: [{
        transform: (value) => value && value.includes("-") ? toCamelCase(value) : value
      }]
    }],
    viewBox: [{
      type: Input
    }],
    svgElementRef: [{
      type: ViewChild,
      args: ["svgElement", {
        read: ElementRef
      }]
    }]
  });
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  imports: [IconComponent, IconDirective],
  exports: [IconComponent, IconDirective]
});
_IconModule.ɵinj = ɵɵdefineInjector({});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      imports: [IconComponent, IconDirective],
      exports: [IconComponent, IconDirective]
    }]
  }], null, null);
})();

export {
  IconSetService,
  IconSetModule,
  IconDirective,
  IconComponent,
  IconModule
};
//# sourceMappingURL=chunk-ZSXKPLRH.js.map
