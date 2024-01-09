import {
  BaseIcon,
  ButtonDirective,
  ButtonModule,
  ChevronDownIcon,
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SharedModule,
  TranslationKeys,
  UniqueComponentId,
  zindexutils
} from "./chunk-NSJ7P5GS.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-FWPELXFP.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EVORN7IU.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-HZ6N4WAK.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-ASYGGAD5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-A7BB6COH.js";

// ../node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static ɵfac = (() => {
    let ɵChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(t) {
      return (ɵChevronLeftIcon_BaseFactory || (ɵChevronLeftIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronLeftIcon)))(t || _ChevronLeftIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronLeftIcon,
    selectors: [["ChevronLeftIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: "ChevronLeftIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// ../node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static ɵfac = (() => {
    let ɵChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(t) {
      return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronRightIcon)))(t || _ChevronRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// ../node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static ɵfac = (() => {
    let ɵChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(t) {
      return (ɵChevronUpIcon_BaseFactory || (ɵChevronUpIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronUpIcon)))(t || _ChevronUpIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronUpIcon,
    selectors: [["ChevronUpIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: "ChevronUpIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// ../node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon = class _TimesIcon extends BaseIcon {
  static ɵfac = (() => {
    let ɵTimesIcon_BaseFactory;
    return function TimesIcon_Factory(t) {
      return (ɵTimesIcon_BaseFactory || (ɵTimesIcon_BaseFactory = ɵɵgetInheritedFactory(_TimesIcon)))(t || _TimesIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TimesIcon,
    selectors: [["TimesIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: "TimesIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// ../node_modules/primeng/fesm2022/primeng-icons-calendar.mjs
var CalendarIcon = class _CalendarIcon extends BaseIcon {
  static ɵfac = (() => {
    let ɵCalendarIcon_BaseFactory;
    return function CalendarIcon_Factory(t) {
      return (ɵCalendarIcon_BaseFactory || (ɵCalendarIcon_BaseFactory = ɵɵgetInheritedFactory(_CalendarIcon)))(t || _CalendarIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CalendarIcon,
    selectors: [["CalendarIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z", "fill", "currentColor"]],
    template: function CalendarIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarIcon, [{
    type: Component,
    args: [{
      selector: "CalendarIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// ../node_modules/primeng/fesm2022/primeng-calendar.mjs
var _c0 = ["container"];
var _c1 = ["inputfield"];
var _c2 = ["contentWrapper"];
function Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 10);
    ɵɵlistener("click", function Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r9.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-calendar-clear-icon");
  }
}
function Calendar_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Calendar_ng_template_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_ng_template_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 11);
    ɵɵlistener("click", function Calendar_ng_template_2_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.clear());
    });
    ɵɵtemplate(1, Calendar_ng_template_2_ng_container_2_span_2_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.clearIconTemplate);
  }
}
function Calendar_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 8)(2, Calendar_ng_template_2_ng_container_2_span_2_Template, 2, 1, "span", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.clearIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.clearIconTemplate);
  }
}
function Calendar_ng_template_2_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r15.icon);
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarIcon");
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function Calendar_ng_template_2_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Calendar_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template, 1, 0, "CalendarIcon", 6)(2, Calendar_ng_template_2_button_3_ng_container_2_2_Template, 1, 0, null, 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r16.triggerIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r16.triggerIconTemplate);
  }
}
function Calendar_ng_template_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function Calendar_ng_template_2_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r21);
      ɵɵnextContext();
      const _r3 = ɵɵreference(1);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onButtonClick($event, _r3));
    });
    ɵɵtemplate(1, Calendar_ng_template_2_button_3_span_1_Template, 1, 1, "span", 14)(2, Calendar_ng_template_2_button_3_ng_container_2_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r5.disabled);
    ɵɵattribute("aria-label", ctx_r5.iconButtonAriaLabel)("aria-expanded", ctx_r5.overlayVisible)("aria-controls", ctx_r5.panelId);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.icon);
  }
}
function Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "CalendarIcon", 18);
    ɵɵlistener("click", function Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template_CalendarIcon_click_0_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r24 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r24.onButtonClick($event));
    });
    ɵɵelementEnd();
  }
}
function Calendar_ng_template_2_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c3 = (a0) => ({
  clickCallBack: a0
});
function Calendar_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template, 1, 0, "CalendarIcon", 16)(2, Calendar_ng_template_2_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.inputIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.inputIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c3, ctx_r6.onButtonClick.bind(ctx_r6)));
  }
}
function Calendar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 4, 5);
    ɵɵlistener("focus", function Calendar_ng_template_2_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.onInputFocus($event));
    })("keydown", function Calendar_ng_template_2_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r28 = ɵɵnextContext();
      return ɵɵresetView(ctx_r28.onInputKeydown($event));
    })("click", function Calendar_ng_template_2_Template_input_click_0_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.onInputClick());
    })("blur", function Calendar_ng_template_2_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.onInputBlur($event));
    })("input", function Calendar_ng_template_2_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.onUserInput($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, Calendar_ng_template_2_ng_container_2_Template, 3, 2, "ng-container", 6)(3, Calendar_ng_template_2_button_3_Template, 3, 6, "button", 7)(4, Calendar_ng_template_2_ng_container_4_Template, 3, 5, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵɵproperty("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonlyInput)("ngStyle", ctx_r1.inputStyle)("placeholder", ctx_r1.placeholder || "")("disabled", ctx_r1.disabled)("ngClass", "p-inputtext p-component");
    ɵɵattribute("id", ctx_r1.inputId)("name", ctx_r1.name)("required", ctx_r1.required)("aria-required", ctx_r1.required)("aria-expanded", ctx_r1.overlayVisible)("aria-controls", ctx_r1.panelId)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showClear && !ctx_r1.disabled && ctx_r1.value != null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function Calendar_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon", 40);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-datepicker-prev-icon");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 41);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r51.previousIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("keydown", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r55);
      const ctx_r54 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r54.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r55);
      const ctx_r56 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r56.onPrevButtonClick($event));
    });
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 35)(2, Calendar_div_3_ng_container_4_div_2_button_2_span_2_Template, 2, 1, "span", 39);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r43 = ɵɵnextContext(4);
    ɵɵattribute("aria-label", ctx_r43.prevIconAriaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r43.previousIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r43.previousIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 42);
    ɵɵlistener("click", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r58);
      const ctx_r57 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r57.switchToMonthView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r58);
      const ctx_r59 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r59.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r41 = ɵɵnextContext().$implicit;
    const ctx_r44 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r44.switchViewButtonDisabled());
    ɵɵattribute("aria-label", ctx_r44.getTranslation("chooseMonth"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r44.getMonthName(month_r41.month), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 43);
    ɵɵlistener("click", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r62);
      const ctx_r61 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r61.switchToYearView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r62);
      const ctx_r63 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r63.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r41 = ɵɵnextContext().$implicit;
    const ctx_r45 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r45.switchViewButtonDisabled());
    ɵɵattribute("aria-label", ctx_r45.getTranslation("chooseYear"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r45.getYear(month_r41), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r65 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", ctx_r65.yearPickerValues()[0], " - ", ctx_r65.yearPickerValues()[ctx_r65.yearPickerValues().length - 1], "");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c4 = (a0) => ({
  $implicit: a0
});
function Calendar_div_3_ng_container_4_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 44);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template, 2, 2, "ng-container", 6)(2, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r46 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r46.decadeTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r46.decadeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, ctx_r46.yearPickerValues));
  }
}
function Calendar_div_3_ng_container_4_div_2_ChevronRightIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 40);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-datepicker-next-icon");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_9_1_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_ng_container_4_div_2_span_9_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_ng_container_4_div_2_span_9_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 45);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_span_9_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r48 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r48.nextIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_th_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 51)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r69 = ɵɵnextContext(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r69.getTranslation("weekHeader"));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_th_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 52)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const weekDay_r72 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(weekDay_r72);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 55)(1, "span", 56);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const j_r76 = ɵɵnextContext().index;
    const month_r41 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", month_r41.weekNumbers[j_r76], " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r81 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(date_r81.day);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r81 = ɵɵnextContext(2).$implicit;
    const ctx_r84 = ɵɵnextContext(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r84.dateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, date_r81));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r81 = ɵɵnextContext(2).$implicit;
    const ctx_r85 = ɵɵnextContext(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r85.disabledDateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, date_r81));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 59);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r81 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", date_r81.day, " ");
  }
}
var _c5 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 57);
    ɵɵlistener("click", function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template_span_click_1_listener($event) {
      ɵɵrestoreView(_r95);
      const date_r81 = ɵɵnextContext().$implicit;
      const ctx_r93 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r93.onDateSelect($event, date_r81));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      ɵɵrestoreView(_r95);
      const date_r81 = ɵɵnextContext().$implicit;
      const i_r42 = ɵɵnextContext(3).index;
      const ctx_r96 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r96.onDateCellKeydown($event, date_r81, i_r42));
    });
    ɵɵtemplate(2, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 6)(3, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 6)(4, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_div_5_Template, 2, 1, "div", 58);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r81 = ɵɵnextContext().$implicit;
    const ctx_r82 = ɵɵnextContext(6);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c5, ctx_r82.isSelected(date_r81) && date_r81.selectable, !date_r81.selectable));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r82.dateTemplate && (date_r81.selectable || !ctx_r82.disabledDateTemplate));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", date_r81.selectable || !ctx_r82.disabledDateTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !date_r81.selectable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r82.isSelected(date_r81));
  }
}
var _c6 = (a0, a1) => ({
  "p-datepicker-other-month": a0,
  "p-datepicker-today": a1
});
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 15);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template, 6, 8, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r81 = ctx.$implicit;
    const ctx_r78 = ɵɵnextContext(6);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c6, date_r81.otherMonth, date_r81.today));
    ɵɵattribute("aria-label", date_r81.day);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", date_r81.otherMonth ? ctx_r78.showOtherMonths : true);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_1_Template, 3, 1, "td", 53)(2, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_Template, 2, 6, "td", 54);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r75 = ctx.$implicit;
    const ctx_r71 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r71.showWeek);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", week_r75);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 46)(1, "table", 47)(2, "thead")(3, "tr");
    ɵɵtemplate(4, Calendar_div_3_ng_container_4_div_2_div_10_th_4_Template, 3, 1, "th", 48)(5, Calendar_div_3_ng_container_4_div_2_div_10_th_5_Template, 3, 1, "th", 49);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "tbody");
    ɵɵtemplate(7, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_Template, 3, 2, "tr", 50);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const month_r41 = ɵɵnextContext().$implicit;
    const ctx_r49 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r49.showWeek);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r49.weekDays);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", month_r41.dates);
  }
}
function Calendar_div_3_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "div", 28);
    ɵɵtemplate(2, Calendar_div_3_ng_container_4_div_2_button_2_Template, 3, 3, "button", 29);
    ɵɵelementStart(3, "div", 30);
    ɵɵtemplate(4, Calendar_div_3_ng_container_4_div_2_button_4_Template, 2, 3, "button", 31)(5, Calendar_div_3_ng_container_4_div_2_button_5_Template, 2, 3, "button", 32)(6, Calendar_div_3_ng_container_4_div_2_span_6_Template, 3, 5, "span", 33);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 34);
    ɵɵlistener("keydown", function Calendar_div_3_ng_container_4_div_2_Template_button_keydown_7_listener($event) {
      ɵɵrestoreView(_r102);
      const ctx_r101 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r101.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_Template_button_click_7_listener($event) {
      ɵɵrestoreView(_r102);
      const ctx_r103 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r103.onNextButtonClick($event));
    });
    ɵɵtemplate(8, Calendar_div_3_ng_container_4_div_2_ChevronRightIcon_8_Template, 1, 1, "ChevronRightIcon", 35)(9, Calendar_div_3_ng_container_4_div_2_span_9_Template, 2, 1, "span", 36);
    ɵɵelementEnd()();
    ɵɵtemplate(10, Calendar_div_3_ng_container_4_div_2_div_10_Template, 8, 3, "div", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r42 = ctx.index;
    const ctx_r38 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", i_r42 === 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r38.currentView === "date");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.currentView !== "year");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.currentView === "year");
    ɵɵadvance(1);
    ɵɵstyleProp("display", ctx_r38.numberOfMonths === 1 ? "inline-flex" : i_r42 === ctx_r38.numberOfMonths - 1 ? "inline-flex" : "none");
    ɵɵattribute("aria-label", ctx_r38.nextIconAriaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r38.nextIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.nextIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.currentView === "date");
  }
}
function Calendar_div_3_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 59);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r105 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", m_r105, " ");
  }
}
function Calendar_div_3_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 62);
    ɵɵlistener("click", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r110);
      const i_r106 = restoredCtx.index;
      const ctx_r109 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r109.onMonthSelect($event, i_r106));
    })("keydown", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r110);
      const i_r106 = restoredCtx.index;
      const ctx_r111 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r111.onMonthCellKeydown($event, i_r106));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, Calendar_div_3_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 58);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r105 = ctx.$implicit;
    const i_r106 = ctx.index;
    const ctx_r104 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c5, ctx_r104.isMonthSelected(i_r106), ctx_r104.isMonthDisabled(i_r106)));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", m_r105, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r104.isMonthSelected(i_r106));
  }
}
function Calendar_div_3_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 60);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_3_span_1_Template, 3, 6, "span", 61);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r39 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r39.monthPickerValues());
  }
}
function Calendar_div_3_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 59);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r113 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", y_r113, " ");
  }
}
function Calendar_div_3_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 65);
    ɵɵlistener("click", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r117);
      const y_r113 = restoredCtx.$implicit;
      const ctx_r116 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r116.onYearSelect($event, y_r113));
    })("keydown", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r117);
      const y_r113 = restoredCtx.$implicit;
      const ctx_r118 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r118.onYearCellKeydown($event, y_r113));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, Calendar_div_3_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 58);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r113 = ctx.$implicit;
    const ctx_r112 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c5, ctx_r112.isYearSelected(y_r113), ctx_r112.isYearDisabled(y_r113)));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", y_r113, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r112.isYearSelected(y_r113));
  }
}
function Calendar_div_3_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 63);
    ɵɵtemplate(1, Calendar_div_3_ng_container_4_div_4_span_1_Template, 3, 6, "span", 64);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r40.yearPickerValues());
  }
}
function Calendar_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 23);
    ɵɵtemplate(2, Calendar_div_3_ng_container_4_div_2_Template, 11, 10, "div", 24);
    ɵɵelementEnd();
    ɵɵtemplate(3, Calendar_div_3_ng_container_4_div_3_Template, 2, 1, "div", 25)(4, Calendar_div_3_ng_container_4_div_4_Template, 2, 1, "div", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r34.months);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r34.currentView === "month");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r34.currentView === "year");
  }
}
function Calendar_div_3_div_5_ChevronUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_4_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function Calendar_div_3_div_5_ChevronDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_10_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ChevronUpIcon_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_17_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function Calendar_div_3_div_5_ChevronDownIcon_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_23_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_23_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 69)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r129 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r129.timeSeparator);
  }
}
function Calendar_div_3_div_5_div_25_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_div_25_3_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_div_25_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_div_25_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function Calendar_div_3_div_5_div_25_ChevronDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_div_25_9_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_div_25_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_div_25_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 74)(1, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_div_25_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r143 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r143.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_25_Template_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r145 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r145.incrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_25_Template_button_keydown_space_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r146 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r146.incrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_25_Template_button_mousedown_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r147 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r147.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function Calendar_div_3_div_5_div_25_Template_button_mouseup_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r148 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r148.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_25_Template_button_keyup_enter_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r149 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r149.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_25_Template_button_keyup_space_1_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r150 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r150.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_25_Template_button_mouseleave_1_listener() {
      ɵɵrestoreView(_r144);
      const ctx_r151 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r151.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(2, Calendar_div_3_div_5_div_25_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 6)(3, Calendar_div_3_div_5_div_25_3_Template, 1, 0, null, 12);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtemplate(5, Calendar_div_3_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 6);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_div_25_Template_button_keydown_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r152 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r152.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_25_Template_button_keydown_enter_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r153 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r153.decrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_25_Template_button_keydown_space_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r154 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r154.decrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_25_Template_button_mousedown_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r155 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r155.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function Calendar_div_3_div_5_div_25_Template_button_mouseup_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r156 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r156.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_25_Template_button_keyup_enter_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r157 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r157.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_25_Template_button_keyup_space_7_listener($event) {
      ɵɵrestoreView(_r144);
      const ctx_r158 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r158.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_25_Template_button_mouseleave_7_listener() {
      ɵɵrestoreView(_r144);
      const ctx_r159 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r159.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(8, Calendar_div_3_div_5_div_25_ChevronDownIcon_8_Template, 1, 0, "ChevronDownIcon", 6)(9, Calendar_div_3_div_5_div_25_9_Template, 1, 0, null, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r130 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r130.getTranslation("nextSecond"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r130.incrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r130.incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r130.currentSecond < 10);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r130.currentSecond);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r130.getTranslation("prevSecond"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r130.decrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r130.decrementIconTemplate);
  }
}
function Calendar_div_3_div_5_div_26_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_div_26_3_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_div_26_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_div_26_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_26_ChevronDownIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_div_26_8_ng_template_0_Template(rf, ctx) {
}
function Calendar_div_3_div_5_div_26_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Calendar_div_3_div_5_div_26_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 75)(1, "button", 76);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_div_26_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r166 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r166.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_26_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r168 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r168.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_26_Template_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r169 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r169.toggleAMPM($event));
    });
    ɵɵtemplate(2, Calendar_div_3_div_5_div_26_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 6)(3, Calendar_div_3_div_5_div_26_3_Template, 1, 0, null, 12);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 76);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_div_26_Template_button_keydown_6_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r170 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r170.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_26_Template_button_click_6_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r171 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r171.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_26_Template_button_keydown_enter_6_listener($event) {
      ɵɵrestoreView(_r167);
      const ctx_r172 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r172.toggleAMPM($event));
    });
    ɵɵtemplate(7, Calendar_div_3_div_5_div_26_ChevronDownIcon_7_Template, 1, 0, "ChevronDownIcon", 6)(8, Calendar_div_3_div_5_div_26_8_Template, 1, 0, null, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r131 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r131.getTranslation("am"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r131.incrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r131.incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r131.pm ? "PM" : "AM");
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r131.getTranslation("pm"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r131.decrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r131.decrementIconTemplate);
  }
}
function Calendar_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 66)(1, "div", 67)(2, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_Template_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r173 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r173.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r175 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r175.incrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r176 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r176.incrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r177 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r177.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r178 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r178.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r179 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r179.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_2_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r180 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r180.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_2_listener() {
      ɵɵrestoreView(_r174);
      const ctx_r181 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r181.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(3, Calendar_div_3_div_5_ChevronUpIcon_3_Template, 1, 0, "ChevronUpIcon", 6)(4, Calendar_div_3_div_5_4_Template, 1, 0, null, 12);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtemplate(6, Calendar_div_3_div_5_ng_container_6_Template, 2, 0, "ng-container", 6);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_Template_button_keydown_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r182 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r182.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r183 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r183.decrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r184 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r184.decrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r185 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r185.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r186 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r186.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r187 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r187.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_8_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r188 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r188.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_8_listener() {
      ɵɵrestoreView(_r174);
      const ctx_r189 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r189.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(9, Calendar_div_3_div_5_ChevronDownIcon_9_Template, 1, 0, "ChevronDownIcon", 6)(10, Calendar_div_3_div_5_10_Template, 1, 0, null, 12);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 69)(12, "span");
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 70)(15, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_Template_button_keydown_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r190 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r190.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r191 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r191.incrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r192 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r192.incrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r193 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r193.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r194 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r194.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r195 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r195.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_15_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r196 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r196.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_15_listener() {
      ɵɵrestoreView(_r174);
      const ctx_r197 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r197.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(16, Calendar_div_3_div_5_ChevronUpIcon_16_Template, 1, 0, "ChevronUpIcon", 6)(17, Calendar_div_3_div_5_17_Template, 1, 0, null, 12);
    ɵɵelementEnd();
    ɵɵelementStart(18, "span");
    ɵɵtemplate(19, Calendar_div_3_div_5_ng_container_19_Template, 2, 0, "ng-container", 6);
    ɵɵtext(20);
    ɵɵelementEnd();
    ɵɵelementStart(21, "button", 68);
    ɵɵlistener("keydown", function Calendar_div_3_div_5_Template_button_keydown_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r198 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r198.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r199 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r199.decrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r200 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r200.decrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r201 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r201.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r202 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r202.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r203 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r203.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_21_listener($event) {
      ɵɵrestoreView(_r174);
      const ctx_r204 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r204.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_21_listener() {
      ɵɵrestoreView(_r174);
      const ctx_r205 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r205.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(22, Calendar_div_3_div_5_ChevronDownIcon_22_Template, 1, 0, "ChevronDownIcon", 6)(23, Calendar_div_3_div_5_23_Template, 1, 0, null, 12);
    ɵɵelementEnd()();
    ɵɵtemplate(24, Calendar_div_3_div_5_div_24_Template, 3, 1, "div", 71)(25, Calendar_div_3_div_5_div_25_Template, 10, 8, "div", 72)(26, Calendar_div_3_div_5_div_26_Template, 9, 7, "div", 73);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ctx_r35.getTranslation("nextHour"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r35.incrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r35.currentHour < 10);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r35.currentHour);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r35.getTranslation("prevHour"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r35.decrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.decrementIconTemplate);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r35.timeSeparator);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ctx_r35.getTranslation("nextMinute"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r35.incrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.incrementIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r35.currentMinute < 10);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r35.currentMinute);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r35.getTranslation("prevMinute"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r35.decrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.decrementIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r35.showSeconds);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r35.showSeconds);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r35.hourFormat == "12");
  }
}
var _c7 = (a0) => [a0];
function Calendar_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r207 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 77)(1, "button", 78);
    ɵɵlistener("keydown", function Calendar_div_3_div_6_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r207);
      const ctx_r206 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r206.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r207);
      const ctx_r208 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r208.onTodayButtonClick($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 78);
    ɵɵlistener("keydown", function Calendar_div_3_div_6_Template_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r207);
      const ctx_r209 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r209.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_2_listener($event) {
      ɵɵrestoreView(_r207);
      const ctx_r210 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r210.onClearButtonClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r36.getTranslation("today"))("ngClass", ɵɵpureFunction1(4, _c7, ctx_r36.todayButtonStyleClass));
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r36.getTranslation("clear"))("ngClass", ɵɵpureFunction1(6, _c7, ctx_r36.clearButtonStyleClass));
  }
}
function Calendar_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c8 = (a1, a2, a3, a4, a5, a6) => ({
  "p-datepicker p-component": true,
  "p-datepicker-inline": a1,
  "p-disabled": a2,
  "p-datepicker-timeonly": a3,
  "p-datepicker-multiple-month": a4,
  "p-datepicker-monthpicker": a5,
  "p-datepicker-touch-ui": a6
});
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a1) => ({
  value: "visibleTouchUI",
  params: a1
});
var _c11 = (a1) => ({
  value: "visible",
  params: a1
});
function Calendar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r212 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19, 20);
    ɵɵlistener("@overlayAnimation.start", function Calendar_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r212);
      const ctx_r211 = ɵɵnextContext();
      return ɵɵresetView(ctx_r211.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Calendar_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r212);
      const ctx_r213 = ɵɵnextContext();
      return ɵɵresetView(ctx_r213.onOverlayAnimationDone($event));
    })("click", function Calendar_div_3_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r212);
      const ctx_r214 = ɵɵnextContext();
      return ɵɵresetView(ctx_r214.onOverlayClick($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, Calendar_div_3_ng_container_3_Template, 1, 0, "ng-container", 12)(4, Calendar_div_3_ng_container_4_Template, 5, 3, "ng-container", 6)(5, Calendar_div_3_div_5_Template, 27, 20, "div", 21)(6, Calendar_div_3_div_6_Template, 3, 8, "div", 22);
    ɵɵprojection(7, 1);
    ɵɵtemplate(8, Calendar_div_3_ng_container_8_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.panelStyleClass);
    ɵɵproperty("ngStyle", ctx_r2.panelStyle)("ngClass", ɵɵpureFunction6(14, _c8, ctx_r2.inline, ctx_r2.disabled, ctx_r2.timeOnly, ctx_r2.numberOfMonths > 1, ctx_r2.view === "month", ctx_r2.touchUI))("@overlayAnimation", ctx_r2.touchUI ? ɵɵpureFunction1(24, _c10, ɵɵpureFunction2(21, _c9, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)) : ɵɵpureFunction1(29, _c11, ɵɵpureFunction2(26, _c9, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)))("@.disabled", ctx_r2.inline === true);
    ɵɵattribute("aria-label", ctx_r2.getTranslation("chooseDate"))("role", ctx_r2.inline ? null : "dialog")("aria-modal", ctx_r2.inline ? null : "true");
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.timeOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r2.showTime || ctx_r2.timeOnly) && ctx_r2.currentView === "date");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.showButtonBar);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
  }
}
var _c12 = [[["p-header"]], [["p-footer"]]];
var _c13 = (a1, a2, a3, a4, a5) => ({
  "p-calendar": true,
  "p-input-icon-right": a1,
  "p-calendar-w-btn": a2,
  "p-calendar-timeonly": a3,
  "p-calendar-disabled": a4,
  "p-focus": a5
});
var _c14 = ["p-header", "p-footer"];
var CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Calendar),
  multi: true
};
var Calendar = class _Calendar {
  document;
  el;
  renderer;
  cd;
  zone;
  config;
  overlayService;
  iconDisplay = "button";
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Placeholder text for the input.
   * @group Props
   */
  placeholder;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the icon button for accessibility.
   * @group Props
   */
  iconAriaLabel;
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Format of the date which can also be defined at locale settings.
   * @group Props
   */
  dateFormat;
  /**
   * Separator for multiple selection mode.
   * @group Props
   */
  multipleSeparator = ",";
  /**
   * Separator for joining start and end dates on range selection mode.
   * @group Props
   */
  rangeSeparator = "-";
  /**
   * When enabled, displays the calendar as inline. Default is false for popup mode.
   * @group Props
   */
  inline = false;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @group Props
   */
  showOtherMonths = true;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @group Props
   */
  selectOtherMonths;
  /**
   * When enabled, displays a button with icon next to input.
   * @group Props
   */
  showIcon;
  /**
   * Icon of the calendar button.
   * @group Props
   */
  icon;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having#mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @group Props
   */
  readonlyInput;
  /**
   * The cutoff year for determining the century for a date.
   * @group Props
   */
  shortYearCutoff = "+10";
  /**
   * Whether the month should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated Navigator is always on.
   */
  monthNavigator;
  /**
   * Whether the year should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated  Navigator is always on.
   */
  yearNavigator;
  /**
   * Specifies 12 or 24 hour format.
   * @group Props
   */
  hourFormat = "24";
  /**
   * Whether to display timepicker only.
   * @group Props
   */
  timeOnly;
  /**
   * Hours to change per step.
   * @group Props
   */
  stepHour = 1;
  /**
   * Minutes to change per step.
   * @group Props
   */
  stepMinute = 1;
  /**
   * Seconds to change per step.
   * @group Props
   */
  stepSecond = 1;
  /**
   * Whether to show the seconds in time picker.
   * @group Props
   */
  showSeconds = false;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @group Props
   */
  showOnFocus = true;
  /**
   * When enabled, calendar will show week numbers.
   * @group Props
   */
  showWeek = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Type of the value to write back to ngModel, default is date and alternative is string.
   * @group Props
   */
  dataType = "date";
  /**
   * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
   * @group Props
   */
  selectionMode = "single";
  /**
   * Maximum number of selectable dates in multiple mode.
   * @group Props
   */
  maxDateCount;
  /**
   * Whether to display today and clear buttons at the footer
   * @group Props
   */
  showButtonBar;
  /**
   * Style class of the today button.
   * @group Props
   */
  todayButtonStyleClass = "p-button-text";
  /**
   * Style class of the clear button.
   * @group Props
   */
  clearButtonStyleClass = "p-button-text";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Style class of the datetimepicker container element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the datetimepicker container element.
   * @group Props
   */
  panelStyle;
  /**
   * Keep invalid value when input blur.
   * @group Props
   */
  keepInvalid = false;
  /**
   * Whether to hide the overlay on date selection.
   * @group Props
   */
  hideOnDateTimeSelect = true;
  /**
   * When enabled, calendar overlay is displayed as optimized for touch devices.
   * @group Props
   */
  touchUI;
  /**
   * Separator of time selector.
   * @group Props
   */
  timeSeparator = ":";
  /**
   * When enabled, can only focus on elements inside the calendar.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * The minimum selectable date.
   * @group Props
   */
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The maximum selectable date.
   * @group Props
   */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with dates that should be disabled (not selectable).
   * @group Props
   */
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with weekday numbers that should be disabled (not selectable).
   * @group Props
   */
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
   * @group Props
   * @deprecated Years are based on decades by default.
   */
  get yearRange() {
    return this._yearRange;
  }
  set yearRange(yearRange) {
    this._yearRange = yearRange;
    if (yearRange) {
      const years = yearRange.split(":");
      const yearStart = parseInt(years[0]);
      const yearEnd = parseInt(years[1]);
      this.populateYearOptions(yearStart, yearEnd);
    }
  }
  /**
   * Whether to display timepicker.
   * @group Props
   */
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === void 0) {
      this.initTime(this.value || /* @__PURE__ */ new Date());
    }
    this.updateInputfield();
  }
  /**
   * An array of options for responsive design.
   * @group Props
   */
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Number of months to display.
   * @group Props
   */
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Defines the first of the week for various date calculations.
   * @group Props
   */
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  /**
   * Option to set calendar locale.
   * @group Props
   * @deprecated Locale property has no effect, use new i18n API instead.
   */
  set locale(newLocale) {
    console.warn("Locale property has no effect, use new i18n API instead.");
  }
  /**
   * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
   * @group Props
   */
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  /**
   * Set the date to highlight on first opening if the field is blank.
   * @group Props
   */
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || /* @__PURE__ */ new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Callback to invoke on focus of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when date panel closed.
   * @param {Event} event - Mouse event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on date select.
   * @param {Date} date - date value.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when input field cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when input field is being typed.
   * @param {Event} event - browser event
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when today button is clicked.
   * @param {Date} date - today as a date instance.
   * @group Emits
   */
  onTodayClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onClearClick = new EventEmitter();
  /**
   * Callback to invoke when a month is changed using the navigators.
   * @param {CalendarMonthChangeEvent} event - custom month change event.
   * @group Emits
   */
  onMonthChange = new EventEmitter();
  /**
   * Callback to invoke when a year is changed using the navigators.
   * @param {CalendarYearChangeEvent} event - custom year change event.
   * @group Emits
   */
  onYearChange = new EventEmitter();
  /**
   * Callback to invoke when clicked outside of the date panel.
   * @group Emits
   */
  onClickOutside = new EventEmitter();
  /**
   * Callback to invoke when datepicker panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  templates;
  containerViewChild;
  inputfieldViewChild;
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus && !this.inline) {
          this.initFocusableCell();
        }
      }
    }
  }
  contentViewChild;
  value;
  dates;
  months;
  weekDays;
  currentMonth;
  currentYear;
  currentHour;
  currentMinute;
  currentSecond;
  pm;
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus;
  isKeydown;
  filled;
  inputFieldValue = null;
  _minDate;
  _maxDate;
  _showTime;
  _yearRange;
  preventDocumentListener;
  dateTemplate;
  headerTemplate;
  footerTemplate;
  disabledDateTemplate;
  decadeTemplate;
  previousIconTemplate;
  nextIconTemplate;
  triggerIconTemplate;
  clearIconTemplate;
  decrementIconTemplate;
  incrementIconTemplate;
  inputIconTemplate;
  _disabledDates;
  _disabledDays;
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  _responsiveOptions;
  currentView;
  attributeSelector;
  panelId;
  _numberOfMonths = 1;
  _firstDayOfWeek;
  _view = "date";
  preventFocus;
  _defaultDate;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
  }
  constructor(document, el, renderer, cd, zone, config, overlayService) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    this.attributeSelector = UniqueComponentId();
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView = this.view;
    if (this.view === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "date":
          this.dateTemplate = item.template;
          break;
        case "decade":
          this.decadeTemplate = item.template;
          break;
        case "disabledDate":
          this.disabledDateTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "inputicon":
          this.inputIconTemplate = item.template;
          break;
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
        case "triggericon":
          this.triggerIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "decrementicon":
          this.decrementIconTemplate = item.template;
          break;
        case "incrementicon":
          this.incrementIconTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.dateTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
      if (!this.disabled && !this.inline) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          if (this.contentViewChild && this.contentViewChild.nativeElement) {
            this.contentViewChild.nativeElement.style.width = DomHandler.getOuterWidth(this.containerViewChild?.nativeElement) + "px";
          }
        }
      }
    }
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 11 - 1;
        y = year + 1;
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.disabled || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.isSingleSelection() && this.hideOnDateTimeSelect) {
      setTimeout(() => {
        event2.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection())
      return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
    else
      return true;
  }
  onMonthSelect(event2, index) {
    if (this.view === "month") {
      this.onDateSelect(event2, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view === "year") {
      this.onDateSelect(event2, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + " ";
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.inputFieldValue = formattedValue;
    this.updateFilledState();
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += " " + this.formatTime(date);
        }
      }
    }
    return formattedValue;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == "12") {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
    if (this.showTime) {
      if (this.hourFormat == "12") {
        if (this.currentHour === 12)
          date.setHours(this.pm ? 12 : 0);
        else
          date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == "date") {
      this.onModelChange(this.value);
    } else if (this.dataType == "string") {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) {
          stringArrValue = this.value.map((date) => this.formatDateTime(date));
        }
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1])
          return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else
          return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (this.isComparable() && !this.isMultipleSelection()) {
      const [start, end] = this.isRangeSelection() ? this.value : [this.value, this.value];
      const selected = new Date(this.currentYear, month, 1);
      return selected >= start && selected <= (end ?? start);
    }
    return false;
  }
  isMonthDisabled(month) {
    for (let day = 1; day < this.getDaysCountInMonth(month, this.currentYear) + 1; day++) {
      if (this.isSelectable(day, month, this.currentYear, false)) {
        return false;
      }
    }
    return true;
  }
  isYearDisabled(year) {
    return !this.isSelectable(1, this.currentMonth, year, false);
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && ObjectUtils.isDate(value))
      return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else
      return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (ObjectUtils.isDate(start) && ObjectUtils.isDate(end)) {
      let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === "single";
  }
  isRangeSelection() {
    return this.selectionMode === "range";
  }
  isMultipleSelection() {
    return this.selectionMode === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year) {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event2) {
    this.focus = false;
    this.onBlur.emit(event2);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.inputFieldValue = null;
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation("monthNames")[index];
  }
  getYear(month) {
    return this.currentView === "month" ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.disabled;
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      case 9:
        if (!this.inline) {
          this.trapFocus(event2);
        }
        if (this.inline) {
          const headerElements = DomHandler.findSingle(this.containerViewChild?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (element == headerElements.children[headerElements.children.length - 1]) {
            this.initFocusableCell();
          }
        }
        break;
      case 27:
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event2);
    } else if (event2.keyCode === 27) {
      if (this.overlayVisible) {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild) {
      DomHandler.getFocusableElements(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event2, date, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    switch (event2.which) {
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = DomHandler.index(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (DomHandler.hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = DomHandler.index(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (DomHandler.hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          let focusCell = prevCell.children[0];
          if (DomHandler.hasClass(focusCell, "p-disabled") || DomHandler.hasClass(focusCell.parentElement, "p-datepicker-weeknumber")) {
            this.navigateToMonth(true, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(true, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (DomHandler.hasClass(focusCell, "p-disabled")) {
            this.navigateToMonth(false, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(false, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      case 13:
      case 32: {
        this.onDateSelect(event2, date);
        event2.preventDefault();
        break;
      }
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = DomHandler.index(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 13:
      case 32: {
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      }
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = DomHandler.index(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 13:
      case 32: {
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      }
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      case 9: {
        this.trapFocus(event2);
        break;
      }
      default:
        break;
    }
  }
  navigateToMonth(prev, groupIndex) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        let cells = DomHandler.find(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
        let focusCell = cells[cells.length - 1];
        focusCell.tabIndex = "0";
        focusCell.focus();
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        let focusCell = DomHandler.findSingle(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
        focusCell.tabIndex = "0";
        focusCell.focus();
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward)
          DomHandler.findSingle(this.contentViewChild.nativeElement, ".p-datepicker-prev").focus();
        else
          DomHandler.findSingle(this.contentViewChild.nativeElement, ".p-datepicker-next").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === "month") {
            cells = DomHandler.find(this.contentViewChild.nativeElement, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cells = DomHandler.find(this.contentViewChild.nativeElement, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
          } else {
            cells = DomHandler.find(this.contentViewChild.nativeElement, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === "month") {
            cell = DomHandler.findSingle(this.contentViewChild.nativeElement, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cell = DomHandler.findSingle(this.contentViewChild.nativeElement, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
          } else {
            cell = DomHandler.findSingle(this.contentViewChild.nativeElement, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === "month") {
      let cells = DomHandler.find(contentEl, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
      let selectedCell = DomHandler.findSingle(contentEl, ".p-monthpicker .p-monthpicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = DomHandler.find(contentEl, '.p-monthpicker .p-monthpicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else if (this.currentView === "year") {
      let cells = DomHandler.find(contentEl, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
      let selectedCell = DomHandler.findSingle(contentEl, ".p-yearpicker .p-yearpicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = DomHandler.find(contentEl, '.p-yearpicker .p-yearpicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else {
      cell = DomHandler.findSingle(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = DomHandler.findSingle(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell)
          cell = todayCell;
        else
          cell = DomHandler.findSingle(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.disabled) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = DomHandler.getFocusableElements(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1)
                return this.hideOverlay();
              else if (focusedIndex === 0)
                return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1) {
            if (this.timeOnly) {
              focusableElements[0].focus();
            } else {
              let spanIndex = 0;
              for (let i = 0; i < focusableElements.length; i++) {
                if (focusableElements[i].tagName === "SPAN")
                  spanIndex = i;
              }
              focusableElements[spanIndex].focus();
            }
          } else if (focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1)
              return this.hideOverlay();
            focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour = function(hours, pm) {
    if (this.hourFormat == "12") {
      if (hours === 12) {
        return pm ? 12 : 0;
      } else {
        return pm ? hours + 12 : hours;
      }
    }
    return hours;
  };
  validateTime(hour, minute, second, pm) {
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    const valueDateString = value ? value.toDateString() : null;
    if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
      if (this.minDate.getHours() > convertedHour) {
        return false;
      }
      if (this.minDate.getHours() === convertedHour) {
        if (this.minDate.getMinutes() > minute) {
          return false;
        }
        if (this.minDate.getMinutes() === minute) {
          if (this.minDate.getSeconds() > second) {
            return false;
          }
        }
      }
    }
    if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
      if (this.maxDate.getHours() < convertedHour) {
        return false;
      }
      if (this.maxDate.getHours() === convertedHour) {
        if (this.maxDate.getMinutes() < minute) {
          return false;
        }
        if (this.maxDate.getMinutes() === minute) {
          if (this.maxDate.getSeconds() < second) {
            return false;
          }
        }
      }
    }
    return true;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour;
    let newHour = this.currentHour + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24")
      newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat == "12") {
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
      this.currentHour = newHour;
      this.pm = newPM;
    }
    event2.preventDefault();
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.disabled) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.disabled) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.disabled && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1)
          this.incrementHour(event2);
        else
          this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1)
          this.incrementMinute(event2);
        else
          this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1)
          this.incrementSecond(event2);
        else
          this.decrementSecond(event2);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    let newHour = this.currentHour - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24")
      newHour = newHour < 0 ? 24 + newHour : newHour;
    else if (this.hourFormat == "12") {
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
      this.currentHour = newHour;
      this.pm = newPM;
    }
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = this.currentMinute + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
      this.currentMinute = newMinute;
    }
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = this.currentMinute - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
      this.currentMinute = newMinute;
    }
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
      this.currentSecond = newSecond;
    }
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
      this.currentSecond = newSecond;
    }
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat == "12") {
      if (this.currentHour === 12)
        value.setHours(this.pm ? 12 : 0);
      else
        value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1])
        value = [this.value[0], value];
      else
        value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm;
    if (this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, newPM)) {
      this.pm = newPM;
      this.updateTime();
    }
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid) {
        this.updateModel(value);
      }
    } catch (err) {
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.filled = val != null && val.length;
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    let isValid = true;
    if (this.isSingleSelection()) {
      if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
        isValid = false;
      }
    } else if (value.every((v) => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {
      if (this.isRangeSelection()) {
        isValid = value.length > 1 && value[1] > value[0] ? true : false;
      }
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == "12" && !ampm) {
      throw "Invalid Time";
    }
    this.pm = ampm === "PM" || ampm === "pm";
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return ObjectUtils.isDate(date) && ObjectUtils.isNotEmpty(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = val.getSeconds();
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.inputfieldViewChild?.nativeElement.focus();
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild?.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.overlay = event2.element;
          this.overlay?.setAttribute(this.attributeSelector, "");
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI)
              zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
            else
              zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event2);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onClose.emit(event2);
        break;
    }
  }
  onOverlayAnimationDone(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event2.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.document.body.appendChild(this.overlay);
      else
        DomHandler.appendChild(this.overlay, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.appendTo) {
        if (this.view === "date") {
          this.overlay.style.width = DomHandler.getOuterWidth(this.overlay) + "px";
          this.overlay.style.minWidth = DomHandler.getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
        } else {
          this.overlay.style.width = DomHandler.getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
        }
        DomHandler.absolutePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      } else {
        DomHandler.relativePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      let maskStyleClass = "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter";
      DomHandler.addMultipleClasses(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
        this.disableModality();
        this.overlayVisible = false;
      });
      this.renderer.appendChild(this.document.body, this.mask);
      DomHandler.blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      DomHandler.addClass(this.mask, "p-component-overlay-leave");
      if (!this.animationEndListener) {
        this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
      }
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (DomHandler.hasClass(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  writeValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  getDateFormat() {
    return this.dateFormat || this.getTranslation("dateFormat");
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = (match, value, shortNames, longNames) => {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    let output = "";
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return "";
    }
    let output = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == "12" && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat == "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw "Invalid time";
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
      throw "Invalid time";
    } else {
      if (this.hourFormat == "12") {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort((a, b) => {
        return -(a[1].length - b[1].length);
      });
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    if (this.view === "month") {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw "Invalid date";
    }
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  updateFilledState() {
    this.filled = this.inputFieldValue && this.inputFieldValue != "";
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(event2);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
          if (this.isOutsideClicked(event2) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event2);
              this.cd.markForCheck();
            });
          }
        });
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return DomHandler.hasClass(event2.target, "p-datepicker-prev") || DomHandler.hasClass(event2.target, "p-datepicker-prev-icon") || DomHandler.hasClass(event2.target, "p-datepicker-next") || DomHandler.hasClass(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static ɵfac = function Calendar_Factory(t) {
    return new (t || _Calendar)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Calendar,
    selectors: [["p-calendar"]],
    contentQueries: function Calendar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Calendar_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputfieldViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function Calendar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus)("p-calendar-clearable", ctx.showClear && !ctx.disabled);
      }
    },
    inputs: {
      iconDisplay: "iconDisplay",
      style: "style",
      styleClass: "styleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      name: "name",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      iconAriaLabel: "iconAriaLabel",
      disabled: "disabled",
      dateFormat: "dateFormat",
      multipleSeparator: "multipleSeparator",
      rangeSeparator: "rangeSeparator",
      inline: "inline",
      showOtherMonths: "showOtherMonths",
      selectOtherMonths: "selectOtherMonths",
      showIcon: "showIcon",
      icon: "icon",
      appendTo: "appendTo",
      readonlyInput: "readonlyInput",
      shortYearCutoff: "shortYearCutoff",
      monthNavigator: "monthNavigator",
      yearNavigator: "yearNavigator",
      hourFormat: "hourFormat",
      timeOnly: "timeOnly",
      stepHour: "stepHour",
      stepMinute: "stepMinute",
      stepSecond: "stepSecond",
      showSeconds: "showSeconds",
      required: "required",
      showOnFocus: "showOnFocus",
      showWeek: "showWeek",
      showClear: "showClear",
      dataType: "dataType",
      selectionMode: "selectionMode",
      maxDateCount: "maxDateCount",
      showButtonBar: "showButtonBar",
      todayButtonStyleClass: "todayButtonStyleClass",
      clearButtonStyleClass: "clearButtonStyleClass",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      keepInvalid: "keepInvalid",
      hideOnDateTimeSelect: "hideOnDateTimeSelect",
      touchUI: "touchUI",
      timeSeparator: "timeSeparator",
      focusTrap: "focusTrap",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      tabindex: "tabindex",
      minDate: "minDate",
      maxDate: "maxDate",
      disabledDates: "disabledDates",
      disabledDays: "disabledDays",
      yearRange: "yearRange",
      showTime: "showTime",
      responsiveOptions: "responsiveOptions",
      numberOfMonths: "numberOfMonths",
      firstDayOfWeek: "firstDayOfWeek",
      locale: "locale",
      view: "view",
      defaultDate: "defaultDate"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClose: "onClose",
      onSelect: "onSelect",
      onClear: "onClear",
      onInput: "onInput",
      onTodayClick: "onTodayClick",
      onClearClick: "onClearClick",
      onMonthChange: "onMonthChange",
      onYearChange: "onYearChange",
      onClickOutside: "onClickOutside",
      onShow: "onShow"
    },
    features: [ɵɵProvidersFeature([CALENDAR_VALUE_ACCESSOR])],
    ngContentSelectors: _c14,
    decls: 4,
    vars: 12,
    consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "ngIf"], [3, "class", "ngStyle", "ngClass", "click", 4, "ngIf"], ["type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "value", "readonly", "ngStyle", "placeholder", "disabled", "ngClass", "focus", "keydown", "click", "blur", "input"], ["inputfield", ""], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "pButton", "", "pRipple", "", "class", "p-datepicker-trigger p-button-icon-only", "tabindex", "0", 3, "disabled", "click", 4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-calendar-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-calendar-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "pButton", "", "pRipple", "", "tabindex", "0", 1, "p-datepicker-trigger", "p-button-icon-only", 3, "disabled", "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click"], [3, "ngStyle", "ngClass", "click"], ["contentWrapper", ""], ["class", "p-timepicker", 4, "ngIf"], ["class", "p-datepicker-buttonbar", 4, "ngIf"], [1, "p-datepicker-group-container"], ["class", "p-datepicker-group", 4, "ngFor", "ngForOf"], ["class", "p-monthpicker", 4, "ngIf"], ["class", "p-yearpicker", 4, "ngIf"], [1, "p-datepicker-group"], [1, "p-datepicker-header"], ["class", "p-datepicker-prev p-link", "type", "button", "pRipple", "", 3, "keydown", "click", 4, "ngIf"], [1, "p-datepicker-title"], ["type", "button", "class", "p-datepicker-month p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-datepicker-year p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["class", "p-datepicker-decade", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-next", "p-link", 3, "keydown", "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-datepicker-next-icon", 4, "ngIf"], ["class", "p-datepicker-calendar-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-prev", "p-link", 3, "keydown", "click"], ["class", "p-datepicker-prev-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-datepicker-prev-icon"], ["type", "button", 1, "p-datepicker-month", "p-link", 3, "disabled", "click", "keydown"], ["type", "button", 1, "p-datepicker-year", "p-link", 3, "disabled", "click", "keydown"], [1, "p-datepicker-decade"], [1, "p-datepicker-next-icon"], [1, "p-datepicker-calendar-container"], ["role", "grid", 1, "p-datepicker-calendar"], ["class", "p-datepicker-weekheader p-disabled", 4, "ngIf"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "p-datepicker-weekheader", "p-disabled"], ["scope", "col"], ["class", "p-datepicker-weeknumber", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-datepicker-weeknumber"], [1, "p-disabled"], ["draggable", "false", "pRipple", "", 3, "ngClass", "click", "keydown"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-monthpicker"], ["class", "p-monthpicker-month", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-monthpicker-month", 3, "ngClass", "click", "keydown"], [1, "p-yearpicker"], ["class", "p-yearpicker-year", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-yearpicker-year", 3, "ngClass", "click", "keydown"], [1, "p-timepicker"], [1, "p-hour-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave"], [1, "p-separator"], [1, "p-minute-picker"], ["class", "p-separator", 4, "ngIf"], ["class", "p-second-picker", 4, "ngIf"], ["class", "p-ampm-picker", 4, "ngIf"], [1, "p-second-picker"], [1, "p-ampm-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "click", "keydown.enter"], [1, "p-datepicker-buttonbar"], ["type", "button", "pButton", "", "pRipple", "", 3, "label", "ngClass", "keydown", "click"]],
    template: function Calendar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c12);
        ɵɵelementStart(0, "span", 0, 1);
        ɵɵtemplate(2, Calendar_ng_template_2_Template, 5, 21, "ng-template", 2)(3, Calendar_div_3_Template, 9, 31, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction5(6, _c13, ctx.showIcon && ctx.iconDisplay === "input", ctx.showIcon && ctx.iconDisplay === "button", ctx.timeOnly, ctx.disabled, ctx.focus || ctx.overlayVisible))("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.inline);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon],
    styles: ["@layer primeng{.p-calendar{position:relative;display:inline-flex;max-width:100%}.p-calendar .p-inputtext{flex:1 1 auto;width:1%}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute;top:0;left:0}.p-datepicker-inline{display:inline-block;position:static;overflow-x:auto}.p-datepicker-header{display:flex;align-items:center;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-prev,.p-datepicker-next{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group{flex:1 1 auto}.p-datepicker-multiple-month .p-datepicker-group-container{display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:flex;justify-content:space-between;align-items:center}.p-timepicker{display:flex;justify-content:center;align-items:center}.p-timepicker button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:flex;align-items:center;flex-direction:column}.p-datepicker-touch-ui,.p-calendar .p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;transform:translate(-50%,-50%)}.p-yearpicker-year{width:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-calendar-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-calendar-clearable{position:relative}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Calendar, [{
    type: Component,
    args: [{
      selector: "p-calendar",
      template: `
        <span
            #container
            [ngClass]="{
                'p-calendar': true,
                'p-input-icon-right': showIcon && iconDisplay === 'input',
                'p-calendar-w-btn': showIcon && iconDisplay === 'button',
                'p-calendar-timeonly': timeOnly,
                'p-calendar-disabled': disabled,
                'p-focus': focus || overlayVisible
            }"
            [ngStyle]="style"
            [class]="styleClass"
        >
            <ng-template [ngIf]="!inline">
                <input
                    #inputfield
                    type="text"
                    role="combobox"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    [attr.required]="required"
                    [attr.aria-required]="required"
                    aria-autocomplete="none"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible"
                    [attr.aria-controls]="panelId"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [value]="inputFieldValue"
                    (focus)="onInputFocus($event)"
                    (keydown)="onInputKeydown($event)"
                    (click)="onInputClick()"
                    (blur)="onInputBlur($event)"
                    [readonly]="readonlyInput"
                    (input)="onUserInput($event)"
                    [ngStyle]="inputStyle"
                    [class]="inputStyleClass"
                    [placeholder]="placeholder || ''"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [attr.inputmode]="touchUI ? 'off' : null"
                    [ngClass]="'p-inputtext p-component'"
                    autocomplete="off"
                />
                <ng-container *ngIf="showClear && !disabled && value != null">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-calendar-clear-icon'" (click)="clear()" />
                    <span *ngIf="clearIconTemplate" class="p-calendar-clear-icon" (click)="clear()">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <button
                    type="button"
                    [attr.aria-label]="iconButtonAriaLabel"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible"
                    [attr.aria-controls]="panelId"
                    pButton
                    pRipple
                    *ngIf="showIcon && iconDisplay === 'button'"
                    (click)="onButtonClick($event, inputfield)"
                    class="p-datepicker-trigger p-button-icon-only"
                    [disabled]="disabled"
                    tabindex="0"
                >
                    <span *ngIf="icon" [ngClass]="icon"></span>
                    <ng-container *ngIf="!icon">
                        <CalendarIcon *ngIf="!triggerIconTemplate" />
                        <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>
                    </ng-container>
                </button>
                <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                    <CalendarIcon *ngIf="!inputIconTemplate" (click)="onButtonClick($event)" />
                    <ng-container *ngTemplateOutlet="inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                </ng-container>
            </ng-template>
            <div
                #contentWrapper
                [class]="panelStyleClass"
                [ngStyle]="panelStyle"
                [ngClass]="{
                    'p-datepicker p-component': true,
                    'p-datepicker-inline': inline,
                    'p-disabled': disabled,
                    'p-datepicker-timeonly': timeOnly,
                    'p-datepicker-multiple-month': this.numberOfMonths > 1,
                    'p-datepicker-monthpicker': view === 'month',
                    'p-datepicker-touch-ui': touchUI
                }"
                [@overlayAnimation]="
                    touchUI
                        ? { value: 'visibleTouchUI', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }
                        : { value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }
                "
                [attr.aria-label]="getTranslation('chooseDate')"
                [attr.role]="inline ? null : 'dialog'"
                [attr.aria-modal]="inline ? null : 'true'"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationDone($event)"
                (click)="onOverlayClick($event)"
                *ngIf="inline || overlayVisible"
            >
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="!timeOnly">
                    <div class="p-datepicker-group-container">
                        <div class="p-datepicker-group" *ngFor="let month of months; let i = index">
                            <div class="p-datepicker-header">
                                <button (keydown)="onContainerButtonKeydown($event)" class="p-datepicker-prev p-link" (click)="onPrevButtonClick($event)" *ngIf="i === 0" type="button" [attr.aria-label]="prevIconAriaLabel" pRipple>
                                    <ChevronLeftIcon [styleClass]="'p-datepicker-prev-icon'" *ngIf="!previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate" class="p-datepicker-prev-icon">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                                    </span>
                                </button>
                                <div class="p-datepicker-title">
                                    <button
                                        type="button"
                                        (click)="switchToMonthView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        *ngIf="currentView === 'date'"
                                        class="p-datepicker-month p-link"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="this.getTranslation('chooseMonth')"
                                    >
                                        {{ getMonthName(month.month) }}
                                    </button>
                                    <button
                                        type="button"
                                        (click)="switchToYearView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        *ngIf="currentView !== 'year'"
                                        class="p-datepicker-year p-link"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="getTranslation('chooseYear')"
                                    >
                                        {{ getYear(month) }}
                                    </button>
                                    <span class="p-datepicker-decade" *ngIf="currentView === 'year'">
                                        <ng-container *ngIf="!decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                        <ng-container *ngTemplateOutlet="decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                    </span>
                                </div>
                                <button
                                    (keydown)="onContainerButtonKeydown($event)"
                                    class="p-datepicker-next p-link"
                                    (click)="onNextButtonClick($event)"
                                    [style.display]="numberOfMonths === 1 ? 'inline-flex' : i === numberOfMonths - 1 ? 'inline-flex' : 'none'"
                                    type="button"
                                    [attr.aria-label]="nextIconAriaLabel"
                                    pRipple
                                >
                                    <ChevronRightIcon [styleClass]="'p-datepicker-next-icon'" *ngIf="!nextIconTemplate" />
                                    <span *ngIf="nextIconTemplate" class="p-datepicker-next-icon">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                                    </span>
                                </button>
                            </div>
                            <div class="p-datepicker-calendar-container" *ngIf="currentView === 'date'">
                                <table class="p-datepicker-calendar" role="grid">
                                    <thead>
                                        <tr>
                                            <th *ngIf="showWeek" class="p-datepicker-weekheader p-disabled">
                                                <span>{{ getTranslation('weekHeader') }}</span>
                                            </th>
                                            <th scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                                <span>{{ weekDay }}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let week of month.dates; let j = index">
                                            <td *ngIf="showWeek" class="p-datepicker-weeknumber">
                                                <span class="p-disabled">
                                                    {{ month.weekNumbers[j] }}
                                                </span>
                                            </td>
                                            <td *ngFor="let date of week" [attr.aria-label]="date.day" [ngClass]="{ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }">
                                                <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                                    <span
                                                        [ngClass]="{ 'p-highlight': isSelected(date) && date.selectable, 'p-disabled': !date.selectable }"
                                                        (click)="onDateSelect($event, date)"
                                                        draggable="false"
                                                        (keydown)="onDateCellKeydown($event, date, i)"
                                                        pRipple
                                                    >
                                                        <ng-container *ngIf="!dateTemplate && (date.selectable || !disabledDateTemplate)">{{ date.day }}</ng-container>
                                                        <ng-container *ngIf="date.selectable || !disabledDateTemplate">
                                                            <ng-container *ngTemplateOutlet="dateTemplate; context: { $implicit: date }"></ng-container>
                                                        </ng-container>
                                                        <ng-container *ngIf="!date.selectable">
                                                            <ng-container *ngTemplateOutlet="disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                        </ng-container>
                                                    </span>
                                                    <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                        {{ date.day }}
                                                    </div>
                                                </ng-container>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="p-monthpicker" *ngIf="currentView === 'month'">
                        <span
                            *ngFor="let m of monthPickerValues(); let i = index"
                            (click)="onMonthSelect($event, i)"
                            (keydown)="onMonthCellKeydown($event, i)"
                            class="p-monthpicker-month"
                            [ngClass]="{ 'p-highlight': isMonthSelected(i), 'p-disabled': isMonthDisabled(i) }"
                            pRipple
                        >
                            {{ m }}
                            <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                                {{ m }}
                            </div>
                        </span>
                    </div>
                    <div class="p-yearpicker" *ngIf="currentView === 'year'">
                        <span
                            *ngFor="let y of yearPickerValues()"
                            (click)="onYearSelect($event, y)"
                            (keydown)="onYearCellKeydown($event, y)"
                            class="p-yearpicker-year"
                            [ngClass]="{ 'p-highlight': isYearSelected(y), 'p-disabled': isYearDisabled(y) }"
                            pRipple
                        >
                            {{ y }}
                            <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                                {{ y }}
                            </div>
                        </span>
                    </div>
                </ng-container>
                <div class="p-timepicker" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                    <div class="p-hour-picker">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementHour($event)"
                            (keydown.space)="incrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextHour')"
                            pRipple
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate"></ng-template>
                        </button>
                        <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementHour($event)"
                            (keydown.space)="decrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevHour')"
                            pRipple
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate"></ng-template>
                        </button>
                    </div>
                    <div class="p-separator">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-minute-picker">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementMinute($event)"
                            (keydown.space)="incrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextMinute')"
                            pRipple
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate"></ng-template>
                        </button>
                        <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementMinute($event)"
                            (keydown.space)="decrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevMinute')"
                            pRipple
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate"></ng-template>
                        </button>
                    </div>
                    <div class="p-separator" *ngIf="showSeconds">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-second-picker" *ngIf="showSeconds">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementSecond($event)"
                            (keydown.space)="incrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextSecond')"
                            pRipple
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate"></ng-template>
                        </button>
                        <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementSecond($event)"
                            (keydown.space)="decrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevSecond')"
                            pRipple
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate"></ng-template>
                        </button>
                    </div>
                    <div class="p-ampm-picker" *ngIf="hourFormat == '12'">
                        <button class="p-link" type="button" (keydown)="onContainerButtonKeydown($event)" (click)="toggleAMPM($event)" (keydown.enter)="toggleAMPM($event)" [attr.aria-label]="getTranslation('am')" pRipple>
                            <ChevronUpIcon *ngIf="!incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate"></ng-template>
                        </button>
                        <span>{{ pm ? 'PM' : 'AM' }}</span>
                        <button class="p-link" type="button" (keydown)="onContainerButtonKeydown($event)" (click)="toggleAMPM($event)" (keydown.enter)="toggleAMPM($event)" [attr.aria-label]="getTranslation('pm')" pRipple>
                            <ChevronDownIcon *ngIf="!decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate"></ng-template>
                        </button>
                    </div>
                </div>
                <div class="p-datepicker-buttonbar" *ngIf="showButtonBar">
                    <button type="button" [label]="getTranslation('today')" (keydown)="onContainerButtonKeydown($event)" (click)="onTodayButtonClick($event)" pButton pRipple [ngClass]="[todayButtonStyleClass]"></button>
                    <button type="button" [label]="getTranslation('clear')" (keydown)="onContainerButtonKeydown($event)" (click)="onClearButtonClick($event)" pButton pRipple [ngClass]="[clearButtonStyleClass]"></button>
                </div>
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </span>
    `,
      animations: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])],
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "focus",
        "[class.p-calendar-clearable]": "showClear && !disabled"
      },
      providers: [CALENDAR_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-calendar{position:relative;display:inline-flex;max-width:100%}.p-calendar .p-inputtext{flex:1 1 auto;width:1%}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute;top:0;left:0}.p-datepicker-inline{display:inline-block;position:static;overflow-x:auto}.p-datepicker-header{display:flex;align-items:center;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-prev,.p-datepicker-next{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group{flex:1 1 auto}.p-datepicker-multiple-month .p-datepicker-group-container{display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:flex;justify-content:space-between;align-items:center}.p-timepicker{display:flex;justify-content:center;align-items:center}.p-timepicker button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:flex;align-items:center;flex-direction:column}.p-datepicker-touch-ui,.p-calendar .p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;transform:translate(-50%,-50%)}.p-yearpicker-year{width:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-calendar-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-calendar-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    iconDisplay: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    iconAriaLabel: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    multipleSeparator: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    showOtherMonths: [{
      type: Input
    }],
    selectOtherMonths: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input
    }],
    shortYearCutoff: [{
      type: Input
    }],
    monthNavigator: [{
      type: Input
    }],
    yearNavigator: [{
      type: Input
    }],
    hourFormat: [{
      type: Input
    }],
    timeOnly: [{
      type: Input
    }],
    stepHour: [{
      type: Input
    }],
    stepMinute: [{
      type: Input
    }],
    stepSecond: [{
      type: Input
    }],
    showSeconds: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    showOnFocus: [{
      type: Input
    }],
    showWeek: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    dataType: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    maxDateCount: [{
      type: Input
    }],
    showButtonBar: [{
      type: Input
    }],
    todayButtonStyleClass: [{
      type: Input
    }],
    clearButtonStyleClass: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    keepInvalid: [{
      type: Input
    }],
    hideOnDateTimeSelect: [{
      type: Input
    }],
    touchUI: [{
      type: Input
    }],
    timeSeparator: [{
      type: Input
    }],
    focusTrap: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    disabledDays: [{
      type: Input
    }],
    yearRange: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    numberOfMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onTodayClick: [{
      type: Output
    }],
    onClearClick: [{
      type: Output
    }],
    onMonthChange: [{
      type: Output
    }],
    onYearChange: [{
      type: Output
    }],
    onClickOutside: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container", {
        static: false
      }]
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }]
  });
})();
var CalendarModule = class _CalendarModule {
  static ɵfac = function CalendarModule_Factory(t) {
    return new (t || _CalendarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CalendarModule,
    declarations: [Calendar],
    imports: [CommonModule, ButtonModule, SharedModule, RippleModule, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon],
    exports: [Calendar, ButtonModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, SharedModule, RippleModule, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, ButtonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, SharedModule, RippleModule, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon],
      exports: [Calendar, ButtonModule, SharedModule],
      declarations: [Calendar]
    }]
  }], null, null);
})();
export {
  CALENDAR_VALUE_ACCESSOR,
  Calendar,
  CalendarModule
};
//# sourceMappingURL=primeng_calendar.js.map
