(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "fyIi");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");






const _c0 = ["slickWidthDiv"];
const _c1 = ["slickModal"];
function SliderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "width": a0, "height": a1, "border-radius": a2, "margin-left": a3, "margin-right": a4 }; };
const _c3 = function (a0) { return { "border-radius": a0 }; };
function SliderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](6, _c2, ctx_r3.cardStyle.width + "px", ctx_r3.cardStyle.height + "px", ctx_r3.cardStyle.borderRadius, ctx_r3.cardStyle.spaceBetweenCards + "px", ctx_r3.cardStyle.spaceBetweenCards + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx_r3.cardStyle.borderRadius + "px"))("src", slide_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, ctx_r3.cardStyle.borderRadius + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r4.captionLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r4.captionText, "");
} }
class SliderComponent {
    constructor() {
        // Screen width(viewport width)
        this.scrWidth = 0;
        this.loading = true;
        // Number of slides to show or scroll
        this.slidesToShow = 0;
        this.slidesToScroll = 1;
        // Total card width including margin
        this.totCardWidth = 200;
        this.loading = true;
    }
    // Determine screen width(width of viewport)
    getScreenSize(event) {
        this.scrWidth = window.innerWidth;
        this.totCardWidth = this.cardStyle.width + (this.cardStyle.spaceBetweenCards);
        if (this.slickWidthDiv) {
            const divOffWidth = this.slickWidthDiv.nativeElement.offsetWidth;
            if (divOffWidth === (this.totCardWidth) * 2) {
                this.scrWidth = divOffWidth / 2;
            }
            else {
                this.scrWidth = divOffWidth;
            }
            this.scrWidth = this.slickWidthDiv.nativeElement.offsetWidth;
        }
        this.adjustSlidesPerScreenWidth();
    }
    // Hey coder see below function title
    adjustSlidesPerScreenWidth() {
        this.slidesToShow = Math.floor(this.scrWidth / this.totCardWidth);
        this.slideConfig = {
            slidesToShow: this.slidesToShow,
            slidesToScroll: this.slidesToScroll,
            autoplay: true,
            arrows: false,
            pauseOnFocus: false,
            pauseOnHover: true,
            autoplaySpeed: this.cardStyle.speed
        };
    }
    ngOnInit() {
        this.slidesToShow = this.cardStyle.slidesToShow;
        this.slidesToScroll = this.cardStyle.slidesToScroll;
        this.getScreenSize();
    }
    ngAfterViewInit() {
        this.slickModal.slickNext();
        this.getScreenSize();
        setTimeout(() => {
            this.loading = false;
        }, 1600);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickWidthDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModal = _t.first);
    } }, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { slides: "slides", cardStyle: "cardStyle" }, decls: 16, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "mat-title"], ["href", ""], [1, "div", "div__slickCarouselwrapper", 2, "margin", "auto"], ["slickWidthDiv", ""], ["class", "div__loading", 4, "ngIf"], [1, "carousel", 2, "margin", "auto", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "control", "prev"], [1, "i", "i__buttonIcon", "fas", "fa-caret-square-left", "btn", "btn__prev", 3, "click"], [1, "control", "next", 3, "click"], [1, "i", "i__buttonIcon", "fas", "fa-caret-square-right"], [1, "div__loading"], [1, "loader", "Indigo"], ["ngxSlickItem", "", 1, "slide", 3, "ngStyle"], [1, "div", "div__slideWrapper", 2, "width", "100%", "height", "100%"], ["alt", "", 1, "img", "img__slickImage", 3, "ngStyle", "src"], [1, "div", "div__captionWrapper", 3, "ngStyle"], [3, "href"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "See all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SliderComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-slick-carousel", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SliderComponent_div_11_Template, 7, 16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r2.slickPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r2.slickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"]], styles: ["div[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.img__slickImage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n\n.div__slickCarouselwrapper[_ngcontent-%COMP%] {\n  position: relative;\n  outline: none;\n}\n\n.control[_ngcontent-%COMP%] {\n  top: 0;\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: black;\n  font-weight: bold;\n  font-size: 3rem;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 1 !important;\n  z-index: 1;\n  \n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.control[_ngcontent-%COMP%]   .i__buttonIcon[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n\n.div__slideWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.div__captionWrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0));\n  z-index: 2;\n  overflow: hidden;\n  outline: none;\n}\n\n.div__captionWrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: aliceblue;\n  text-decoration: none;\n  outline: none;\n}\n\n.div__captionWrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n\n.div__loading[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 4;\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: helvetica, arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 900;\n  color: #3f51b5;\n  letter-spacing: 0.2em;\n  z-index: 4;\n}\n\n.loader[_ngcontent-%COMP%]::before, .loader[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 15px;\n  height: 15px;\n  background: #3f51b5;\n  position: absolute;\n  animation: load 0.7s infinite alternate ease-in-out;\n}\n\n.loader[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n\n@keyframes load {\n  0% {\n    left: 0;\n    height: 30px;\n    width: 15px;\n  }\n  50% {\n    height: 8px;\n    width: 40px;\n  }\n  100% {\n    left: 235px;\n    height: 30px;\n    width: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxhQUFBO0FBUEo7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFOSjs7QUFRQTtFQUNHLGtCQUFBO0VBQ0MsYUFBQTtBQUxKOztBQU9BO0VBQ0ksTUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUpKOztBQUtJO0VBQ0UsUUFBQTtBQUhOOztBQUtJO0VBQ0UsT0FBQTtBQUhOOztBQUtJO0VBQ0UsY0F2Q087QUFvQ2I7O0FBU0E7RUFDQyxrQkFBQTtBQU5EOztBQVFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQTlEWTtFQStEWixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQWpFaUI7RUFrRWpCLGlCQWpFbUI7RUFrRW5CLGtFQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUxGOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUpKOztBQUtJO0VBQ0UsY0F2RU87QUFvRWI7O0FBUUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFMRjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTFHVztFQTJHWCxxQkFBQTtFQUNBLFVBQUE7QUFiRjs7QUFlRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFuSFM7RUFvSFQsa0JBQUE7RUFDQSxtREFBQTtBQWJKOztBQWdCRTtFQUNFLE1BQUE7QUFkSjs7QUFpQkU7RUFDRSxTQUFBO0FBZko7O0FBbUJBO0VBQ0U7SUFBSyxPQUFBO0lBQVMsWUFBQTtJQUFjLFdBQUE7RUFiNUI7RUFjQTtJQUFNLFdBQUE7SUFBYSxXQUFBO0VBVm5CO0VBV0E7SUFBTyxXQUFBO0lBQWEsWUFBQTtJQUFjLFdBQUE7RUFObEM7QUFDRiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2FwdGlvbi1mb250OlwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4kY2FwdGlvbi1mb250LXNpemU6MS41cmVtO1xyXG4kY2FwdGlvbi1mb250LXdlaWdodDpib2xkIDtcclxuXHJcbiRkaXYtYmctZnJvbS1jb2xvcjpyZ2JhKDAsMCwwLDEpO1xyXG4kZGl2LWJnLXRvLWNvbG9yOnJnYmEoMCwwLDAsMCk7XHJcblxyXG4kaG92ZXItY29sb3I6cmdiKDYzLDgxLDE4MSwxKTtcclxuZGl2e1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbi5pbWdfX3NsaWNrSW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbi5kaXZfX3NsaWNrQ2Fyb3VzZWx3cmFwcGVye1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuLmNvbnRyb2wge1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IDA7IC8vIHJlbW92ZSBibHVlIG91dGxpbmUgYm9yZGVyLCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlIHN0aWxsIGZvY3Vzc2FibGUgZm9yIGFjY2Vzc2liaWxpdHlcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzcmVtOyAgICBcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIFBvc2l0aW9uIHRoZSBidXR0b25zICovXHJcbiAgICAmLm5leHQgeyBcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmLnByZXYge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJiAuaV9fYnV0dG9uSWNvbjpob3ZlcntcclxuICAgICAgY29sb3I6JGhvdmVyLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcbi8vIC5pX19idXR0b25JY29uOmhvdmVye1xyXG4vLyAgIGNvbG9yOiRob3Zlci1jb2xvcjtcclxuLy8gfVxyXG4uZGl2X19zbGlkZVdyYXBwZXJ7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdl9fY2FwdGlvbldyYXBwZXJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgYm90dG9tOjA7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogJGNhcHRpb24tZm9udDtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTokY2FwdGlvbi1mb250LXNpemU7XHJcbiAgZm9udC13ZWlnaHQ6JGNhcHRpb24tZm9udC13ZWlnaHQgO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRkaXYtYmctZnJvbS1jb2xvciwkZGl2LWJnLXRvLWNvbG9yKTtcclxuICB6LWluZGV4OiAyOyBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJiBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBjb2xvcjokaG92ZXItY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbn1cclxuLmRpdl9fbG9hZGluZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy9Mb2FkZXJcclxuXHJcblxyXG4kY29sb3ItYmFja2dyb3VuZDogI2VhZWNmYTtcclxuJGNvbG9yLWxvYWRlcjogJGhvdmVyLWNvbG9yO1xyXG5cclxuLmxvYWRlciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogJGNvbG9yLWxvYWRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgei1pbmRleDogNDtcclxuICBcclxuICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxvYWRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFuaW1hdGlvbjogbG9hZCAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAmOjphZnRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQge1xyXG4gIDAlIHsgbGVmdDogMDsgaGVpZ2h0OiAzMHB4OyB3aWR0aDogMTVweCB9XHJcbiAgNTAlIHsgaGVpZ2h0OiA4cHg7IHdpZHRoOiA0MHB4IH1cclxuICAxMDAlIHsgbGVmdDogMjM1cHg7IGhlaWdodDogMzBweDsgd2lkdGg6IDE1cHh9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return []; }, { slickWidthDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickWidthDiv']
        }], slickModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickModal']
        }], slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "//YF":
/*!***********************************************************!*\
  !*** ./src/app/components/trending/trending.component.ts ***!
  \***********************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TrendingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrendingComponent.ɵfac = function TrendingComponent_Factory(t) { return new (t || TrendingComponent)(); };
TrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingComponent, selectors: [["app-trending"]], decls: 2, vars: 0, template: function TrendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trending works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trending',
                templateUrl: './trending.component.html',
                styleUrls: ['./trending.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/Sl2":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/profile.service */ "KOD3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/snack-bar.service */ "b6pT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "lXt9");








function LandingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCard_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profile", eachCard_r1);
} }
class LandingComponent {
    constructor(profileService, spinner, snackBar) {
        this.profileService = profileService;
        this.spinner = spinner;
        this.snackBar = snackBar;
    }
    getProfiles() {
        // Show spinner on starting data request
        this.spinner.show();
        this.profileService.getProfiles().subscribe((profileList) => {
            console.log(profileList);
            this.ProfileList = profileList;
            // Hide spinner when we get profile
            this.spinner.hide();
        }, (error) => {
            // Hide spinner when we get error
            this.spinner.hide();
            console.log(error);
            //  Create snackbar ref to manipulate snackbar
            const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${error}`, 'Retry');
            snackbarRef.onAction().subscribe(() => {
                // Snack bar action
                // If retry is clicked then restart subscription
                this.getProfiles();
                // console.log('The snack-bar action was triggered!');
            });
        });
    }
    ngOnInit() {
        this.getProfiles();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 5, vars: 2, consts: [["fxLayoutAlign", "center", "fxLayout", "row wrap", "fxFlex", "100"], ["fxLayout", "row wrap", "fxFlex", "23", 4, "ngFor", "ngForOf"], ["bdColor", "rgba(51,51,51,0.98)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise-fade", 3, "zIndex"], [2, "font-size", "20px", "color", "#fff"], ["fxLayout", "row wrap", "fxFlex", "23"], ["fxFlex", "100", 3, "profile"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ProfileList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zIndex", 99);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pranav\Documents\Visual Studio\Aafter2020\Angular\Real\uddama\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







const _c0 = function () { return ["/Admin"]; };
const _c1 = function () { return ["routerActive"]; };
function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return ["/Approve"]; };
function HeaderComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
const _c3 = function () { return ["/Home"]; };
const _c4 = function () { return ["/SetProfile"]; };
const _c5 = function () { return ["/Synopsis"]; };
const _c6 = function () { return ["/SynopsisList"]; };
class HeaderComponent {
    constructor() {
        this.admin = true;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 20, consts: [["color", "primary", 1, "mat-typography"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", "100"], ["fxLayout", "row", "fxFlex", "100"], ["fxFlexAlign", "center", 2, "cursor", "pointer", 3, "routerLink"], ["color", "primary", "mat-flat-button", "", 1, "nav_button", 3, "routerLink", "routerLinkActive"], ["color", "primary", "mat-flat-button", "", 1, "nav_button", 2, "margin-left", "auto", 3, "routerLink", "routerLinkActive"], ["color", "primary", "class", "nav_button", "mat-flat-button", "", 3, "routerLink", "routerLinkActive", 4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Uddama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Synopsis List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 2, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_button_14_Template, 2, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".nav_button[_ngcontent-%COMP%] {\n  color: white;\n  margin: 4px;\n  font-weight: 600;\n}\n.nav_button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.routerActive[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLDBDQUFBO0FBRVI7QUFDQTtFQUNJLFVBQUE7QUFFSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2X2J1dHRvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgfVxyXG59XHJcbi5yb3V0ZXJBY3RpdmV7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "nbgS");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ "F/12");





const uri = 'http://35.202.105.222:80/'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                        useFactory: createApollo,
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "8YKC":
/*!*****************************************!*\
  !*** ./src/app/service/home.service.ts ***!
  \*****************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



const Config = __webpack_require__(/*! ../../assets/configFile.json */ "vNKI");
class HomeService {
    constructor() { }
    getHomeConfig() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Config);
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/home.service */ "8YKC");
/* harmony import */ var _service_public_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/public-post.service */ "D624");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/snack-bar.service */ "b6pT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../slider/slider.component */ "+zoA");











function HomeComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx_r2.slides)("carouselSlideStyle", ctx_r2.carouselSlideStyle);
} }
function HomeComponent_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx_r3.sliderSlides)("cardStyle", ctx_r3.cardStyle);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_2_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_span_2_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.lt-sm", 100)("fxFlex", !config_r1.width ? 100 : config_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r1.category == "Carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r1.category == "Slider");
} }
class HomeComponent {
    constructor(homeConfig, publicPostService, spinner, snackBar) {
        this.homeConfig = homeConfig;
        this.publicPostService = publicPostService;
        this.spinner = spinner;
        this.snackBar = snackBar;
        // Slide Variable to store slide data
        this.slides = [
            {
                caption: 'This is wonderful',
                images: [
                    'https://picsum.photos/600/800',
                ],
                captionLink: 'https://google.com'
            },
            {
                caption: 'This is wonderful and beautiful',
                images: [
                    'https://picsum.photos/800/900',
                ],
                captionLink: 'https://github.com'
            },
            {
                caption: 'In The Wilderness',
                images: [
                    'https://picsum.photos/1000/800',
                ],
                captionLink: 'https://udemy.com'
            },
            {
                caption: 'This thing is just awesome',
                images: [
                    'https://picsum.photos/1000/700',
                ],
                captionLink: 'https://facebook.com'
            }
        ];
        this.carouselSlideStyle = {
            height: '400px',
            width: '100%',
            display: 'block',
            speed: 3000
        };
        this.sliderSlides = [
            {
                img: 'https://picsum.photos/200',
                captionText: 'Apple',
                captionLink: 'https://apple.com'
            },
            {
                img: 'https://picsum.photos/230',
                captionText: 'You tube',
                captionLink: 'https://youtube.com'
            },
            {
                img: 'https://picsum.photos/300',
                captionText: 'Microsoft',
                captionLink: 'https://microsoft.com'
            },
            {
                img: 'https://picsum.photos/600',
                captionText: 'Blogger',
                captionLink: 'https://blogger.com'
            },
            {
                img: 'https://picsum.photos/seed/picsum/200/400',
                captionText: 'Linked In',
                captionLink: 'https://linkedin.com'
            },
            {
                img: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
                captionText: 'Mozilla',
                captionLink: 'https://mozilla.org'
            },
            {
                img: 'https://picsum.photos/200/300/?blur=2',
                captionText: 'Wikipedia',
                captionLink: 'https://en.wikipedia.org'
            },
            {
                img: 'https://picsum.photos/200/300/?blur',
                captionText: 'Google',
                captionLink: 'https://www.google.com'
            },
            {
                img: 'https://picsum.photos/200/300?grayscale',
                captionText: 'Cloudflare',
                captionLink: 'https://cloudflare.com'
            },
            {
                img: 'https://picsum.photos/id/237/100/300', captionText: 'Google Docs',
                captionLink: 'https://docs.google.com'
            }
        ];
        // Set property of each card
        this.cardStyle = {
            width: 240,
            height: 400,
            borderRadius: 10,
            spaceBetweenCards: 10,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        this.spinner.show();
    }
    getHomeConfig() {
        this.homeConfig.getHomeConfig().subscribe((configResponse) => {
            this.Config = configResponse;
        }, (err) => {
            const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${err}`, 'Retry');
            snackbarRef.onAction().subscribe(() => {
                // Snack bar action
                // If retry is clicked then restart subscription
                this.getHomeConfig();
                // console.log('The snack-bar action was triggered!');
            });
        });
    }
    getAllPosts() {
        this.publicPostService.getAllPosts().subscribe(result => {
            console.log(result);
            setTimeout(() => {
                this.spinner.hide();
            }, 2000);
        }, (error) => {
            this.spinner.hide();
            const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${error}`, 'Retry');
            snackbarRef.onAction().subscribe(() => {
                // Snack bar action
                // If retry is clicked then restart subscription
                this.getAllPosts();
                // console.log('The snack-bar action was triggered!');
            });
        });
    }
    ngOnInit() {
        this.getHomeConfig();
        this.getAllPosts();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_public_post_service__WEBPACK_IMPORTED_MODULE_2__["PublicPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 2, consts: [["fxLayout", "column", "fxFlex", "100"], ["fxLayout", "row wrap"], ["style", "margin:1%", 3, "fxFlex.lt-sm", "fxFlex", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "100px", "background-color", "black", "color", "white"], ["bdColor", "rgba(51,51,51,0.98)", "size", "medium", "color", "white", "type", "ball-spin-clockwise-fade", 3, "zIndex"], [2, "font-size", "20px", "color", "#fff"], [2, "margin", "1%", 3, "fxFlex.lt-sm", "fxFlex"], [4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 4, "ngIf"], [3, "slides", "carouselSlideStyle"], ["fxFlex", "100", "fxFlex.lt-sm", "100"], [3, "slides", "cardStyle"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Config.Layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zIndex", 99);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px !important;\n  border: 1px solid lightgrey;\n}\n\n.a[_ngcontent-%COMP%] {\n  min-width: 320px;\n  width: 300px;\n  display: block;\n  background-color: red;\n  border: 2px solid black;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcbi5he1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _service_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }, { type: _service_public_post_service__WEBPACK_IMPORTED_MODULE_2__["PublicPostService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"] }]; }, null); })();


/***/ }),

/***/ "D624":
/*!************************************************!*\
  !*** ./src/app/service/public-post.service.ts ***!
  \************************************************/
/*! exports provided: PublicPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPostService", function() { return PublicPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "nbgS");




class PublicPostService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getAllPosts() {
        return this.apollo
            .watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"] `
        {
          getPosts {
            id
            title
            content
          }
        }
      `,
        })
            .valueChanges;
    }
}
PublicPostService.ɵfac = function PublicPostService_Factory(t) { return new (t || PublicPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"])); };
PublicPostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicPostService, factory: PublicPostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }]; }, null); })();


/***/ }),

/***/ "EgB/":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 2, vars: 0, template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 2, vars: 0, template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "video works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IhIN":
/*!***********************************************************!*\
  !*** ./src/app/components/synopsis/synopsis.component.ts ***!
  \***********************************************************/
/*! exports provided: SynopsisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynopsisComponent", function() { return SynopsisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");





class SynopsisComponent {
    constructor() {
        this.slides = [
            {
                caption: 'Shivamogga',
                images: [
                    'https://picsum.photos/600/800',
                ],
                captionLink: ''
            },
            {
                caption: 'Shivamogga is wonderful and beautiful',
                images: [
                    'https://picsum.photos/800/900',
                ],
                captionLink: ''
            },
            {
                caption: 'Shivamogga',
                images: [
                    'https://picsum.photos/1000/800',
                ],
                captionLink: ''
            },
            {
                caption: 'Shivamogga is just awesome',
                images: [
                    'https://picsum.photos/1000/700',
                ],
                captionLink: ''
            }
        ];
        this.carouselSlideStyle = {
            height: '400px',
            width: '100%',
            display: 'block',
            speed: 3000
        };
    }
    ngOnInit() {
    }
}
SynopsisComponent.ɵfac = function SynopsisComponent_Factory(t) { return new (t || SynopsisComponent)(); };
SynopsisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SynopsisComponent, selectors: [["app-synopsis"]], decls: 11, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "3%", "fxFlexFill", ""], [1, "mat-title", 2, "border-bottom", "1px solid lightgray", "font-weight", "bold"], ["fxFlex", "98"], [3, "slides", "carouselSlideStyle"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "3%"], ["fxFlex", "25"], ["src", "../../../assets/download.jpg", "height", "300px", "width", "100%", 1, "avathar"], ["fxFlex", ""]], template: function SynopsisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shivamogga - 18/12/2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. Shimoga (Shivamogga) is a city in Karnataka state, southwest India. Shivappa Nayaka Palace Museum has 16th- to 18th-century stone carvings displayed on its lawns. Nearby is the huge, modern Sacred Heart Cathedral. Mandagadde Bird Sanctuary is home to species such as egrets and cormorants. The Bhadra Wildlife Sanctuary shelters elephants, tigers and panthers. Northwest of Shimoga are the powerful, towering Jog Falls. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides)("carouselSlideStyle", ctx.carouselSlideStyle);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]], styles: [".avathar[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10%;\n  z-index: -999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzeW5vcHNpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3lub3BzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGhhcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgei1pbmRleDogLTk5OTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynopsisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-synopsis',
                templateUrl: './synopsis.component.html',
                styleUrls: ['./synopsis.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KOD3":
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ProfileService {
    constructor(http) {
        this.http = http;
    }
    saveProfile(payload) {
        const url = 'http://35.202.105.222/create-profile';
        return this.http.post(url, payload);
    }
    getProfiles() {
        const url = 'http://35.202.105.222/get-profile';
        return this.http.get(url);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Oiz/":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-builder/form-builder.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "KOD3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/snack-bar.service */ "b6pT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");












const _c0 = ["profileGroup1"];
function FormBuilderComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Name is required *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormBuilderComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please enter valid Date of Birth ex: 13-02-1996 *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormBuilderComponent {
    constructor(fb, profileService, spinner, snackBar) {
        this.fb = fb;
        this.profileService = profileService;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.ProfileInfo = [];
        this.profileGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$')]],
            about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.spinner.show();
        const postObject = {};
        postObject.name = this.profileGroup.value.name;
        postObject.data = JSON.stringify(this.profileGroup.value);
        this.ProfileInfo.push(postObject);
        console.log(this.ProfileInfo);
        this.profileService.saveProfile(postObject).subscribe((savedRes) => {
            this.snackBar.openSnackBar(`Form Submitted Successfully`, 'Done');
            setTimeout(() => {
                console.log("Res =", savedRes);
                this.form.resetForm();
                this.spinner.hide();
            }, 1000);
        }, error => {
            this.spinner.hide();
            const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${error}`, 'Retry');
            snackbarRef.onAction().subscribe(() => {
                // Snack bar action
                // If retry is clicked then restart subscription
                // this.getProfiles();
                // console.log('The snack-bar action was triggered!');
            });
            console.log("Error =", error);
        });
    }
}
FormBuilderComponent.ɵfac = function FormBuilderComponent_Factory(t) { return new (t || FormBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"])); };
FormBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormBuilderComponent, selectors: [["app-form-builder"]], viewQuery: function FormBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 26, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["profileGroup1", "ngForm"], [2, "margin-top", "20px"], ["appearance", "outline", "fxFlexFill", ""], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "dateOfBirth", "placeholder", "dd-mm-yyyy"], [4, "ngIf"], ["matInput", "", "formControlName", "about"], ["mat-button", "", "type", "submit"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise-fade", 3, "zIndex"], [2, "font-size", "20px", "color", "#fff"]], template: function FormBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormBuilderComponent_Template_form_ngSubmit_0_listener() { return ctx.profileGroup.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "* Name is required *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Date Of Birth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormBuilderComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormBuilderComponent_mat_error_14_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "* About is required *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submitting...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileGroup.controls.dateOfBirth.errors && ctx.profileGroup.controls.dateOfBirth.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileGroup.controls.dateOfBirth.errors && ctx.profileGroup.controls.dateOfBirth.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zIndex", 99);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-builder',
                templateUrl: './form-builder.component.html',
                styleUrls: ['./form-builder.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: src_app_service_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['profileGroup1']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");







const _c0 = function () { return { "margin-top": "3.5em" }; };
const _c1 = function () { return { "margin-top": "3.1em" }; };
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", 2, "position", "fixed", "left", "0%", "top", "0%", "z-index", "999", "width", "100%", "box-shadow", "0px 1px 8px 5px rgba(0,0,0,0.75)"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 3, "ngStyle", "ngStyle.lt-sm"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngStyle.lt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materials/materials.module */ "bZ3k");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "EgB/");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-slick-carousel */ "fyIi");
/* harmony import */ var _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tab-view/tab-view.component */ "sfO4");
/* harmony import */ var _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/trending/trending.component */ "//YF");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/video/video.component */ "G4NA");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dialog-box/dialog-box.component */ "xk+7");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "efKA");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! apollo-angular */ "nbgS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! apollo-angular/http */ "F/12");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _components_ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ck-editor/ck-editor.component */ "irEQ");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "PjcS");
/* harmony import */ var _components_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/form-builder/form-builder.component */ "Oiz/");
/* harmony import */ var _components_synopsis_synopsis_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/synopsis/synopsis.component */ "IhIN");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");

































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_22__["APOLLO_OPTIONS"],
            useFactory: (httpLink) => {
                return {
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_24__["InMemoryCache"](),
                    link: httpLink.create({
                        uri: 'http://35.202.105.222/graphql',
                    }),
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpLink"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_20__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
        _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_11__["TabViewComponent"],
        _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_12__["TrendingComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_18__["DialogBoxComponent"],
        _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_19__["QuotesComponent"],
        _components_ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_25__["CkEditorComponent"],
        _components_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_27__["FormBuilderComponent"],
        _components_synopsis_synopsis_component__WEBPACK_IMPORTED_MODULE_28__["SynopsisComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_29__["CardComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_30__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _materials_materials_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _graphql_module__WEBPACK_IMPORTED_MODULE_20__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
                    _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                    _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
                    _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_11__["TabViewComponent"],
                    _components_trending_trending_component__WEBPACK_IMPORTED_MODULE_12__["TrendingComponent"],
                    _components_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_18__["DialogBoxComponent"],
                    _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_19__["QuotesComponent"],
                    _components_ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_25__["CkEditorComponent"],
                    _components_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_27__["FormBuilderComponent"],
                    _components_synopsis_synopsis_component__WEBPACK_IMPORTED_MODULE_28__["SynopsisComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_29__["CardComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_30__["LandingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _materials_materials_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _graphql_module__WEBPACK_IMPORTED_MODULE_20__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_22__["APOLLO_OPTIONS"],
                        useFactory: (httpLink) => {
                            return {
                                cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_24__["InMemoryCache"](),
                                link: httpLink.create({
                                    uri: 'http://35.202.105.222/graphql',
                                }),
                            };
                        },
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpLink"]],
                    },
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b6pT":
/*!**********************************************!*\
  !*** ./src/app/service/snack-bar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");



class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.duration = 4000;
    }
    openSnackBar(message, action) {
        let snackBarRef = this.snackBar.open(message, action, {
            duration: this.duration
        });
        return snackBarRef;
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "bZ3k":
/*!***********************************************!*\
  !*** ./src/app/materials/materials.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");















class MaterialsModule {
}
MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialsModule });
MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialsModule_Factory(t) { return new (t || MaterialsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]
                ],
                exports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog-box/dialog-box.component */ "xk+7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function AdminComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setOrder("upward", i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setOrder("downward", i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const options_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editCategory(options_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.screenHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", i_r4 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", options_r3.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", i_r4 == ctx_r0.optionsArray.length - 1);
} }
function AdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const component_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addComponent(component_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r9.category);
} }
function AdminComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", !options_r13.width ? 100 : options_r13.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", options_r13.category, " ");
} }
const _c0 = function () { return { "margin-bottom.px": "100" }; };
class AdminComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.screenHeight = {};
        this.optionsArray = [];
        this.componentList = [
            {
                component: 'Carousel', category: 'Carousel', width: 99
            },
            {
                component: 'Slider', category: 'Slider', width: 48
            }
        ];
        //this.screenHeight ={height: window.screen.height - 200 + 'px'};
        //this.screenHeight ={height:70 + 'px'};
    }
    ngOnInit() {
    }
    setOrder(type, index) {
        if (type === 'upward') {
            const currentObj = this.optionsArray[index];
            const previousObj = this.optionsArray[index - 1];
            this.optionsArray[index] = previousObj;
            this.optionsArray[index - 1] = currentObj;
        }
        else {
            console.log('down', this.optionsArray, index);
            const currentObj = this.optionsArray[index];
            const nextObj = this.optionsArray[index + 1];
            this.optionsArray[index] = nextObj;
            this.optionsArray[index + 1] = currentObj;
        }
        this.optionsArray.forEach((each, index) => {
            if (each.displayName === 'Carousel') {
                each.width = 99;
            }
            else {
                each.width = 48;
            }
        });
    }
    saveLayout() {
        console.log('save', this.optionsArray);
    }
    addComponent(component) {
        this.optionsArray.push(component);
    }
    editCategory(option, index) {
        const dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__["DialogBoxComponent"], { width: '400px', data: JSON.parse(JSON.stringify(option)) });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.optionsArray[index] = result;
            }
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 12, vars: 5, consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "5%", "fxFlex", "100", "fxLayout.lt-sm", "column", "fxLayoutAlign", "start start", "fxFlex", "100"], ["fxFlex", "15"], ["fxLayout", "column", 3, "ngStyle", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxFlex", ""], ["style", "height:100px; margin:1%", 3, "fxFlex", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end center", 3, "ngStyle.lt-sm"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", 3, "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "20", 2, "margin-top", "5px"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "10"], ["mat-button", "", 3, "disabled", "click"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "15"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "25"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "60", 2, "margin-top", "10px"], [2, "height", "100px", "margin", "1%", 3, "fxFlex"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_3_Template, 16, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_div_6_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_mat_card_8_Template, 2, 2, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_10_listener() { return ctx.saveLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.componentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  width: 159px;\n  margin-top: 10px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px !important;\n  border: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xyXG4gICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "efKA":
/*!*******************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.ts ***!
  \*******************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class QuotesComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuotesComponent.ɵfac = function QuotesComponent_Factory(t) { return new (t || QuotesComponent)(); };
QuotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesComponent, selectors: [["app-quotes"]], decls: 3, vars: 0, template: function QuotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quotes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " * List quotes * provide option to post quotes(if he is logged in user)\n* want to see my quotes ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quotes',
                templateUrl: './quotes.component.html',
                styleUrls: ['./quotes.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i6Wu":
/*!*******************************************************************!*\
  !*** ./src/app/components/approve-page/approve-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApprovePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePageComponent", function() { return ApprovePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ApprovePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApprovePageComponent.ɵfac = function ApprovePageComponent_Factory(t) { return new (t || ApprovePageComponent)(); };
ApprovePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovePageComponent, selectors: [["app-approve-page"]], decls: 2, vars: 0, template: function ApprovePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "approve-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApprovePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-approve-page',
                templateUrl: './approve-page.component.html',
                styleUrls: ['./approve-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "irEQ":
/*!*************************************************************!*\
  !*** ./src/app/components/ck-editor/ck-editor.component.ts ***!
  \*************************************************************/
/*! exports provided: CkEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkEditorComponent", function() { return CkEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "PjcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");







class CkEditorComponent {
    constructor() {
        this.config = { height: '2500px' };
        this.ckEditorData = '<p>Hello world!!</p>';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
    }
    submit() {
        console.log(this.ckEditorData);
    }
}
CkEditorComponent.ɵfac = function CkEditorComponent_Factory(t) { return new (t || CkEditorComponent)(); };
CkEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CkEditorComponent, selectors: [["app-ck-editor"]], decls: 4, vars: 2, consts: [[3, "editor", "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function CkEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ckeditor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CkEditorComponent_Template_ckeditor_ngModelChange_0_listener($event) { return ctx.ckEditorData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CkEditorComponent_Template_button_click_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.ckEditorData);
    } }, directives: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_2__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjay1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CkEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ck-editor',
                templateUrl: './ck-editor.component.html',
                styleUrls: ['./ck-editor.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");








const _c0 = function (a0) { return { "height": a0 }; };
function CardComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.cardStyle.imgHeight + "px"))("src", ctx_r0.profile.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CardComponent {
    constructor() {
        this.cardStyle = {
            maxHeight: '520',
            maxWidth: '300',
            margin: '40',
            imgHeight: '200'
        };
    }
    ngOnInit() {
        this.profile.data = JSON.parse(this.profile.data);
        console.log(this.profile);
        setTimeout(() => {
            // 
        }, 1000);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { profile: "profile" }, decls: 15, vars: 5, consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "100", 1, "layoutTop"], ["class", "img img__main", "mat-card-image", "", 3, "ngStyle", "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "100", 1, "layoutTop"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxFlex", "100"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "100", 1, "mat-caption"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "layoutTop"], ["mat-card-image", "", 1, "img", "img__main", 3, "ngStyle", "src"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "avatar"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_img_2_Template, 1, 4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profile.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.data == null ? null : ctx.profile.data.dateOfBirth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.data == null ? null : ctx.profile.data.about, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".img[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(50%);\n          clip-path: circle(50%);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  font-size: 105px;\n  text-align: center;\n  background-color: white;\n  color: gray;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.layoutTop[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZyB7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUpO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4ubWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5sYXlvdXRUb3Age1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mvYF":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.animations.ts ***!
  \************************************************************/
/*! exports provided: AnimationType, scaleIn, scaleOut, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationType", function() { return AnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn", function() { return scaleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOut", function() { return scaleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipIn", function() { return flipIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOut", function() { return flipOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackIn", function() { return jackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackOut", function() { return jackOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");

// =========================
// Enum for referencing animations
// =========================
var AnimationType;
(function (AnimationType) {
    AnimationType["Scale"] = "scale";
    AnimationType["Fade"] = "fade";
    AnimationType["Flip"] = "flip";
    AnimationType["JackInTheBox"] = "jackInTheBox";
})(AnimationType || (AnimationType = {}));
// =========================
// Scale
// =========================
const scaleIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.5)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }))
]);
const scaleOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.5)' }))
]);
// =========================
// Fade
// =========================
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
]);
// =========================
// Flip
// =========================
const flipIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', offset: 1 })
    ]))
]);
const flipOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
// just hide it
]);
// =========================
// Jack in the box
// =========================
const jackIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{time}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            animationFillMode: 'forwards',
            transform: 'scale(0.1) rotate(30deg)',
            transformOrigin: 'center bottom',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(-10deg)',
            offset: 0.5
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(3deg)',
            offset: 0.7
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'perspective(400px)',
            offset: 1
        })
    ]))
]);
const jackOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
// just hide it
]);


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _carousel_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.animations */ "mvYF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");






function CarouselComponent_ng_container_2_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const imageSrc_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imageSrc_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@slideAnimation", ctx_r5.animationType);
} }
function CarouselComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_2_div_2_img_1_Template, 1, 2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", slide_r1.images);
} }
function CarouselComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r1.captionLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.caption);
} }
function CarouselComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ng_container_2_div_3_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.currentSlide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.currentSlide);
} }
const _c0 = function (a0, a1, a2) { return { "display": a0, "height": a1, "width": a2 }; };
class CarouselComponent {
    constructor() {
        this.animationType = 'fade';
        // Seconds Until Slides change
        this.interval = 3000;
        // In ms
        this.currentSlide = 0;
    }
    // On previous arrow click
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }
    // On next arrow click
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
    }
    // OnHover slide should stop
    onHover() {
        clearInterval(this.intervalStore);
    }
    // OnBlur slide should start play
    onBlur() {
        this.intervalStore = window.setInterval(() => {
            const next = this.currentSlide + 1;
            this.currentSlide = next === this.slides.length ? 0 : next;
        }, this.interval);
    }
    // Upon first time the app starts set slide timer
    ngAfterViewInit() {
        this.interval = this.carouselSlideStyle.speed;
        this.onBlur();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { slides: "slides", carouselSlideStyle: "carouselSlideStyle" }, decls: 7, vars: 6, consts: [[1, "container", 3, "ngStyle"], [1, "div", "div__cauroselWrapper", "carousel", 3, "mouseenter", "mouseleave"], [4, "ngFor", "ngForOf"], [1, "control", "prev"], [1, "fas", "fa-caret-square-left", "btn", "btn__prev", 3, "click"], [1, "control", "next", 3, "click"], [1, "fas", "fa-caret-square-right"], ["class", "slide", 4, "ngIf"], ["class", "div div__caption", 4, "ngIf"], [1, "slide"], [3, "src", 4, "ngFor", "ngForOf"], [3, "src"], [1, "div", "div__caption"], ["id", "a a__captionLink", 3, "href"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_1_listener() { return ctx.onHover(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_i_click_4_listener() { return ctx.onPreviousClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_5_listener() { return ctx.onNextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.carouselSlideStyle.display, ctx.carouselSlideStyle.height, ctx.carouselSlideStyle.width));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  display: flex;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  display: block;\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3rem;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 1 !important;\n  \n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.div.div__caption[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding-bottom: 2px;\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  width: 100%;\n  height: 50%;\n  z-index: 1;\n  font-size: 1.5rem;\n  font-weight: bold;\n  background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.div.div__caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: aliceblue;\n  text-decoration: none;\n}\n\n.div.div__caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n\nbutton.prev[_ngcontent-%COMP%], button.next[_ngcontent-%COMP%] {\n  color: black;\n  z-index: 2;\n}\n\nbutton.prev[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, button.next[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkE7RUFDRSxzQkFBQTtBQXJCRjs7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxnRUFBQTtFQUNBLGFBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBcEJGOztBQTJCQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLHlCQUFBO0FBMUJGOztBQTJCRTtFQUNFLFFBQUE7QUF6Qko7O0FBMkJFO0VBQ0UsT0FBQTtBQXpCSjs7QUErQkE7RUFFRSxxQ0EzRVk7RUE0RVosbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQWxGaUI7RUFtRmpCLGlCQWxGbUI7RUFxRm5CLGtFQUFBO0VBSUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFsQ0Y7O0FBbUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQWpDSjs7QUFrQ0k7RUFDRSxjQTNGTztBQTJEYjs7QUFzQ0E7RUFDRSxZQXJHaUI7RUFzR2pCLFVBQUE7QUFuQ0Y7O0FBb0NFO0VBQ0UsY0FyR1M7QUFtRWIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gOmhvc3R7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyB9XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIHZhcmlhYmxlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRjYXB0aW9uLWZvbnQ6XCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiRjYXB0aW9uLWZvbnQtc2l6ZToxLjVyZW07XHJcbiRjYXB0aW9uLWZvbnQtd2VpZ2h0OmJvbGQgO1xyXG5cclxuJGRpdi1iZy1mcm9tLWNvbG9yOnJnYmEoMCwwLDAsMSk7XHJcbiRkaXYtYmctdG8tY29sb3I6cmdiYSgwLDAsMCwwKTtcclxuXHJcbiRob3Zlci1jb2xvcjpyZ2IoNjMsODEsMTgxLDEpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDYXJvdXNlbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAvLyB6b29tIGVmZmVjdCBvbiBob3ZlclxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBOZXh0IGFuZCBQcmV2IGJ1dHRvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IDA7IC8vIHJlbW92ZSBibHVlIG91dGxpbmUgYm9yZGVyLCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlIHN0aWxsIGZvY3Vzc2FibGUgZm9yIGFjY2Vzc2liaWxpdHlcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcblxyXG5cclxuICAvKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xyXG4gICYubmV4dCB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgJi5wcmV2IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZXh0ICBhYm92ZSBzbGlkZShDYXB0aW9uKVxyXG5cclxuLmRpdi5kaXZfX2NhcHRpb257XHJcbiAgLy8gcGFkZGluZy10b3A6IDEwJTtcclxuICBmb250LWZhbWlseTogJGNhcHRpb24tZm9udDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHotaW5kZXg6IDE7IFxyXG4gIGZvbnQtc2l6ZTokY2FwdGlvbi1mb250LXNpemU7XHJcbiAgZm9udC13ZWlnaHQ6JGNhcHRpb24tZm9udC13ZWlnaHQgO1xyXG5cclxuICAvLyBzZXQgYmxhY2sgdHJhbnNsdWNlbnQgYmcgdG8gcmVmbGVjdCB0ZXh0XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIFxyXG4gIHRvcCwkZGl2LWJnLWZyb20tY29sb3IsJGRpdi1iZy10by1jb2xvcik7XHJcblxyXG4gIC8vIGJyaW5nIHRleHQgdG8gY2VudGVyXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAmIGF7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6JGhvdmVyLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2V0IGJ1dHRvbiBzdHlsZVxyXG5idXR0b24ucHJldixidXR0b24ubmV4dHtcclxuICBjb2xvcjokZGl2LWJnLWZyb20tY29sb3I7XHJcbiAgei1pbmRleDogMjtcclxuICAmIDpob3ZlcntcclxuICAgIGNvbG9yOiRob3Zlci1jb2xvcjtcclxuICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideAnimation', [
                /* fade */
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], { params: { time: '500ms' } })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('fade => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOut"], { params: { time: '500ms' } })
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss'],
                // Fade in animation for slide change
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideAnimation', [
                        /* fade */
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], { params: { time: '500ms' } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('fade => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOut"], { params: { time: '500ms' } })
                        ]),
                    ])
                ]
            }]
    }], null, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], carouselSlideStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sfO4":
/*!***********************************************************!*\
  !*** ./src/app/components/tab-view/tab-view.component.ts ***!
  \***********************************************************/
/*! exports provided: TabViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewComponent", function() { return TabViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TabViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabViewComponent.ɵfac = function TabViewComponent_Factory(t) { return new (t || TabViewComponent)(); };
TabViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabViewComponent, selectors: [["app-tab-view"]], decls: 2, vars: 0, template: function TabViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tab-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItdmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-view',
                templateUrl: './tab-view.component.html',
                styleUrls: ['./tab-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vNKI":
/*!************************************!*\
  !*** ./src/assets/configFile.json ***!
  \************************************/
/*! exports provided: Layout, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Layout\":[{\"component\":\"Carousel\",\"category\":\"Carousel\",\"width\":99},{\"component\":\"Slider\",\"category\":\"Slider\",\"width\":48},{\"component\":\"Slider\",\"category\":\"Slider\",\"width\":48},{\"component\":\"Carousel\",\"category\":\"Carousel\",\"width\":68},{\"component\":\"Carousel\",\"category\":\"Carousel\",\"width\":28}]}");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-builder/form-builder.component */ "Oiz/");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _components_synopsis_synopsis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/synopsis/synopsis.component */ "IhIN");
/* harmony import */ var _components_approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/approve-page/approve-page.component */ "i6Wu");










const routes = [
    {
        path: 'Admin',
        component: _app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    },
    {
        path: 'Home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'SetProfile',
        component: _components_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_3__["FormBuilderComponent"]
    },
    {
        path: 'Synopsis',
        component: _components_synopsis_synopsis_component__WEBPACK_IMPORTED_MODULE_6__["SynopsisComponent"]
    },
    {
        path: 'Approve',
        component: _components_approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_7__["ApprovePageComponent"]
    },
    {
        path: 'SynopsisList',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"]
    },
    {
        path: '',
        redirectTo: 'Home', pathMatch: 'prefix'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xk+7":
/*!***************************************************************!*\
  !*** ./src/app/components/dialog-box/dialog-box.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");









class DialogBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    cancel() {
        this.dialogRef.close();
    }
    save() {
        this.dialogRef.close(this.data);
    }
}
DialogBoxComponent.ɵfac = function DialogBoxComponent_Factory(t) { return new (t || DialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogBoxComponent, selectors: [["app-dialog-box"]], decls: 11, vars: 1, consts: [["fxLayout", "column", "fxFlex", ""], ["fxFlex", "100"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function DialogBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogBoxComponent_Template_input_ngModelChange_5_listener($event) { return ctx.data.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_button_click_7_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_button_click_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.category);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-box',
                templateUrl: './dialog-box.component.html',
                styleUrls: ['./dialog-box.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map