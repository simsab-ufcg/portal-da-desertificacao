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
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _insa_insa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./insa/insa.component */ "./src/app/insa/insa.component.ts");
/* harmony import */ var _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desertification/desertification.component */ "./src/app/desertification/desertification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
];
var router = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'projeto', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'parceiros', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__["PartnersComponent"] },
    { path: 'equipe', component: _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"] },
    { path: 'noticias', component: _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"] },
    { path: 'insa', component: _insa_insa_component__WEBPACK_IMPORTED_MODULE_12__["InsaComponent"] },
    { path: 'desertificacao', component: _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_13__["DesertificationComponent"] }
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
                _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"],
                _insa_insa_component__WEBPACK_IMPORTED_MODULE_12__["InsaComponent"],
                _desertification_desertification_component__WEBPACK_IMPORTED_MODULE_13__["DesertificationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(router),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                materialModules,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
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

module.exports = "<footer class=\"fixed-bottom bg-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3 col-md-2 insa-logo\">\n          <a href=\"http://www.insa.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/insa-logo.svg\" alt=\"Instituto Nacional do Semiárido\" width=\"100%\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\"></div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 col-md-offset-4\">\n          <a href=\"http://www.mcti.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/logo_mctci.svg\" alt=\"Ministério da Ciência, Tecnologia, Inovações e Comunicações\" width=\"100%\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 col-sm-3 col-md-2 br-logo\">\n          <a href=\"http://www.brasil.gov.br/\" target=\"_blank\">\n            <img src=\"../../assets/img/logo/logo_br_gov.svg\" alt=\"Brasil\" width=\"100%\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </footer>"

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

module.exports = ".center {\n    margin: auto;\n}\n\n.image-size {\n    margin-top: 2%;\n}\n\n@-webkit-keyframes pop-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-4rem) scale(.8);\n            transform: translateY(-4rem) scale(.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes pop-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-4rem) scale(.8);\n            transform: translateY(-4rem) scale(.8);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n.animate-pop-in {\n  -webkit-animation: pop-in .6s ease-out forwards;\n          animation: pop-in .6s ease-out forwards;\n}\n\n.animated {\n  margin-bottom:60px;\n  -webkit-animation-duration: 10s;\n  animation-duration: 10s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n     opacity: 0;\n     -webkit-transform: translateX(-20px);\n  }\n  100% {\n     opacity: 1;\n     -webkit-transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n     opacity: 0;\n     -webkit-transform: translateX(-20px);\n             transform: translateX(-20px);\n  }\n  100% {\n     opacity: 1;\n     -webkit-transform: translateX(0);\n             transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n-webkit-animation-name: fadeInLeft;\nanimation-name: fadeInLeft;\n}\n\n.base-logo {\n  width: 40%  ;\n  height: auto;\n  position: absolute;\n}\n\n.index-image-logo {\n  width: 10%;\n  top:5%;\n  left:20%;\n  position:absolute;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0px !important;\n}\n\ntd {\n  padding: 0%;\n  -webkit-column-rule-style: hidden;\n          column-rule-style: hidden;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <div class=\"container wow animated fadeInLeft\" style=\"position: static;\">\n        <div class=\"row\">\n            <img src=\"../../assets/img/logo/base.png\" usemap=\"#image-map\" style=\"width: fit-content; height: 100%;\" class=\"img-responsive center image-size animate-pop-in\">\n            <map name=\"image-map\">\n                <area target=\"\" alt=\"Sobre\" title=\"Sobre\" routerLink=\"projeto\" routerLinkActive=\"active\" coords=\"261,110,103\"\n                    shape=\"circle\">\n                <area target=\"\" alt=\"Parceiros\" title=\"Parceiros\" routerLink=\"parceiros\" routerLinkActive=\"active\" coords=\"119,332,107\"\n                    shape=\"circle\">\n                <area target=\"\" alt=\"Indicadores\" title=\"Indicadores\" routerLink=\"indicadores\" routerLinkActive=\"active\"\n                    coords=\"205,589,102\" shape=\"circle\">\n                <area target=\"\" alt=\"Notícias\" title=\"Notícias\" routerLink=\"noticias\" routerLinkActive=\"active\" coords=\"746,629,103\"\n                    shape=\"circle\">\n                <area target=\"\" alt=\"Quem é quem?\" title=\"Quem é quem?\" routerLink=\"equipe\" routerLinkActive=\"active\"\n                    coords=\"818,416,102\" shape=\"circle\">\n                <area target=\"\" alt=\"INSA\" title=\"INSA\" routerLink=\"insa\" routerLinkActive=\"active\" coords=\"482,232,98\"\n                    shape=\"circle\">\n                <area target=\"\" alt=\"Desertificação\" title=\"Desertificação\" routerLink=\"desertificacao\" routerLinkActive=\"active\"\n                    coords=\"685,137,107\" shape=\"circle\">\n                <area target=\"\" alt=\"Index\" title=\"Index\" routerLink=\"home\" routerLinkActive=\"active\" coords=\"332,432,417,351,460,389,484,364,551,430,614,495,430,678,431,535,411,516,334,515\"\n                    shape=\"poly\">\n            </map>\n        </div>\n    </div>\n</div>"

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
    };
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

module.exports = "<nav class=\"navbar navbar-expand-lg bg-light\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" style=\"margin-left: 100px\" href=\"#\">\n            <img src=\"../../assets/img/logo/logo.png\" width=\"160\" height=\"55\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" style=\"margin-right: 40px\" id=\"navbarNav\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown selectpicker\">\n                    <a id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                        class=\"nav-link dropdown-toggle\" routerLink=\"parceiros\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-info-circle fa-2x icon\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                        <a id=\"projeto\" class=\"dropdown-item\" routerLink=\"projeto\" routerLinkActive=\"active\">Sobre o\n                            Projeto</a>\n                        <a id=\"equipe\" class=\"dropdown-item\" routerLink=\"equipe\" routerLinkActive=\"active\">Quem é Quem</a>\n                        <a id=\"parceiros\" class=\"dropdown-item\" routerLink=\"parceiros\" routerLinkActive=\"active\">Nossos\n                            Parceiros</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a id=\"institutional-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" routerLink=\"partners\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-graduation-cap fa-2x icon\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                        <a id=\"insa\" class=\"dropdown-item\" routerLink=\"insa\" routerLinkActive=\"active\">Sobre o INSA</a>\n                        <a id=\"desertificacao\" class=\"dropdown-item\" routerLink=\"desertificacao\" routerLinkActive=\"active\">Desertificação</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"noticias\" routerLinkActive=\"active\"><i class=\"far fa-newspaper fa-2x icon\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

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

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-icon {\n    color: #dcdcdc;\n}\n.news-icon:hover {\n    color: #fff;\n}\n.news-container {\n    margin-top: 30px;\n}\n.title {\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n    <div class=\"container news-container\" fxLayout=\"row wrap\" fxLayoutGap=\"16px\">\n        <h3 class=\"title\">POSTAGENS</h3>\n        <mat-card class=\"row\" style=\"margin-top: 20px;\" fxFlex=\"calc(33% - 16px)\" *ngFor=\"let post of posts$ | async\"> \n            <div class=\"col-md-4\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=\"http://placehold.it/400x200\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\" style=\"color: black;\">{{ post.title.rendered }}</h5>\n                        <!-- <p class=\"card-text\"> {{ post.excerpt.rendered }} </p> -->\n                        <a [href]=\"post.link\" class=\"card-link\" style=\"float: right;\"><i class=\"fas fa-arrow-circle-right fa-2x icon\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = /** @class */ (function () {
    function NewsComponent(http) {
        this.http = http;
        this.posts$ = this.getPosts();
    }
    NewsComponent.prototype.getPosts = function () {
        return this.http.get('http://blog.coddy.com.br/wp-json/wp/v2/posts?_embed', {
            params: {
                per_page: '2'
            }
        });
    };
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5%; \n}\n\n.partners-title {\n  text-align: center;\n    font-weight: bold;\n    font-size: 26px;\n}\n\n.partners-logo {\n  height: 90%;\n  width: 100%;\n}\n\n.col-md-2, .col-md-3 {\n  padding-top: 10px;\n}\n\n.larger-logos {\n  height: 80%;\n  width: 80%;\n}\n\n.uepb {\n  height: 100%;\n  width: 80%;\n}\n\n.ufcg {\n  margin-top: 10px;\n}\n\n.lsd {\n  margin-top: 5px;\n}\n\n.ctrn {\n  height: 90%;\n  width: 140%;\n}\n\n.ppgmmc {\n  padding-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"panel-group\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-3\"></div>\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-2\">\n                        <a href=\"#\"><img class=\"partners-logo\" src=\"../../assets/img/partners/Prodema.png\"></a>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-2\">\n                        <a href=\"#\"><img class=\"partners-logo ppgmmc\" src=\"../../assets/img/partners/Ppgmmc.png\"></a>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-2\">\n                        <a href=\"#\"><img class=\"ctrn\" src=\"../../assets/img/partners/Ctrn.png\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-4\"></div>\n                    <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                        <a href=\"#\"><img class=\"partners-logo\" src=\"../../assets/img/partners/Parque Tecnologico.png\"></a>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                        <a><img class=\"partners-logo\" src=\"../../assets/img/partners/Fundep.png\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-4 col-md-2 col-lg-3\"></div>\n                    <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                        <a href=\"#\"><img class=\"larger-logos ufcg\" src=\"../../assets/img/partners/UFCG.png\"></a>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                        <a><img class=\"larger-logos ufpb\" src=\"../../assets/img/partners/Ufpb.png\"></a>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-4 col-md-2 col-lg-2\">\n                        <a><img class=\"larger-logos lsd\" src=\"../../assets/img/partners/LSD.png\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

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

module.exports = "<div class=\"full-page\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <!-- Team Members Row -->\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <h2 class=\"my-4 team-name\">EQUIPE</h2>\n                    </div>\n                </div>\n                <p class=\"text-center\">\n                    A equipe do “Portal da Desertificação” é composta por pesquisadores e profissionais oriundos de\n                    instituições\n                    de ensino e pesquisa, com intuito de disponibilizar para a sociedade uma ferramenta de avaliação\n                    das causas\n                    estruturarias e possíveis consequências do processo de desertificação.\n                </p>\n                <hr>\n                <div id=\"carouselMembers\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/ana.png\"\n                                        alt=\"\">\n                                    <h4 class=\"name\">Ana Silva\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/BrunoDantas.png\"\n                                        alt=\"\">\n                                    <h4>Bruno Dantas\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon  \"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x  curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Chateau.png\"\n                                        alt=\"\">\n                                    <h4>Chateaubriand Almeida\n                                    </h4>\n                                    <h6>Designer</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Cristiano.png\"\n                                        alt=\"\">\n                                    <h4>Cristiano\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Heithor_2.png\"\n                                        alt=\"\">\n                                    <h4>Heithor Queiroz\n                                    </h4>\n                                    <h6>GIS Analyst</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Pedro.png\"\n                                        alt=\"\">\n                                    <h4>Pedro Pacheco\n                                    </h4>\n                                    <h6>Analista de Infraestrutura Sênior</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Renally.png\"\n                                        alt=\"\">\n                                    <h4>Renally\n                                    </h4>\n                                    <h6>Comunicações</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/Rodrigo.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/thiago-yuri.png\"\n                                        alt=\"\">\n                                    <h4>Thiago\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/cicero.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/gabriel.png\"\n                                        alt=\"\">\n                                    <h4>Gabriel Doritos\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/josi.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/matheus.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/mota.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-4\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/ricardo.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                                <div class=\"col-lg-3 col-sm-6 text-center mb-3\">\n                                    <img class=\"rounded-circle img-fluid d-block mx-auto team-icon\" src=\"../../assets/img/team/talita.png\"\n                                        alt=\"\">\n                                    <h4>John Doe\n                                    </h4>\n                                    <h6>Desenvolvedor</h6>\n                                    <a href=\"http://google.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"LinkedIn\"><i\n                                            class=\"fab fa-linkedin fa-2x curriculum-icon\"></i></a>\n                                    <a style=\"margin-left: 10px;\" href=\"http://google.com\" data-toggle=\"tooltip\"\n                                        data-placement=\"bottom\" title=\"Currículo Lattes\"><i class=\"fas fa-user-graduate fa-2x curriculum-icon\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

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

module.exports = __webpack_require__(/*! /home/asilva/workspace/frontpage-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map