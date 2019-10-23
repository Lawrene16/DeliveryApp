(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcategory-addcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addcategory/addcategory.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addcategory/addcategory.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons style=\"margin-left: 5px\" slot=\"start\">\n          <ion-back-button color=\"primary\" defaultHref=\"/subjecttypedetails\"></ion-back-button>\n        </ion-buttons>\n\n    <ion-title>Subject</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"each_item\">\n        <!-- <img height=\"60px\" src=\"../../assets/name.svg\" style=\"margin-right: 15px; zoom: 35%;\"> -->\n        <ion-input style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"price\" placeholder=\"Name\"></ion-input>\n      </ion-item>\n\n      <br>\n      <ion-item class=\"each_item\">\n          <!-- <img height=\"60px\" src=\"../../assets/name.svg\" style=\"margin-right: 15px; zoom: 35%;\"> -->\n          <ion-input style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"price\" placeholder=\"Location\"></ion-input>\n      </ion-item>\n\n      <br>\n      <!-- <div style=\"margin-left: 11px; margin-bottom: 1px; \">Logo</div> -->\n      <ion-card>\n          <ion-item lines=\"none\">\n              <ion-icon name=\"images\" item-left></ion-icon>\n                <div style=\"margin-left: 16px\">Upload Logo</div>                \n          </ion-item>\n      </ion-card>\n\n      <ion-card>\n          <ion-item lines=\"none\">\n              <ion-icon name=\"images\" item-left></ion-icon>\n                <div style=\"margin-left: 16px\">Upload Cover</div>                \n          </ion-item>\n      </ion-card>\n\n      <p align=\"center\">\n          <ion-button style=\"width: 90px\">\n              <b>Save</b>\n            </ion-button>\n      </p>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/addcategory/addcategory.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addcategory/addcategory.module.ts ***!
  \***************************************************/
/*! exports provided: AddcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcategoryPageModule", function() { return AddcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcategory.page */ "./src/app/addcategory/addcategory.page.ts");







const routes = [
    {
        path: '',
        component: _addcategory_page__WEBPACK_IMPORTED_MODULE_6__["AddcategoryPage"]
    }
];
let AddcategoryPageModule = class AddcategoryPageModule {
};
AddcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addcategory_page__WEBPACK_IMPORTED_MODULE_6__["AddcategoryPage"]]
    })
], AddcategoryPageModule);



/***/ }),

/***/ "./src/app/addcategory/addcategory.page.scss":
/*!***************************************************!*\
  !*** ./src/app/addcategory/addcategory.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGNhdGVnb3J5L2FkZGNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addcategory/addcategory.page.ts":
/*!*************************************************!*\
  !*** ./src/app/addcategory/addcategory.page.ts ***!
  \*************************************************/
/*! exports provided: AddcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcategoryPage", function() { return AddcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddcategoryPage = class AddcategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
AddcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcategory',
        template: __webpack_require__(/*! raw-loader!./addcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/addcategory/addcategory.page.html"),
        styles: [__webpack_require__(/*! ./addcategory.page.scss */ "./src/app/addcategory/addcategory.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddcategoryPage);



/***/ })

}]);
//# sourceMappingURL=addcategory-addcategory-module-es2015.js.map