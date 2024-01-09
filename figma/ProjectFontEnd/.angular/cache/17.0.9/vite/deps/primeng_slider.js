import {
  DomHandler
} from "./chunk-FWPELXFP.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EVORN7IU.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-ASYGGAD5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-A7BB6COH.js";

// ../node_modules/primeng/fesm2022/primeng-slider.mjs
var _c0 = ["sliderHandle"];
var _c1 = ["sliderHandleStart"];
var _c2 = ["sliderHandleEnd"];
var _c3 = (a0, a1) => ({
  left: a0,
  width: a1
});
function Slider_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c3, ctx_r0.offset !== null && ctx_r0.offset !== void 0 ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"));
    ɵɵattribute("data-pc-section", "range");
  }
}
var _c4 = (a0, a1) => ({
  bottom: a0,
  height: a1
});
function Slider_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c4, ctx_r1.offset !== null && ctx_r1.offset !== void 0 ? ctx_r1.offset + "%" : ctx_r1.handleValues[0] + "%", ctx_r1.diff ? ctx_r1.diff + "%" : ctx_r1.handleValues[1] - ctx_r1.handleValues[0] + "%"));
    ɵɵattribute("data-pc-section", "range");
  }
}
var _c5 = (a0) => ({
  height: a0
});
function Slider_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c5, ctx_r2.handleValue + "%"));
    ɵɵattribute("data-pc-section", "range");
  }
}
var _c6 = (a0) => ({
  width: a0
});
function Slider_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c6, ctx_r3.handleValue + "%"));
    ɵɵattribute("data-pc-section", "range");
  }
}
var _c7 = (a0, a1) => ({
  left: a0,
  bottom: a1
});
function Slider_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 6, 7);
    ɵɵlistener("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.onDragStart($event));
    })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onDrag($event));
    })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onDragEnd($event));
    })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.onMouseDown($event));
    })("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("transition", ctx_r4.dragging ? "none" : null);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(11, _c7, ctx_r4.orientation == "horizontal" ? ctx_r4.handleValue + "%" : null, ctx_r4.orientation == "vertical" ? ctx_r4.handleValue + "%" : null));
    ɵɵattribute("tabindex", ctx_r4.disabled ? null : ctx_r4.tabindex)("aria-valuemin", ctx_r4.min)("aria-valuenow", ctx_r4.value)("aria-valuemax", ctx_r4.max)("aria-labelledby", ctx_r4.ariaLabelledBy)("aria-label", ctx_r4.ariaLabel)("aria-orientation", ctx_r4.orientation)("data-pc-section", "handle");
  }
}
var _c8 = (a0) => ({
  "p-slider-handle-active": a0
});
function Slider_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 8, 9);
    ɵɵlistener("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onKeyDown($event, 0));
    })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onMouseDown($event, 0));
    })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.onDragStart($event, 0));
    })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onDrag($event, 0));
    })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onDragEnd($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵstyleProp("transition", ctx_r5.dragging ? "none" : null);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(12, _c7, ctx_r5.rangeStartLeft, ctx_r5.rangeStartBottom))("ngClass", ɵɵpureFunction1(15, _c8, ctx_r5.handleIndex == 0));
    ɵɵattribute("tabindex", ctx_r5.disabled ? null : ctx_r5.tabindex)("aria-valuemin", ctx_r5.min)("aria-valuenow", ctx_r5.value ? ctx_r5.value[0] : null)("aria-valuemax", ctx_r5.max)("aria-labelledby", ctx_r5.ariaLabelledBy)("aria-label", ctx_r5.ariaLabel)("aria-orientation", ctx_r5.orientation)("data-pc-section", "startHandler");
  }
}
function Slider_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10, 11);
    ɵɵlistener("keydown", function Slider_span_7_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.onKeyDown($event, 1));
    })("mousedown", function Slider_span_7_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24.onMouseDown($event, 1));
    })("touchstart", function Slider_span_7_Template_span_touchstart_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r25 = ɵɵnextContext();
      return ɵɵresetView(ctx_r25.onDragStart($event, 1));
    })("touchmove", function Slider_span_7_Template_span_touchmove_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.onDrag($event, 1));
    })("touchend", function Slider_span_7_Template_span_touchend_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.onDragEnd($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵstyleProp("transition", ctx_r6.dragging ? "none" : null);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(12, _c7, ctx_r6.rangeEndLeft, ctx_r6.rangeEndBottom))("ngClass", ɵɵpureFunction1(15, _c8, ctx_r6.handleIndex == 1));
    ɵɵattribute("tabindex", ctx_r6.disabled ? null : ctx_r6.tabindex)("aria-valuemin", ctx_r6.min)("aria-valuenow", ctx_r6.value ? ctx_r6.value[1] : null)("aria-valuemax", ctx_r6.max)("aria-labelledby", ctx_r6.ariaLabelledBy)("aria-label", ctx_r6.ariaLabel)("aria-orientation", ctx_r6.orientation)("data-pc-section", "endHandler");
  }
}
var _c9 = (a1, a2, a3, a4) => ({
  "p-slider p-component": true,
  "p-disabled": a1,
  "p-slider-horizontal": a2,
  "p-slider-vertical": a3,
  "p-slider-animate": a4
});
var SLIDER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Slider),
  multi: true
};
var Slider = class _Slider {
  document;
  platformId;
  el;
  renderer;
  ngZone;
  cd;
  /**
   * When enabled, displays an animation on click of the slider bar.
   * @group Props
   */
  animate;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Orientation of the slider.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step;
  /**
   * When specified, allows two boundary values to be picked.
   * @group Props
   */
  range;
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
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke on value change.
   * @param {SliderChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when slide ended.
   * @param {SliderSlideEndEvent} event - Custom slide end event.
   * @group Emits
   */
  onSlideEnd = new EventEmitter();
  sliderHandle;
  sliderHandleStart;
  sliderHandleEnd;
  value;
  values;
  handleValue;
  handleValues = [];
  diff;
  offset;
  bottom;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  dragging;
  dragListener;
  mouseupListener;
  initX;
  initY;
  barWidth;
  barHeight;
  sliderHandleClick;
  handleIndex = 0;
  startHandleValue;
  startx;
  starty;
  constructor(document, platformId, el, renderer, ngZone, cd) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.cd = cd;
  }
  onMouseDown(event, index) {
    if (this.disabled) {
      return;
    }
    this.dragging = true;
    this.updateDomData();
    this.sliderHandleClick = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    this.bindDragListeners();
    event.target.focus();
    event.preventDefault();
    if (this.animate) {
      DomHandler.removeClass(this.el.nativeElement.children[0], "p-slider-animate");
    }
  }
  onDragStart(event, index) {
    if (this.disabled) {
      return;
    }
    var touchobj = event.changedTouches[0];
    this.startHandleValue = this.range ? this.handleValues[index] : this.handleValue;
    this.dragging = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    if (this.orientation === "horizontal") {
      this.startx = parseInt(touchobj.clientX, 10);
      this.barWidth = this.el.nativeElement.children[0].offsetWidth;
    } else {
      this.starty = parseInt(touchobj.clientY, 10);
      this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    }
    if (this.animate) {
      DomHandler.removeClass(this.el.nativeElement.children[0], "p-slider-animate");
    }
    event.preventDefault();
  }
  onDrag(event) {
    if (this.disabled) {
      return;
    }
    var touchobj = event.changedTouches[0], handleValue = 0;
    if (this.orientation === "horizontal") {
      handleValue = Math.floor((parseInt(touchobj.clientX, 10) - this.startx) * 100 / this.barWidth) + this.startHandleValue;
    } else {
      handleValue = Math.floor((this.starty - parseInt(touchobj.clientY, 10)) * 100 / this.barHeight) + this.startHandleValue;
    }
    this.setValueFromHandle(event, handleValue);
    event.preventDefault();
  }
  onDragEnd(event) {
    if (this.disabled) {
      return;
    }
    this.dragging = false;
    if (this.range)
      this.onSlideEnd.emit({
        originalEvent: event,
        values: this.values
      });
    else
      this.onSlideEnd.emit({
        originalEvent: event,
        value: this.value
      });
    if (this.animate) {
      DomHandler.addClass(this.el.nativeElement.children[0], "p-slider-animate");
    }
    event.preventDefault();
  }
  onBarClick(event) {
    if (this.disabled) {
      return;
    }
    if (!this.sliderHandleClick) {
      this.updateDomData();
      this.handleChange(event);
      if (this.range)
        this.onSlideEnd.emit({
          originalEvent: event,
          values: this.values
        });
      else
        this.onSlideEnd.emit({
          originalEvent: event,
          value: this.value
        });
    }
    this.sliderHandleClick = false;
  }
  onKeyDown(event, index) {
    this.handleIndex = index;
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        this.decrementValue(event, index);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.incrementValue(event, index);
        event.preventDefault();
        break;
      case "PageDown":
        this.decrementValue(event, index, true);
        event.preventDefault();
        break;
      case "PageUp":
        this.incrementValue(event, index, true);
        event.preventDefault();
        break;
      case "Home":
        this.updateValue(this.min, event);
        event.preventDefault();
        break;
      case "End":
        this.updateValue(this.max, event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  decrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step)
        newValue = this.values[index] - this.step;
      else
        newValue = this.values[index] - 1;
    } else {
      if (this.step)
        newValue = this.value - this.step;
      else if (!this.step && pageKey)
        newValue = this.value - 10;
      else
        newValue = this.value - 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  incrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step)
        newValue = this.values[index] + this.step;
      else
        newValue = this.values[index] + 1;
    } else {
      if (this.step)
        newValue = this.value + this.step;
      else if (!this.step && pageKey)
        newValue = this.value + 10;
      else
        newValue = this.value + 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  handleChange(event) {
    let handleValue = this.calculateHandleValue(event);
    this.setValueFromHandle(event, handleValue);
  }
  bindDragListeners() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        if (!this.dragListener) {
          this.dragListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
            if (this.dragging) {
              this.ngZone.run(() => {
                this.handleChange(event);
              });
            }
          });
        }
        if (!this.mouseupListener) {
          this.mouseupListener = this.renderer.listen(documentTarget, "mouseup", (event) => {
            if (this.dragging) {
              this.dragging = false;
              this.ngZone.run(() => {
                if (this.range)
                  this.onSlideEnd.emit({
                    originalEvent: event,
                    values: this.values
                  });
                else
                  this.onSlideEnd.emit({
                    originalEvent: event,
                    value: this.value
                  });
                if (this.animate) {
                  DomHandler.addClass(this.el.nativeElement.children[0], "p-slider-animate");
                }
              });
            }
          });
        }
      });
    }
  }
  unbindDragListeners() {
    if (this.dragListener) {
      this.dragListener();
      this.dragListener = null;
    }
    if (this.mouseupListener) {
      this.mouseupListener();
      this.mouseupListener = null;
    }
  }
  setValueFromHandle(event, handleValue) {
    let newValue = this.getValueFromHandle(handleValue);
    if (this.range) {
      if (this.step) {
        this.handleStepChange(newValue, this.values[this.handleIndex]);
      } else {
        this.handleValues[this.handleIndex] = handleValue;
        this.updateValue(newValue, event);
      }
    } else {
      if (this.step) {
        this.handleStepChange(newValue, this.value);
      } else {
        this.handleValue = handleValue;
        this.updateValue(newValue, event);
      }
    }
    this.cd.markForCheck();
  }
  handleStepChange(newValue, oldValue) {
    let diff = newValue - oldValue;
    let val = oldValue;
    let _step = this.step;
    if (diff < 0) {
      val = oldValue + Math.ceil(newValue / _step - oldValue / _step) * _step;
    } else if (diff > 0) {
      val = oldValue + Math.floor(newValue / _step - oldValue / _step) * _step;
    }
    this.updateValue(val);
    this.updateHandleValue();
  }
  writeValue(value) {
    if (this.range)
      this.values = value || [0, 0];
    else
      this.value = value || 0;
    this.updateHandleValue();
    this.updateDiffAndOffset();
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
  get rangeStartLeft() {
    if (!this.isVertical())
      return this.handleValues[0] > 100 ? "100%" : this.handleValues[0] + "%";
    return null;
  }
  get rangeStartBottom() {
    return this.isVertical() ? this.handleValues[0] + "%" : "auto";
  }
  get rangeEndLeft() {
    return this.isVertical() ? null : this.handleValues[1] + "%";
  }
  get rangeEndBottom() {
    return this.isVertical() ? this.handleValues[1] + "%" : "auto";
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  updateDomData() {
    let rect = this.el.nativeElement.children[0].getBoundingClientRect();
    this.initX = rect.left + DomHandler.getWindowScrollLeft();
    this.initY = rect.top + DomHandler.getWindowScrollTop();
    this.barWidth = this.el.nativeElement.children[0].offsetWidth;
    this.barHeight = this.el.nativeElement.children[0].offsetHeight;
  }
  calculateHandleValue(event) {
    if (this.orientation === "horizontal")
      return (event.pageX - this.initX) * 100 / this.barWidth;
    else
      return (this.initY + this.barHeight - event.pageY) * 100 / this.barHeight;
  }
  updateHandleValue() {
    if (this.range) {
      this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
      this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
    } else {
      if (this.value < this.min)
        this.handleValue = 0;
      else if (this.value > this.max)
        this.handleValue = 100;
      else
        this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
    }
    if (this.step) {
      this.updateDiffAndOffset();
    }
  }
  updateDiffAndOffset() {
    this.diff = this.getDiff();
    this.offset = this.getOffset();
  }
  getDiff() {
    return Math.abs(this.handleValues[0] - this.handleValues[1]);
  }
  getOffset() {
    return Math.min(this.handleValues[0], this.handleValues[1]);
  }
  updateValue(val, event) {
    if (this.range) {
      let value = val;
      if (this.handleIndex == 0) {
        if (value < this.min) {
          value = this.min;
          this.handleValues[0] = 0;
        } else if (value > this.values[1]) {
          if (value > this.max) {
            value = this.max;
            this.handleValues[0] = 100;
          }
        }
        this.sliderHandleStart?.nativeElement.focus();
      } else {
        if (value > this.max) {
          value = this.max;
          this.handleValues[1] = 100;
          this.offset = this.handleValues[1];
        } else if (value < this.min) {
          value = this.min;
          this.handleValues[1] = 0;
        } else if (value < this.values[0]) {
          this.offset = this.handleValues[1];
        }
        this.sliderHandleEnd?.nativeElement.focus();
      }
      if (this.step) {
        this.updateHandleValue();
      } else {
        this.updateDiffAndOffset();
      }
      this.values[this.handleIndex] = this.getNormalizedValue(value);
      let newValues = [this.minVal, this.maxVal];
      this.onModelChange(newValues);
      this.onChange.emit({
        event,
        values: this.values
      });
    } else {
      if (val < this.min) {
        val = this.min;
        this.handleValue = 0;
      } else if (val > this.max) {
        val = this.max;
        this.handleValue = 100;
      }
      this.value = this.getNormalizedValue(val);
      this.onModelChange(this.value);
      this.onChange.emit({
        event,
        value: this.value
      });
      this.sliderHandle?.nativeElement.focus();
    }
    this.updateHandleValue();
  }
  getValueFromHandle(handleValue) {
    return (this.max - this.min) * (handleValue / 100) + this.min;
  }
  getDecimalsCount(value) {
    if (value && Math.floor(value) !== value)
      return value.toString().split(".")[1].length || 0;
    return 0;
  }
  getNormalizedValue(val) {
    let decimalsCount = this.getDecimalsCount(this.step);
    if (decimalsCount > 0) {
      return +parseFloat(val.toString()).toFixed(decimalsCount);
    } else {
      return Math.floor(val);
    }
  }
  ngOnDestroy() {
    this.unbindDragListeners();
  }
  get minVal() {
    return Math.min(this.values[1], this.values[0]);
  }
  get maxVal() {
    return Math.max(this.values[1], this.values[0]);
  }
  static ɵfac = function Slider_Factory(t) {
    return new (t || _Slider)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Slider,
    selectors: [["p-slider"]],
    viewQuery: function Slider_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderHandle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderHandleStart = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderHandleEnd = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      animate: "animate",
      disabled: "disabled",
      min: "min",
      max: "max",
      orientation: "orientation",
      step: "step",
      range: "range",
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: "tabindex"
    },
    outputs: {
      onChange: "onChange",
      onSlideEnd: "onSlideEnd"
    },
    features: [ɵɵProvidersFeature([SLIDER_VALUE_ACCESSOR])],
    decls: 8,
    vars: 18,
    consts: [[3, "ngStyle", "ngClass", "click"], ["class", "p-slider-range", 3, "ngStyle", 4, "ngIf"], ["class", "p-slider-handle", "role", "slider", 3, "transition", "ngStyle", "touchstart", "touchmove", "touchend", "mousedown", "keydown", 4, "ngIf"], ["class", "p-slider-handle", "role", "slider", 3, "transition", "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["class", "p-slider-handle", 3, "transition", "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [1, "p-slider-range", 3, "ngStyle"], ["role", "slider", 1, "p-slider-handle", 3, "ngStyle", "touchstart", "touchmove", "touchend", "mousedown", "keydown"], ["sliderHandle", ""], ["role", "slider", 1, "p-slider-handle", 3, "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandleStart", ""], [1, "p-slider-handle", 3, "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandleEnd", ""]],
    template: function Slider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function Slider_Template_div_click_0_listener($event) {
          return ctx.onBarClick($event);
        });
        ɵɵtemplate(1, Slider_span_1_Template, 1, 5, "span", 1)(2, Slider_span_2_Template, 1, 5, "span", 1)(3, Slider_span_3_Template, 1, 4, "span", 1)(4, Slider_span_4_Template, 1, 4, "span", 1)(5, Slider_span_5_Template, 2, 14, "span", 2)(6, Slider_span_6_Template, 2, 17, "span", 3)(7, Slider_span_7_Template, 2, 17, "span", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction4(13, _c9, ctx.disabled, ctx.orientation == "horizontal", ctx.orientation == "vertical", ctx.animate));
        ɵɵattribute("data-pc-name", "slider")("data-pc-section", "root");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.range && ctx.orientation == "horizontal");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.range && ctx.orientation == "vertical");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "vertical");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "horizontal");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.range);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.range);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.range);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle],
    styles: ["@layer primeng{.p-slider{position:relative}.p-slider .p-slider-handle{position:absolute;cursor:grab;touch-action:none;display:block}.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Slider, [{
    type: Component,
    args: [{
      selector: "p-slider",
      template: `
        <div
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-slider p-component': true, 'p-disabled': disabled, 'p-slider-horizontal': orientation == 'horizontal', 'p-slider-vertical': orientation == 'vertical', 'p-slider-animate': animate }"
            (click)="onBarClick($event)"
            [attr.data-pc-name]="'slider'"
            [attr.data-pc-section]="'root'"
        >
            <span
                *ngIf="range && orientation == 'horizontal'"
                class="p-slider-range"
                [ngStyle]="{ left: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%', width: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%' }"
                [attr.data-pc-section]="'range'"
            ></span>
            <span
                *ngIf="range && orientation == 'vertical'"
                class="p-slider-range"
                [ngStyle]="{ bottom: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%', height: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%' }"
                [attr.data-pc-section]="'range'"
            ></span>
            <span *ngIf="!range && orientation == 'vertical'" class="p-slider-range" [attr.data-pc-section]="'range'" [ngStyle]="{ height: handleValue + '%' }"></span>
            <span *ngIf="!range && orientation == 'horizontal'" class="p-slider-range" [attr.data-pc-section]="'range'" [ngStyle]="{ width: handleValue + '%' }"></span>
            <span
                *ngIf="!range"
                #sliderHandle
                class="p-slider-handle"
                [style.transition]="dragging ? 'none' : null"
                [ngStyle]="{ left: orientation == 'horizontal' ? handleValue + '%' : null, bottom: orientation == 'vertical' ? handleValue + '%' : null }"
                (touchstart)="onDragStart($event)"
                (touchmove)="onDrag($event)"
                (touchend)="onDragEnd($event)"
                (mousedown)="onMouseDown($event)"
                (keydown)="onKeyDown($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'handle'"
            ></span>
            <span
                *ngIf="range"
                #sliderHandleStart
                [style.transition]="dragging ? 'none' : null"
                class="p-slider-handle"
                [ngStyle]="{ left: rangeStartLeft, bottom: rangeStartBottom }"
                [ngClass]="{ 'p-slider-handle-active': handleIndex == 0 }"
                (keydown)="onKeyDown($event, 0)"
                (mousedown)="onMouseDown($event, 0)"
                (touchstart)="onDragStart($event, 0)"
                (touchmove)="onDrag($event, 0)"
                (touchend)="onDragEnd($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value ? value[0] : null"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'startHandler'"
            ></span>
            <span
                *ngIf="range"
                #sliderHandleEnd
                [style.transition]="dragging ? 'none' : null"
                class="p-slider-handle"
                [ngStyle]="{ left: rangeEndLeft, bottom: rangeEndBottom }"
                [ngClass]="{ 'p-slider-handle-active': handleIndex == 1 }"
                (keydown)="onKeyDown($event, 1)"
                (mousedown)="onMouseDown($event, 1)"
                (touchstart)="onDragStart($event, 1)"
                (touchmove)="onDrag($event, 1)"
                (touchend)="onDragEnd($event)"
                [attr.tabindex]="disabled ? null : tabindex"
                [attr.aria-valuemin]="min"
                [attr.aria-valuenow]="value ? value[1] : null"
                [attr.aria-valuemax]="max"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-orientation]="orientation"
                [attr.data-pc-section]="'endHandler'"
            ></span>
        </div>
    `,
      providers: [SLIDER_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-slider{position:relative}.p-slider .p-slider-handle{position:absolute;cursor:grab;touch-action:none;display:block}.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    animate: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    range: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onSlideEnd: [{
      type: Output
    }],
    sliderHandle: [{
      type: ViewChild,
      args: ["sliderHandle"]
    }],
    sliderHandleStart: [{
      type: ViewChild,
      args: ["sliderHandleStart"]
    }],
    sliderHandleEnd: [{
      type: ViewChild,
      args: ["sliderHandleEnd"]
    }]
  });
})();
var SliderModule = class _SliderModule {
  static ɵfac = function SliderModule_Factory(t) {
    return new (t || _SliderModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SliderModule,
    declarations: [Slider],
    imports: [CommonModule],
    exports: [Slider]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Slider],
      declarations: [Slider]
    }]
  }], null, null);
})();
export {
  SLIDER_VALUE_ACCESSOR,
  Slider,
  SliderModule
};
//# sourceMappingURL=primeng_slider.js.map
