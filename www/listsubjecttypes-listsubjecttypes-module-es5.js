(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listsubjecttypes-listsubjecttypes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listsubjecttypes/listsubjecttypes.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listsubjecttypes/listsubjecttypes.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <!-- <ion-searchbar animated=\"true\" placeholder=\"Search for subject type here...\"></ion-searchbar> -->\n  <!-- <ion-button >Add new</ion-button> -->\n\n  <ion-card>\n      <ion-item lines=\"none\" class=\"each_item\">\n          <ion-icon name=\"search\"></ion-icon>\n          <ion-input (ionChange)=\"onChange($event)\" style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"price\" placeholder=\"Search for subject type here...\"></ion-input>\n      </ion-item>\n  </ion-card>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab style=\"margin-right: 10px\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addsubjecttype()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n  <ion-card  class=\"subjectcards\" *ngFor=\"let subjecttype of subtwo; let i = index;\" (click)=\"opensubjecttypedetails(i)\">\n    <!-- SDSDFSDFSDF  -->\n    <img src=\"https://tawsil.mr{{subjecttype.image.url}}\">\n\n    <ion-card-header style=\"font-size: 17px; color: black; font-weight: 600; position: absolute; z-index: 5; top: 1px;\">{{subjecttype.name}}\n    <!-- <ion-icon style=\"float: right; font-size: 26px\" name=\"trash\"></ion-icon> -->\n    <!-- <ion-icon style=\"float: right; font-size: 24px\"  name=\"create\"></ion-icon>\n    <ion-icon style=\"float: right; font-size: 24px\" name=\"eye\"></ion-icon> -->\n    </ion-card-header>\n  </ion-card>\n\n  <br>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listsubjecttypes/listsubjecttypes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listsubjecttypes/listsubjecttypes.module.ts ***!
  \*************************************************************/
/*! exports provided: ListsubjecttypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsubjecttypesPageModule", function() { return ListsubjecttypesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listsubjecttypes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listsubjecttypes.page */ "./src/app/listsubjecttypes/listsubjecttypes.page.ts");







var routes = [
    {
        path: '',
        component: _listsubjecttypes_page__WEBPACK_IMPORTED_MODULE_6__["ListsubjecttypesPage"]
    }
];
var ListsubjecttypesPageModule = /** @class */ (function () {
    function ListsubjecttypesPageModule() {
    }
    ListsubjecttypesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listsubjecttypes_page__WEBPACK_IMPORTED_MODULE_6__["ListsubjecttypesPage"]]
        })
    ], ListsubjecttypesPageModule);
    return ListsubjecttypesPageModule;
}());



/***/ }),

/***/ "./src/app/listsubjecttypes/listsubjecttypes.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/listsubjecttypes/listsubjecttypes.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subjectcards {\n  height: 28vh;\n  width: 94%;\n  margin: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvZGVsaXZlcnlhcHAvc3JjL2FwcC9saXN0c3ViamVjdHR5cGVzL2xpc3RzdWJqZWN0dHlwZXMucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0c3ViamVjdHR5cGVzL2xpc3RzdWJqZWN0dHlwZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9saXN0c3ViamVjdHR5cGVzL2xpc3RzdWJqZWN0dHlwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3RjYXJkc3tcbiAgaGVpZ2h0OiAyOHZoO1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW46IDEycHg7XG59IiwiLnN1YmplY3RjYXJkcyB7XG4gIGhlaWdodDogMjh2aDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/listsubjecttypes/listsubjecttypes.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/listsubjecttypes/listsubjecttypes.page.ts ***!
  \***********************************************************/
/*! exports provided: ListsubjecttypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsubjecttypesPage", function() { return ListsubjecttypesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// import { Component } from '@angular/core';



var ListsubjecttypesPage = /** @class */ (function () {
    function ListsubjecttypesPage(router, loadingController, 
    // public page: Page,
    httpClient) {
        this.router = router;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.allsubjectsurl = "https://tawsil.mr/api/v1/subject_types";
        this.subjecttypes = [];
        this.subtwo = [];
    }
    ListsubjecttypesPage.prototype.ionViewDidEnter = function () {
        this.getAllSubjectTypes();
    };
    ListsubjecttypesPage.prototype.ngOnInit = function () {
    };
    ListsubjecttypesPage.prototype.opensubjecttypedetails = function (i) {
        var navigationExtras = {
            state: {
                subjecttype: this.subtwo[i]
            }
        };
        console.log(i);
        this.router.navigate(['subjecttypedetails'], navigationExtras);
    };
    // ngOnInit(): void {
    //   this.page.on('navigatedTo', (data) => {  
    //     console.log('navigated TO the page!')
    //   //  awesomeFunction()
    //   })
    // }
    ListsubjecttypesPage.prototype.onChange = function ($event) {
        // console.log($event.detail.value)
        this.subtwo = this.filterItems($event.detail.value);
        console.log(this.subtwo);
    };
    ListsubjecttypesPage.prototype.filterItems = function (searchTerm) {
        return this.subjecttypes.filter(function (item) {
            // console.log(item)
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ListsubjecttypesPage.prototype.addsubjecttype = function () {
        this.router.navigateByUrl('/addsubjecttype');
    };
    ListsubjecttypesPage.prototype.getAllSubjectTypes = function () {
        var _this = this;
        this.subjecttypes = [];
        this.subtwo = [];
        this.loadingController.create({ message: "Loading subject types" }).then(function (res) {
            res.present();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            });
            _this.httpClient.get(_this.allsubjectsurl).subscribe(function (data) {
                // console.log(data)
                var datagotten = data;
                res.dismiss();
                datagotten.data.forEach(function (subjecttype) {
                    if (subjecttype.image != null) {
                        console.log(subjecttype);
                        _this.subjecttypes.push(subjecttype);
                        // this.subtwo.push(subjecttype)
                        _this.subtwo = _this.subjecttypes;
                    }
                });
            });
        });
    };
    ListsubjecttypesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ListsubjecttypesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listsubjecttypes',
            template: __webpack_require__(/*! raw-loader!./listsubjecttypes.page.html */ "./node_modules/raw-loader/index.js!./src/app/listsubjecttypes/listsubjecttypes.page.html"),
            styles: [__webpack_require__(/*! ./listsubjecttypes.page.scss */ "./src/app/listsubjecttypes/listsubjecttypes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ListsubjecttypesPage);
    return ListsubjecttypesPage;
}());



/***/ })

}]);
//# sourceMappingURL=listsubjecttypes-listsubjecttypes-module-es5.js.map