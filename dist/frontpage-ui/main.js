(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  margin-top: 30px;\n}\n\n.title {\n  text-align: center;\n}\n\n.content {\n  text-align: justify;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"container about-container\">\n                    <h2 class=\"title\">PORTAL DA DESERTIFICAÇÃO</h2>\n                    <hr>\n                    <div class=\"content\">\n                        <p>Visando reunir esforços para melhor entender os processos de desertificação na região semiárida e\n                            organizar um sistema de monitoramento capaz de oferecer aos gestores públicos uma ferramenta de\n                            acompanhamento e avaliação das ações de combate a esse processo, bem como disponibilizar notícias,\n                            eventos e publicações a respeito do tema, o Instituto Nacional do Semiárido (Insa/MCTIC), por meio de\n                            uma equipe multidisciplinar, no qual o autor do presente estudo é membro do instituto, efetiva através\n                            do projeto de pesquisa Sistema de Monitoramento do Semiárido Brasileiro (SIMSAB), o Portal da\n                            Desertificação, que possibilita através de um conjunto de indicadores a\n                            geração de dados ambientais, sociais, econômicos e institucionais capaz de indicar as áreas mais\n                            críticas e suas principais causas e consequências.</p>\n                        <p>Nessa perspectiva, o Portal da Desertificação viabiliza a sistematização das múltiplas relações entre a\n                            sociedade e a natureza, especialmente na região semiárida brasileira, de modo a identificar as causas e\n                            efeitos do processo e, consequentemente, as medidas essenciais ao seu enfrentamento.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato');\n\n* {\n    font-family: 'Lato', sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _insa_insa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./insa/insa.component */ "./src/app/insa/insa.component.ts");
/* harmony import */ var _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desertification/desertification.component */ "./src/app/desertification/desertification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _strip_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./strip-html.pipe */ "./src/app/strip-html.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
];
var router = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'projeto', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'parceiros', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__["PartnersComponent"] },
    { path: 'equipe', component: _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"] },
    { path: 'insa', component: _insa_insa_component__WEBPACK_IMPORTED_MODULE_11__["InsaComponent"] },
    { path: 'desertificacao', component: _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_12__["DesertificationComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__["PartnersComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _insa_insa_component__WEBPACK_IMPORTED_MODULE_11__["InsaComponent"],
                _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_12__["DesertificationComponent"],
                _strip_html_pipe__WEBPACK_IMPORTED_MODULE_15__["StripHTMLPipe"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(router),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                materialModules,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/desertification/desertification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/desertification/desertification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desertification-container {\n    margin-top: 30px;\n    position: inherit;\n}\n\n.title {\n    text-align: center;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.content {\n    text-align: justify;\n}\n\n.panel {\n    background-color: whitesmoke;\n}"

/***/ }),

/***/ "./src/app/desertification/desertification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/desertification/desertification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n    <div class=\"container\">\n        <div class=\"container\">\n            <div class=\"panel-body\">\n                <div class=\"desertification-container\">\n                    <h2 class=\"title\">DESERTIFICAÇÃO</h2>\n                    <hr>\n                    <p>A desertificação é um fenômeno de escala global caracterizado pela degradação das terras nas\n                        zonas\n                        áridas, semiáridas e subúmidas secas, resultante de vários fatores, incluindo as variações\n                        climáticas e\n                        as atividades humanas. Sendo a degradação por sua vez, entendida como a redução ou perda da\n                        produtividade biológica ou econômica das terras agrícolas de sequeiro e irrigadas, das\n                        pastagens\n                        naturais e plantadas, das florestas e matas nativas devido aos sistemas de utilização da terra\n                        ou a\n                        processos que resultam da atividade do homem e das suas formas de ocupação do território, entre\n                        eles a\n                        erosão do solo, a deterioração das propriedades físicas, químicas e biológicas do solo e a\n                        destruição da\n                        vegetação por longos períodos.\n                    </p>\n                    <p>Portanto, a desertificação é um processo que culmina com a perda ou redução da capacidade do\n                        solo de\n                        servir como suporte para a manutenção dos elementos bióticos. Onde não há flora,\n                        consequentemente, não\n                        há fauna, recursos hídricos disponíveis e, por conseguinte, condições de vida satisfatórias\n                        para\n                        populações humanas.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/desertification/desertification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/desertification/desertification.component.ts ***!
  \**************************************************************/
/*! exports provided: DesertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesertificationComponent", function() { return DesertificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesertificationComponent = /** @class */ (function () {
    function DesertificationComponent() {
    }
    DesertificationComponent.prototype.ngOnInit = function () {
    };
    DesertificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desertification',
            template: __webpack_require__(/*! ./desertification.component.html */ "./src/app/desertification/desertification.component.html"),
            styles: [__webpack_require__(/*! ./desertification.component.css */ "./src/app/desertification/desertification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DesertificationComponent);
    return DesertificationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    box-shadow: -2px -9px 21px -9px rgba(0, 0, 0, 0.30);\n}\n\n\nfooter > img {\n    height: 100%;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"fixed-bottom bg-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3 col-md-2 insa-logo\">\n          <a href=\"http://www.insa.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/insa-logo.svg\" alt=\"Instituto Nacional do Semiárido\" width=\"100%\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\">\n          <a href=\"http://www.mcti.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/logo_mctci.svg\" alt=\"Ministério da Ciência, Tecnologia, Inovações e Comunicações\" width=\"100%\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 br-logo\">\n          <a href=\"http://www.brasil.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/br.svg\" alt=\"Brasil\" width=\"100%\" height=\"100%\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    margin: auto;\n}\n\n.image-size {\n    margin-top: 2%;\n}\n\n@-webkit-keyframes pop-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-4rem) scale(.8);\n            transform: translateY(-4rem) scale(.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes pop-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-4rem) scale(.8);\n            transform: translateY(-4rem) scale(.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n.animate-pop-in {\n  -webkit-animation: pop-in .6s ease-out forwards;\n          animation: pop-in .6s ease-out forwards;\n}\n\n.animated {\n  margin-bottom:60px;\n  -webkit-animation-duration: 10s;\n  animation-duration: 10s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n     opacity: 0;\n     -webkit-transform: translateX(-20px);\n  }\n  100% {\n     opacity: 1;\n     -webkit-transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n     opacity: 0;\n     -webkit-transform: translateX(-20px);\n             transform: translateX(-20px);\n  }\n  100% {\n     opacity: 1;\n     -webkit-transform: translateX(0);\n             transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n-webkit-animation-name: fadeInLeft;\nanimation-name: fadeInLeft;\n}\n\n.base-logo {\n  width: 55%  ;\n  height: auto;\n  position: absolute;\n}\n\n.index-image-logo {\n  width: 10%;\n  top:5%;\n  left:20%;\n  position:absolute;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0px !important;\n}\n\ntd {\n  padding: 0%;\n  -webkit-column-rule-style: hidden;\n          column-rule-style: hidden;\n}\n\n#gmap {\n  height: 400px;\n  margin-bottom: 10%;\n}\n\n.aboutspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.feedspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\n.indicatorspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\n\n.desertificationspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n}\n\n.partnerspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n\n.whospeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\n.insaspeed {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s;\n}\n\n.urfspeed {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.modal-title {\n  color: #000;\n}\n\n.info-icon-modal {\n  position: relative;\n}\n\n.text-modal {\n  vertical-align:middle;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <div style=\"position: static;\" class=\"container\">\n        <div class=\"modal fade\" id=\"aboutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"aboutModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"aboutModal\">Sobre o portal da desertificação</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" href=\"/projeto\"><i class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal fade\" id=\"partnersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"partnersModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"partnersModal\">Nossos parceiros</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" href=\"/parceiros\"><i class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal fade\" id=\"insaModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"insaModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"aboutModal\">Sobre o INSA</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" href=\"/insa\"><i class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal fade\" id=\"desertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"desertModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"aboutModal\">Desertificação</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" href=\"/desertificacao\"><i\n                                class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal fade\" id=\"teamModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"teamModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"aboutModal\">Nossa equipe</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" href=\"/equipe\"><i class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal fade\" id=\"sadesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sadesModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"aboutModal\">Sobre o SADes</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, architecto incidunt dolorum ad\n                        quam cupiditate tempora cumque voluptates facilis minus consequatur amet totam sit impedit tenetur,\n                        magni accusamus voluptatibus.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a class=\"url-icon-modal\" target=\"_blank\" href=\"http://192.168.15.13\"><i\n                                class=\"fas fa-info-circle fa-2x icon info-icon-modal\"\n                                title=\"Clique aqui para saber mais.\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <svg id=\"svg8\" xmls=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"auto\" xmls:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 400.000 330.000\">\n\n                <g>\n                    <image class = \"urfspeed block-ball animated fadeIn\" id=\"base\" width=\"250\" height=\"250\" x=\"75\" y=\"40\" xlink:href=\"../../assets/img/logo/base-without-icons.png\" preserveAspectRatio=\"none\"> </image>\n                    \n                    <!-- BLOCO SOBRE -->\n                    <g id=\"block-about\" class=\"aboutspeed block-ball animated fadeIn\" transform=\"translate(-4.79 -13.752)\">\n                            <a data-toggle=\"modal\" data-target=\"#aboutModal\"> <image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"101\" y=\"45\" xlink:href=\"../../assets/img/index-icons/Sobre.png\" preserveAspectRatio=\"none\"> </image> </a>\n                    </g>\n\n                    <!-- BLOCO PARCEIROS -->\n                    <g id=\"block-partners\" class=\"partnerspeed block-ball animated fadeIn\" transform=\"translate(-2.993 -8.377)\">\n                            <a data-toggle=\"modal\" data-target=\"#partnersModal\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"50\" y=\"110\" xlink:href=\"../../assets/img/index-icons/Parceiros.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n\n                    <!-- BLOCO INSA -->\n                    <g id=\"block-insa\" class=\"insaspeed block-ball animated fadeIn\" transform=\"translate(-.877 -9.435)\">\n                            <a data-toggle=\"modal\" data-target=\"#insaModal\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"170\" y=\"65\" xlink:href=\"../../assets/img/index-icons/Insa.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n\n                    <!-- BLOCO DESERTIFICACAO -->\n                    <g id=\"block-desert\" class=\"desertificationspeed block-ball animated fadeIn\" transform=\"translate(-2.464 -8.906)\">\n                            <a data-toggle=\"modal\" data-target=\"#desertModal\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"240\" y=\"40\" xlink:href=\"../../assets/img/index-icons/Desertificação.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n\n                    <!-- BLOCO QUEM E QUEM -->\n                    <g id=\"block-who\" class=\"whospeed block-ball animated fadeIn\" transform=\"translate(-2.464 -8.906)\">\n                        <a data-toggle=\"modal\" data-target=\"#teamModal\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"280\" y=\"128\" xlink:href=\"../../assets/img/index-icons/Quem é Quem.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n\n                    <!-- BLOCO DO SADES -->\n                    <g id=\"block-sades\" class=\"indicatorspeed block-ball animated fadeIn\" transform=\"translate(-2.993 -8.377)\">\n                        <a data-toggle=\"modal\" data-target=\"#sadesModal\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"85\" y=\"190\" xlink:href=\"../../assets/img/index-icons/sades.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n\n                    <!-- BLOCO NOTICIAS -->\n                    <g id=\"block-new\" class=\"feedspeed block-ball animated fadeIn\" transform=\"translate(-2.464 -8.906)\">\n                        <a xlink:href=\"#\"><image id=\"path4785-3\" width=\"60\" height=\"60\" x=\"255\" y=\"202\" xlink:href=\"../../assets/img/index-icons/Notícias.png\" preserveAspectRatio=\"none\"> </image></a>\n                    </g>\n                </g>\n            </svg>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(-7.251961, -35.945091),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "gmapElement", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/insa/insa.component.css":
/*!*****************************************!*\
  !*** ./src/app/insa/insa.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".insa-container {\n    margin-top: 30px;\n}\n\n.title {\n    text-align: center;\n}\n\n.content {\n    text-align: justify;\n}\n\n.area-text {\n\n}\n"

/***/ }),

/***/ "./src/app/insa/insa.component.html":
/*!******************************************!*\
  !*** ./src/app/insa/insa.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"container insa-container\">\n                    <h2 class=\"title\">SOBRE O INSA</h2>\n                    <hr>\n                    <div class=\"content\">\n                        <p>O Instituto Nacional do Semiárido (Insa) é uma unidade de pesquisa integrante do Ministério\n                            da Ciência,\n                            Tecnologia, Inovações e Comunicações (MCTIC), com enfoque no Semiárido brasileiro, tendo\n                            sido criado\n                            pela Lei nº 10.860, de 14 de abril de 2004, como unidade de pesquisa integrante da\n                            estrutura básica do\n                            então Ministério da Ciência e Tecnologia, (MCT), na forma do disposto no Decreto nº 5.886,\n                            de 6 de\n                            setembro de 2006.\n                        </p>\n                        <p>Como instituição federal de pesquisa, viabiliza soluções interinstitucionais para a\n                            realização de ações\n                            de formação, difusão e formulação de políticas para convivência sustentável com a\n                            semiaridez, a partir\n                            das potencialidades socioeconômicas e ambientais da região.</p>\n                        <p>Por meio de ações de articulação e de execução participativa de estudos e pesquisas, busca\n                            ser um\n                            instituto de referência para construção de um Semiárido que contribui para o\n                            desenvolvimento do\n                            país.</p>\n                    </div>\n                    <section>\n                        <h5 class=\"title\" style=\"font-weight: bold;\">ÁREA DE ATUAÇÃO</h5>\n                        <p>O Insa atua no Semiárido brasileiro, que se estende pelos nove estados do Nordeste (Alagoas,\n                            Bahia,\n                            Ceará, Paraíba, Pernambuco, Piauí, Rio Grande do Norte, Sergipe e Maranhão) e também pelo\n                            norte de Minas\n                            Gerais, possuindo 1.262 municípios e mais de 27 milhões de habitantes.\n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\" style=\"margin-top: 30px;\">\n                                <p>Suas atividades são baseadas em cinco eixos de sustentação:</p>\n                                <ul>\n                                    <li>Articulação</li>\n                                    <li>Pesquisa</li>\n                                    <li>Formação</li>\n                                    <li>Difusão</li>\n                                    <li>Políticas Públicas</li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-6\" style=\"margin-top: 30px;\">\n                                <p>Com foco em oito áreas:</p>\n                                <ul>\n                                    <li>Desertificação</li>\n                                    <li>Sistema de Produção</li>\n                                    <li>Recursos Hídricos</li>\n                                    <li>Biodiversidade e uso sustentável</li>\n                                    <li>Desenvolvimento e Tecnologias Sociais</li>\n                                    <li>Gestão da Informação e Conhecimento</li>\n                                    <li>Ciências do Solo e Mineralogia</li>\n                                    <li>Geotecnologias</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </section>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/insa/insa.component.ts":
/*!****************************************!*\
  !*** ./src/app/insa/insa.component.ts ***!
  \****************************************/
/*! exports provided: InsaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsaComponent", function() { return InsaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsaComponent = /** @class */ (function () {
    function InsaComponent() {
    }
    InsaComponent.prototype.ngOnInit = function () {
    };
    InsaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insa',
            template: __webpack_require__(/*! ./insa.component.html */ "./src/app/insa/insa.component.html"),
            styles: [__webpack_require__(/*! ./insa.component.css */ "./src/app/insa/insa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsaComponent);
    return InsaComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    box-shadow: 0px 6px 19px -1px rgba(0,0,0,0.30);\n}\n\n.dropdown-item.active, .dropdown-item:active {\n    background-color: #ad3436;\n    color: #ffffff;\n}\n\n.dropdown-item:focus {\n    background-color: #ad3436;\n    color: #FFFFFF;\n}\n\n.dropdown-item:hover {\n    background-color: #ad3436;\n    color: #FFFFFF;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-light\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" style=\"margin-left: 100px\" href=\"#\">\n            <img src=\"../../assets/img/logo/new-logo.png\" width=\"160\" height=\"55\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" style=\"margin-right: 5%\" id=\"navbarNav\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown selectpicker\">\n                    <a id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                        class=\"nav-link dropdown-toggle\" routerLink=\"parceiros\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-info-circle fa-2x icon\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                        <a id=\"projeto\" class=\"dropdown-item\" routerLink=\"projeto\" routerLinkActive=\"active\">Sobre o\n                            Projeto</a>\n                        <a id=\"equipe\" class=\"dropdown-item\" routerLink=\"equipe\" routerLinkActive=\"active\">Quem é Quem</a>\n                        <a id=\"parceiros\" class=\"dropdown-item\" routerLink=\"parceiros\" routerLinkActive=\"active\">Nossos\n                            Parceiros</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a id=\"institutional-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" routerLink=\"partners\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-graduation-cap fa-2x icon\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                        <a id=\"insa\" class=\"dropdown-item\" routerLink=\"insa\" routerLinkActive=\"active\">Sobre o INSA</a>\n                        <a id=\"desertificacao\" class=\"dropdown-item\" routerLink=\"desertificacao\" routerLinkActive=\"active\">Desertificação</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 5%;\n}\n\n.partners-title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 36px;\n}\n\n.partners-logo {\n    height: 40%;\n    width: 70%;\n}\n\n.col-md-2,\n.col-md-3 {\n    padding-top: 10px;\n}\n\n.larger-logos {\n    height: 80%;\n    width: 80%;\n}\n\n.uepb {\n    height: 100%;\n    width: 80%;\n}\n\n.ufcg {\n    margin-top: 10px;\n}\n\n.lsd {\n    margin-top: 5px;\n}\n\n.ctrn {\n    height: 90%;\n    width: 140%;\n}\n\n.ppgmmc {\n    padding-left: 10px;\n}\n\n.finep-logo {\n    position: relative;\n    padding-top: 10px;\n    width: 100%;\n    height: 60%;\n}\n"

/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1 class=\"partners-title\">PARCEIROS</h1>\n    <hr>\n    <div class=\"row\">\n        <div class=\"d-flex d-inline-flex align-items-center\">\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.asabrasil.org.br/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/Asa.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://mapbiomas.org/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/MapBiomas.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"https://www.usgs.gov/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/Usgs.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"https://www.nasa.gov/\"\n                    ><img class=\"partners-logo\" src=\"../../assets/img/partners/Nasa.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.inpe.br/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/Inpe.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                    <a target=\"_blank\" href=\"https://www.ibge.gov.br/\"\n                        ><img  class=\"partners-logo\" src=\"../../assets/img/partners/Ibge.png\" alt=\"\"\n                    /></a>\n                </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"d-flex d-inline-flex align-items-center\">\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.ufcg.edu.br/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/UFCG.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"https://www.ufpb.br/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/Ufpb.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"https://www.lsd.ufcg.edu.br/#/\"\n                    ><img  class=\"partners-logo\" src=\"../../assets/img/partners/LSD.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://ppgmmc.ci.ufpb.br/\"\n                    ><img class=\"partners-logo\"\n                        src=\"../../assets/img/partners/Ppgmmc.png\"\n                        alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://itcg.org.br/fund-paqtcpb/\"\n                    ><img class=\"partners-logo\" src=\"../../assets/img/partners/Parque Tecnologico.png\" alt=\"\"\n                /></a>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"d-flex d-inline-flex align-items-center\">\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.fundep.ufmg.br/\"\n                    ><img class=\"partners-logo\" src=\"../../assets/img/partners/Fundep.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"#\"\n                    ><img class=\"partners-logo\" src=\"../../assets/img/partners/Ctrn.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.prpg.ufpb.br/prodema/contents/menu/corpo-disciente/doutorado\"\n                    ><img class=\"partners-logo\" src=\"../../assets/img/partners/Prodema.png\" alt=\"\"\n                /></a>\n            </div>\n            <div class=\"p-2 align-self-center\">\n                <a target=\"_blank\" href=\"http://www.finep.gov.br/\"><img class=\"partners-logo\" src=\"../../assets/img/partners/logo-finep.png\" alt=\"\"\n                /></a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/strip-html.pipe.ts":
/*!************************************!*\
  !*** ./src/app/strip-html.pipe.ts ***!
  \************************************/
/*! exports provided: StripHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripHTMLPipe", function() { return StripHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StripHTMLPipe = /** @class */ (function () {
    function StripHTMLPipe() {
    }
    StripHTMLPipe.prototype.transform = function (value, args) {
        return value.replace(/<.*?>/g, '');
    };
    StripHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'stripHTML'
        })
    ], StripHTMLPipe);
    return StripHTMLPipe;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-name {\n    text-align: center;\n    font-weight: bold;\n    font-size: 26px;\n}\n\n.team-icon {\n    width: 150px;\n    height: 150px;\n}"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n    <div class=\"container-fluid\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <!-- Team Members Row -->\n                <div class=\"container\">\n                        <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <h2 class=\"my-4 team-name\">EQUIPE</h2>\n                                </div>\n                            </div>\n                            <p class=\"text-center\">\n                                A equipe do “Portal da Desertificação” é composta por\n                                pesquisadores e profissionais oriundos de instituições de\n                                ensino e pesquisa, com intuito de disponibilizar para a\n                                sociedade uma ferramenta de avaliação das causas\n                                estruturarias e possíveis consequências do processo de\n                                desertificação.\n                            </p>\n                </div>\n                <hr />\n                <div\n                    id=\"carouselMembers\"\n                    class=\"carousel slide\"\n                    data-ride=\"carousel\"\n                >\n                <ol class=\"carousel-indicators\">\n                    <li data-target=\"#carouselMembers\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li data-target=\"#carouselMembers\" data-slide-to=\"1\"></li>\n                    <li data-target=\"#carouselMembers\" data-slide-to=\"2\"></li>\n                  </ol>\n                    <div class=\"container\">\n                            <div class=\"carousel-inner\">\n                                    <div class=\"carousel-item active\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/ricardo.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4 class=\"name\">\n                                                    Ricardo Cunha Correia Lima\n                                                </h4>\n                                                <h6>Coordenador Geral</h6>\n                                                <a\n                                                    href=\"#\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4786229J6\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/salomao.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4 class=\"name\">\n                                                    Salomão de Sousa Medeiros\n                                                </h4>\n                                                <h6>Coordenador do SIMSAB</h6>\n                                                <a\n                                                    href=\"#\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"#\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/cicero.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Cícero Fidelis da Silva Neto</h4>\n                                                <h6>Analista de Geoprocessamento</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/c%C3%ADcero-fidelis-7446a031/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon  \"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4445946P6\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x  curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Heithor_2.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Heithor Alexandre de Araujo Queiroz</h4>\n                                                <h6>Analista de Geoprocessamento</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/heithor-queiroz-9487a614b/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8762326Z6\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/josi.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Josilene Pereira Lima</h4>\n                                                <h6>Analista de Geoprocessamento</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/josilene-lima-28271b23/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://lattes.cnpq.br/2429433134273944\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/talita.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Talita Stael Pimenta da Silva Costa</h4>\n                                                <h6>Analista de Geoprocessamento</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/josilene-lima-28271b23/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://lattes.cnpq.br/2429433134273944\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/BrunoDantas.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Bruno Cardoso Dantas</h4>\n                                                <br />\n                                                <h6>Desenvolvedor</h6>\n                                                <a\n                                                    href=\"http://google.com\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://google.com\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Pedro.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Pedro Vitor Cerqueria Pacheco</h4>\n                                                <h6>Analista de Infraestrutura Sênior</h6>\n                                                <a\n                                                    href=\"#\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"https://www.linkedin.com/in/pedro-pacheco-ba8b973b/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"carousel-item\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                                    <img\n                                                        class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                        src=\"../../assets/img/team/Chateau.png\"\n                                                        alt=\"\"\n                                                    />\n                                                    <h4>Chateaubriand Linhares de Almeida</h4>\n                                                    <h6>Designer</h6>\n                                                    <a\n                                                        href=\"https://www.linkedin.com/in/chateaubriand-almeida-54b66463/\"\n                                                        data-toggle=\"tooltip\"\n                                                        data-placement=\"bottom\"\n                                                        title=\"LinkedIn\"\n                                                        ><i\n                                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                        ></i\n                                                    ></a>\n                                                    <a\n                                                        style=\"margin-left: 10px;\"\n                                                        href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4473250J4\"\n                                                        data-toggle=\"tooltip\"\n                                                        data-placement=\"bottom\"\n                                                        title=\"Currículo Lattes\"\n                                                        ><i\n                                                            class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                        ></i\n                                                    ></a>\n                                                </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Renally.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Renally Amorim Cavalcante</h4>\n                                                <h6>Assessoria de comunicação</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/renally-amorim-cavalcante-a54b86170/?originalSubdomain=br\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8265636T1\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Cristiano.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Cristiano dos Santos Sousa</h4>\n                                                <h6>Especialista em solos</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/cristiano-dos-santos-sousa-799a41173/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4294255J1\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Rodrigo.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Rodrigo Santana Macedo</h4>\n                                                <h6>Especialista em solos</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/rodrigo-macedo-b3730337/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4746234P0\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/Thiago.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>\n                                                    Thiago Emmanuel Pereira da Cunha Silva\n                                                </h4>\n                                                <h6>Coordenador Técnico</h6>\n                                                <a\n                                                    href=\"#\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4718404U4\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/ana.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Ana Maria Santos Silva</h4>\n                                                <h6>Desenvolvedor Júnior</h6>\n                                                <a\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8318171Y4\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"https://www.linkedin.com/in/amsv95/\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/matheus.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Matheus Oliveira Pereira</h4>\n                                                <h6>Estagiário</h6>\n                                                <a\n                                                    href=\"http://www.linkedin.com/in/matheusop\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2770489H4\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                            <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                <img\n                                                    class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                    src=\"../../assets/img/team/gabriel.png\"\n                                                    alt=\"\"\n                                                />\n                                                <h4>Gabriel Felipe Cardoso Gomes</h4>\n                                                <h6>Estagiário</h6>\n                                                <a\n                                                    href=\"https://www.linkedin.com/in/gabrielfelipelll\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"LinkedIn\"\n                                                    ><i\n                                                        class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                                <a\n                                                    style=\"margin-left: 10px;\"\n                                                    href=\"http://lattes.cnpq.br/1234105529704254\"\n                                                    data-toggle=\"tooltip\"\n                                                    data-placement=\"bottom\"\n                                                    title=\"Currículo Lattes\"\n                                                    ><i\n                                                        class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                    ></i\n                                                ></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"carousel-item\">\n                                        <div class=\"row\">\n                                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                                        <img\n                                                            class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                            src=\"../../assets/img/team/thiago-yuri.png\"\n                                                            alt=\"\"\n                                                        />\n                                                        <h4>Thiago Yuri Evaristo de Souza</h4>\n                                                        <h6>Estagiário</h6>\n                                                        <a\n                                                            href=\"https://www.linkedin.com/in/thiago-y-8910a194\"\n                                                            data-toggle=\"tooltip\"\n                                                            data-placement=\"bottom\"\n                                                            title=\"LinkedIn\"\n                                                            ><i\n                                                                class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                            ></i\n                                                        ></a>\n                                                        <a\n                                                            style=\"margin-left: 10px;\"\n                                                            href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8231359A4\"\n                                                            data-toggle=\"tooltip\"\n                                                            data-placement=\"bottom\"\n                                                            title=\"Currículo Lattes\"\n                                                            ><i\n                                                                class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                            ></i\n                                                        ></a>\n                                                    </div>\n                                                    <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                                            <img\n                                                                class=\"rounded-circle img-fluid d-block mx-auto team-icon\"\n                                                                src=\"../../assets/img/team/mota.png\"\n                                                                alt=\"\"\n                                                            />\n                                                            <h4>Felipe Mota dos Santos</h4>\n                                                            <h6>Estagiário</h6>\n                                                            <a\n                                                                href=\"#\"\n                                                                data-toggle=\"tooltip\"\n                                                                data-placement=\"bottom\"\n                                                                title=\"LinkedIn\"\n                                                                ><i\n                                                                    class=\"fab fa-linkedin fa-2x curriculum-icon\"\n                                                                ></i\n                                                            ></a>\n                                                            <a\n                                                                style=\"margin-left: 10px;\"\n                                                                href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8911258A4\"\n                                                                data-toggle=\"tooltip\"\n                                                                data-placement=\"bottom\"\n                                                                title=\"Currículo Lattes\"\n                                                                ><i\n                                                                    class=\"fas fa-user-graduate fa-2x curriculum-icon\"\n                                                                ></i\n                                                            ></a>\n                                                        </div>\n                                        </div>\n                                    </div>\n                                </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselMembers\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselMembers\" role=\"button\"style=\"align: right\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/asilva/workspace/done/frontpage-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map