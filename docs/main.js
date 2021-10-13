(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Curedas-PC\Documents\PHP\Work\curedas-c.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "0k69":
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/components/animated-card/animated-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AnimatedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedCardComponent", function() { return AnimatedCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["card"];
const _c1 = function (a0) { return { "primary": a0 }; };
class AnimatedCardComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.images = [];
        this.title = '';
        this.textPrimary = false;
        this.currentIndex = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.startLoop();
    }
    startLoop() {
        this.renderer.setStyle(this.card.nativeElement, "background-image", `url(${this.images[this.currentIndex]})`);
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex += 1;
        }
        setTimeout(() => {
            this.startLoop();
        }, 4000);
    }
}
AnimatedCardComponent.ɵfac = function AnimatedCardComponent_Factory(t) { return new (t || AnimatedCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AnimatedCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimatedCardComponent, selectors: [["app-animated-card"]], viewQuery: function AnimatedCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    } }, inputs: { images: "images", title: "title", textPrimary: "textPrimary" }, decls: 5, vars: 4, consts: [[1, "anim-card", "bottom-gradient"], ["card", ""], [1, "anim-card-blur"], [1, "anim-card-text", 3, "ngClass"]], template: function AnimatedCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.textPrimary));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".anim-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: cover;\n  border-radius: 0.6rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);\n  color: #F7F9FC;\n  cursor: pointer;\n}\n.anim-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: all 0.4s ease-in;\n}\n.anim-card[_ngcontent-%COMP%]:hover   .anim-card-blur[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  border-radius: inherit;\n  filter: grayscale(90%) blur(0.2rem) sepia(20%);\n}\n.anim-card[_ngcontent-%COMP%]:hover   .anim-card-text[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.anim-card[_ngcontent-%COMP%]   .anim-card-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  visibility: hidden;\n  font-size: large;\n  font-weight: bold;\n}\n.anim-card[_ngcontent-%COMP%]   .anim-card-text.primary[_ngcontent-%COMP%] {\n  color: #111827;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL2FuaW1hdGVkLWNhcmQvYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsNEJBQUE7QUFFSjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQUtJO0VBQ0UsY0FBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9jb21wb25lbnRzL2FuaW1hdGVkLWNhcmQvYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAuNnJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiKDQ0IDUxIDczIC8gMTAlKTtcclxuICBjb2xvcjogI0Y3RjlGQztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgKiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuXHJcbiAgICAuYW5pbS1jYXJkLWJsdXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKSBibHVyKC4ycmVtKSBzZXBpYSgyMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltLWNhcmQtdGV4dCB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW5pbS1jYXJkLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgJi5wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-animated-card',
                templateUrl: './animated-card.component.html',
                styleUrls: ['./animated-card.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textPrimary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['card']
        }] }); })();


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect/dist/core */ "950E");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "D5Hz");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_constants_project_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@shared/constants/project-list */ "aqoW");
/* harmony import */ var angular_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-gallery */ "j6s6");
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-particles */ "oMSG");
/* harmony import */ var _shared_components_animated_card_animated_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@shared/components/animated-card/animated-card.component */ "0k69");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@shared/components/popup/popup.component */ "hMRW");












const _c0 = ["form"];
function AppComponent_app_popup_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-popup", 50);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("success", ctx_r1.isFormSended);
} }
class AppComponent {
    constructor(fb, gallery) {
        this.fb = fb;
        this.gallery = gallery;
        this.projects = _shared_constants_project_list__WEBPACK_IMPORTED_MODULE_4__["PROJECT_LIST_IMAGE"];
        this.isFormLoading = false;
        // popup
        this.isPopupVisible = false;
        this.isFormSended = false;
    }
    ngOnInit() {
        this.writingText = document.querySelector('.main-text h2 span');
        this.typeWriter = new typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default.a(this.writingText, {
            loop: true,
            delay: 75,
        });
        this.initForm();
        //init emailJs
        Object(emailjs_com__WEBPACK_IMPORTED_MODULE_3__["init"])('user_2fVJEKoP7Hyvko2yIOixO');
    }
    ngAfterViewInit() {
        this.disableLoadingScreen();
        this.initTypeWriter();
    }
    showGallery(project) {
        var _a;
        let images = (_a = this.projects[project]) === null || _a === void 0 ? void 0 : _a.map(item => {
            return { path: item };
        });
        if (images) {
            this.gallery.load({ images, index: 0, counter: true });
        }
    }
    initTypeWriter() {
        this.typeWriter
            .typeString('donne vie à vos projets!')
            .pauseFor(2000)
            .deleteAll()
            .typeString('construit des interfaces modernes!')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="red-color">❤</span> la qualité!')
            .pauseFor(2500)
            .start();
    }
    disableLoadingScreen() {
        let preloader = document.querySelector('#loader-wrapper');
        preloader.style.animation = 'fade-disappear .8s linear forwards';
        setTimeout(() => {
            requestAnimationFrame(() => {
                preloader.style.display = 'none';
            });
        }, 1000);
    }
    scrollToProjects() {
        const PROJECT_SECTION = document.querySelector('.title');
        PROJECT_SECTION.scrollIntoView({ behavior: 'smooth' });
    }
    scrollToContact() {
        const CONTACT_SECTION = document.querySelector('.main-form');
        CONTACT_SECTION.scrollIntoView({ behavior: 'smooth' });
    }
    initForm() {
        this.contactForm = this.fb.group({
            client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            client_contact: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{10}')],
            ],
            client_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            client_message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
        });
    }
    submitForm() {
        this.isFormLoading = true;
        emailjs_com__WEBPACK_IMPORTED_MODULE_3___default.a
            .sendForm('service_hp9vzrd', 'template_o1j00fg', this.formRef.nativeElement)
            .then(() => {
            this.showPopup(true);
            this.contactForm.reset();
        }, (err) => {
            this.showPopup();
            console.log('error', err);
        });
    }
    showPopup(formSended = false) {
        this.isFormLoading = false;
        this.isPopupVisible = true;
        this.isFormSended = formSended;
        setTimeout(() => {
            this.isPopupVisible = false;
        }, 5000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_gallery__WEBPACK_IMPORTED_MODULE_5__["Gallery"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
    } }, decls: 99, vars: 11, consts: [["url", "assets/particlejs.json"], [1, "main"], [1, "main-text", "padding-low"], [1, "main-buttons"], [1, "button--primary", 3, "click"], [1, "button--secondary", 3, "click"], [1, "title"], [1, "text-underline"], [1, "content"], [1, "gallery"], [1, "gallery__item", "gallery__item--1"], ["title", "Ivory Optimizar \uD83D\uDC41", 3, "images", "click"], [1, "gallery__item", "gallery__item--2"], ["title", "Oxygen Transport \uD83D\uDC41", 3, "images", "click"], [1, "gallery__item", "gallery__item--3"], ["title", "Acturoutes \uD83D\uDC41", 3, "images", "textPrimary", "click"], [1, "gallery__item", "gallery__item--4"], ["title", "Abidjanais \uD83D\uDC41", 3, "images", "click"], [1, "gallery__item", "gallery__item--5"], ["title", "Easy Forms \uD83D\uDC41", 3, "images", "textPrimary", "click"], [1, "flex-evenly"], [1, "service-card"], [1, "service-card-header"], ["src", "assets/icons/website.svg", "alt", "website-icon"], [1, "service-card-body"], ["src", "assets/icons/google_play.svg", "alt", "website-icon"], [1, "main-form"], [3, "formGroup", "ngSubmit"], ["form", ""], ["formControlName", "client_name", "type", "text", "name", "client_name", "id", "name", "placeholder", "Entrez votre nom", "required", ""], ["formControlName", "client_contact", "type", "tel", "name", "client_contact", "id", "contact", "placeholder", "Entrez votre contact", "required", ""], ["formControlName", "client_email", "type", "email", "name", "client_email", "id", "mail", "placeholder", "Votre adresse mail (optionnel)"], ["formControlName", "client_message", "name", "client_message", "id", "message", "rows", "4", "placeholder", "Que souhaitez-vous que je fasse pour vous ?", "required", ""], ["type", "submit", 1, "button--secondary", 3, "disabled"], [1, "copyright"], [1, "copyright-social"], ["href", "https://github.com/curedas-c/", "target", "_blank", "rel", "noopener noreferrer"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "50pt", "height", "50pt", "viewBox", "0 0 50 50", "version", "1.1"], ["id", "surface1"], ["d", "M 25 1 C 11.800781 1 1 11.800781 1 25 C 1 35.199219 7.398438 43.898438 16.300781 47.398438 C 17.199219 47.199219 18 46.398438 18 45.398438 L 18 41 L 15.398438 41 C 13.5 41 11.898438 40.101563 11.101563 38.699219 C 10.898438 38.300781 10.699219 37.800781 10.5 37.300781 C 10.101563 36.199219 9.601563 35 8.601563 34.300781 C 8.199219 34 8 33.398438 8.101563 32.898438 C 8.300781 32.398438 8.800781 32 9.699219 32.101563 C 10.699219 32.199219 12.199219 33.300781 13.101563 34.5 C 13.898438 35.5 14.5 36.101563 15.699219 36.101563 L 16 36.101563 C 16.898438 36.101563 19.101563 36.101563 19.5 35.699219 C 19.800781 35.300781 20 35 20.300781 34.699219 C 14.300781 33.5 10.898438 30 10.898438 24.699219 C 10.898438 22.898438 11.398438 21.101563 12.5 19.5 C 12.101563 18 11.199219 14.101563 13.101563 12.398438 L 13.398438 12.101563 L 13.800781 12.101563 C 16.398438 12.101563 18.300781 13.199219 19.5 14.101563 C 23 12.800781 27 12.800781 30.5 14.101563 C 31.601563 13.199219 33.5 12.101563 36.199219 12.101563 L 36.601563 12.101563 L 36.898438 12.398438 C 38.800781 14.199219 37.898438 18 37.5 19.5 C 38.5 21.101563 39.101563 22.898438 39.101563 24.699219 C 39.101563 30 35.699219 33.5 29.800781 34.699219 C 31.300781 36.300781 32.101563 38.699219 32.101563 40.601563 L 32.101563 45.5 C 32.101563 46.5 32.800781 47.300781 33.800781 47.5 C 42.601563 43.898438 49 35.199219 49 25 C 49 11.800781 38.199219 1 25 1 Z ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "#1a253b", "fill-opacity", "1"], ["href", "https://linkedin.com/in/curedas", "target", "_blank", "rel", "noopener noreferrer"], ["d", "M 40 0 L 10 0 C 4.484375 0 0 4.484375 0 10 L 0 40 C 0 45.515625 4.484375 50 10 50 L 40 50 C 45.515625 50 50 45.515625 50 40 L 50 10 C 50 4.484375 45.515625 0 40 0 Z M 16 34.898438 L 16 42 L 8 42 L 8 19 L 16 19 Z M 12 16.5 C 9.601563 16.5 8 14.800781 8 12.699219 C 8 10.601563 9.601563 9 12 9 C 14.398438 9 15.898438 10.601563 16 12.699219 C 16 14.800781 14.5 16.5 12 16.5 Z M 42 42 L 34 42 C 34 42 34 29.898438 34 29 C 34 28.101563 33.898438 25 30.5 25 C 27.5 25 27 27.898438 27 29 C 27 30.101563 27 42 27 42 L 19 42 L 19 19 L 27 19 L 27 22.101563 C 27 22.101563 28.601563 19 33.300781 19 C 38.101563 19 42 22.300781 42 29 Z ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "#1a253b", "fill-opacity", "1"], ["href", "tel:+2250787637445"], ["xmlns", "http://www.w3.org/2000/svg", "width", "46", "height", "46", "viewBox", "0 0 46 46"], ["d", "M25,2A23,23,0,0,0,4.963,36.289L2.037,46.73A1,1,0,0,0,3,48a1.032,1.032,0,0,0,.24-.029l10.9-2.7A23,23,0,1,0,25,2ZM16.643,14c.394,0,.786.005,1.131.021.363.018.851-.138,1.33,1,.492,1.168,1.672,4.037,1.818,4.33a1.063,1.063,0,0,1,.051,1.021,3.939,3.939,0,0,1-.59.975c-.3.341-.621.759-.887,1.021-.3.291-.6.605-.26,1.189A17.573,17.573,0,0,0,22.521,27.6a16.2,16.2,0,0,0,4.748,2.895c.59.292.935.242,1.279-.147s1.476-1.7,1.869-2.285.786-.488,1.328-.293,3.445,1.6,4.035,1.9.985.439,1.133.682a4.8,4.8,0,0,1-.344,2.77c-.492,1.362-2.852,2.606-3.986,2.773a8.214,8.214,0,0,1-3.721-.232A34.61,34.61,0,0,1,25.5,34.428c-5.923-2.526-9.792-8.416-10.088-8.8S13,22.463,13,19.594a6.5,6.5,0,0,1,2.066-4.863A2.186,2.186,0,0,1,16.643,14Z", "transform", "translate(-2 -2)", "fill", "#1a253b"], [1, "copyright-text"], [1, "red-color"], [3, "success", 4, "ngIf"], [1, "loader", 3, "hidden"], ["width", "150px", "src", "assets/icons/tail-spin.svg"], [3, "success"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-particles", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CUREDAS CODJO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Le d\u00E9veloppeur qui ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.scrollToProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "d\u00E9couvrez-moi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.scrollToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "contactez-moi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qui Suis-Je ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Entrepreuneur | D\u00E9velopeur Web\uD83D\uDCBB | D\u00E9veloppeur Mobile\uD83D\uDCF1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "De la conception de sites web classiques \u00E0 des applications plus cr\u00E9atives, j'aide des gens formidables, \u00E0 faire de leurs ambitions une r\u00E9alit\u00E9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R\u00E9alisations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Quelques projet que j'ai eu le plaisir de concevoir.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-animated-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_app_animated_card_click_28_listener() { return ctx.showGallery("OPTIMIZAR"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-animated-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_app_animated_card_click_30_listener() { return ctx.showGallery("TRANSPORT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-animated-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_app_animated_card_click_32_listener() { return ctx.showGallery("ACTU"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-animated-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_app_animated_card_click_34_listener() { return ctx.showGallery("ABIDJANAIS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-animated-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_app_animated_card_click_36_listener() { return ctx.showGallery("EASYFORM"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mes Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "article", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sites Web\uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Portfolios | Vitrines...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Web Apps plus complexes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "article", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Applications Mobile\uD83D\uDCF1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sp\u00E9cialis\u00E9es Remarketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sp\u00E9cialis\u00E9es E-commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Travaillons Ensemble.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Une requ\u00EAte ? Une question ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "N'h\u00E9sitez pas me contacter !\uD83D\uDE01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_70_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "ENVOYER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Done with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " By Curedas Codjo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AppComponent_app_popup_96_Template, 1, 1, "app-popup", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.projects == null ? null : ctx.projects.OPTIMIZAR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.projects == null ? null : ctx.projects.TRANSPORT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.projects == null ? null : ctx.projects.ACTU)("textPrimary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.projects == null ? null : ctx.projects.ABIDJANAIS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.projects == null ? null : ctx.projects.EASYFORM)("textPrimary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPopupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isFormLoading);
    } }, directives: [ng_particles__WEBPACK_IMPORTED_MODULE_6__["NgParticlesComponent"], _shared_components_animated_card_animated_card_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.main[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .main-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   .main-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 2rem 0 1rem 0;\n}\n.title[_ngcontent-%COMP%]:not(:nth-of-type(1)) {\n  margin: 3.5rem 0;\n}\n.copyright[_ngcontent-%COMP%] {\n  margin: 0.8rem 0;\n}\n.copyright[_ngcontent-%COMP%]   .copyright-social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.copyright[_ngcontent-%COMP%]   .copyright-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 1.2rem;\n}\n.copyright[_ngcontent-%COMP%]   .copyright-social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n}\nng-particles[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxxQkFBQTtBQURSO0FBT0E7RUFDRSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxnQkFBQTtBQUpGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0FBTE47QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBUEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWFpbi10ZXh0IHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDAgMXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGU6bm90KDpudGgtb2YtdHlwZSgxKSkge1xyXG4gIG1hcmdpbjogMy41cmVtIDA7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gIG1hcmdpbjogLjhyZW0gMDtcclxuXHJcbiAgLmNvcHlyaWdodC1zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luOiAwIDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm5nLXBhcnRpY2xlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: angular_gallery__WEBPACK_IMPORTED_MODULE_5__["Gallery"] }]; }, { formRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-particles */ "oMSG");
/* harmony import */ var _shared_components_animated_card_animated_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@shared/components/animated-card/animated-card.component */ "0k69");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@shared/components/popup/popup.component */ "hMRW");
/* harmony import */ var angular_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-gallery */ "j6s6");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng_particles__WEBPACK_IMPORTED_MODULE_4__["NgParticlesModule"],
            angular_gallery__WEBPACK_IMPORTED_MODULE_8__["IvyGalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_components_animated_card_animated_card_component__WEBPACK_IMPORTED_MODULE_5__["AnimatedCardComponent"],
        _shared_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ng_particles__WEBPACK_IMPORTED_MODULE_4__["NgParticlesModule"],
        angular_gallery__WEBPACK_IMPORTED_MODULE_8__["IvyGalleryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_components_animated_card_animated_card_component__WEBPACK_IMPORTED_MODULE_5__["AnimatedCardComponent"],
                    _shared_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ng_particles__WEBPACK_IMPORTED_MODULE_4__["NgParticlesModule"],
                    angular_gallery__WEBPACK_IMPORTED_MODULE_8__["IvyGalleryModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aqoW":
/*!***************************************************!*\
  !*** ./src/app/@shared/constants/project-list.ts ***!
  \***************************************************/
/*! exports provided: PROJECT_LIST_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_LIST_IMAGE", function() { return PROJECT_LIST_IMAGE; });
const PROJECT_LIST_IMAGE = {
    OPTIMIZAR: [
        'assets/images/optimizar_1.jpg',
        'assets/images/optimizar_2.jpg',
        'assets/images/optimizar_3.jpg',
    ],
    TRANSPORT: [
        'assets/images/transport_1.jpg',
        'assets/images/transport_2.jpg',
        'assets/images/transport_3.jpg',
    ],
    ACTU: ['assets/images/acturoutes_1.jpg', 'assets/images/acturoutes_2.jpg'],
    ABIDJANAIS: [
        'assets/images/abidjanais_1.jpg',
        'assets/images/abidjanais_2.jpg',
        'assets/images/abidjanais_3.jpg',
    ],
    EASYFORM: [
        'assets/images/easy_form_1.jpg',
        'assets/images/easy_form_2.jpg',
        'assets/images/easy_form_3.jpg',
        'assets/images/easy_form_4.jpg',
        'assets/images/easy_form_5.jpg',
        'assets/images/easy_form_6.jpg',
    ],
};


/***/ }),

/***/ "hMRW":
/*!*************************************************************!*\
  !*** ./src/app/@shared/components/popup/popup.component.ts ***!
  \*************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PopupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message Envoy\u00E9!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Une erreur s'est produite. Veuillez r\u00E9essayer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopupComponent {
    constructor() {
        this.success = false;
    }
    ngOnInit() {
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], inputs: { success: "success" }, decls: 3, vars: 2, consts: [[1, "popup"], ["class", "popup-success", 4, "ngIf"], ["class", "popup-error", "id", "myPopup", 4, "ngIf"], [1, "popup-success"], ["id", "myPopup", 1, "popup-error"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopupComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.scss']
            }]
    }], function () { return []; }, { success: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


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