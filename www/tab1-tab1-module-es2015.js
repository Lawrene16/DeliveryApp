(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <!-- <ion-searchbar animated=\"true\" placeholder=\"Search for subject type here...\"></ion-searchbar> -->\n  <!-- <ion-button >Add new</ion-button> -->\n\n  <ion-card>\n      <ion-item lines=\"none\" class=\"each_item\">\n          <ion-icon name=\"search\"></ion-icon>\n          <ion-input (ionChange)=\"onChange($event)\" style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"price\" placeholder=\"Search for subject type here...\"></ion-input>\n      </ion-item>\n  </ion-card>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab style=\"margin-right: 10px\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addsubjecttype()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n  <ion-card  class=\"subjectcards\" *ngFor=\"let subjecttype of subtwo; let i = index;\" (click)=\"opensubjecttypedetails(i)\">\n    <!-- SDSDFSDFSDF  -->\n    <img src=\"https://tawsil.mr{{subjecttype.image.url}}\">\n\n    <ion-card-header style=\"font-size: 17px; color: black; font-weight: 600; position: absolute; z-index: 5; top: 1px;\">{{subjecttype.name}}\n    <!-- <ion-icon style=\"float: right; font-size: 26px\" name=\"trash\"></ion-icon> -->\n    <!-- <ion-icon style=\"float: right; font-size: 24px\"  name=\"create\"></ion-icon>\n    <ion-icon style=\"float: right; font-size: 24px\" name=\"eye\"></ion-icon> -->\n    </ion-card-header>\n  </ion-card>\n\n  <br>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subjectcards {\n  height: 28vh;\n  width: 94%;\n  margin: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvZGVsaXZlcnlhcHAvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3RjYXJkc3tcbiAgaGVpZ2h0OiAyOHZoO1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW46IDEycHg7XG59IiwiLnN1YmplY3RjYXJkcyB7XG4gIGhlaWdodDogMjh2aDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





// import { Page } from '@ionic/core';
// import {Page} from "tns-core-modules/ui/page";
let Tab1Page = class Tab1Page {
    constructor(router, loadingController, 
    // public page: Page,
    httpClient) {
        this.router = router;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.allsubjectsurl = "https://tawsil.mr/api/v1/subject_types";
        // allsubjectsurl = "http://tawsil.mr/fetchData.php";
        // allsubjectsurl = "https://rimacademy.net/fetchData.php";
        // allsubjectsurl = "https://rimacademy.net/api/user";
        this.subjecttypes = [];
        this.subtwo = [];
    }
    ionViewDidEnter() {
        this.getAllSubjectTypes();
    }
    opensubjecttypedetails(i) {
        let navigationExtras = {
            state: {
                subjecttype: this.subtwo[i]
            }
        };
        console.log(i);
        this.router.navigate(['subjecttypedetails'], navigationExtras);
    }
    // ngOnInit(): void {
    //   this.page.on('navigatedTo', (data) => {  
    //     console.log('navigated TO the page!')
    //   //  awesomeFunction()
    //   })
    // }
    onChange($event) {
        // console.log($event.detail.value)
        this.subtwo = this.filterItems($event.detail.value);
        console.log(this.subtwo);
    }
    filterItems(searchTerm) {
        return this.subjecttypes.filter(item => {
            // console.log(item)
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    addsubjecttype() {
        this.router.navigateByUrl('/addsubjecttype');
    }
    getAllSubjectTypes() {
        this.subjecttypes = [];
        this.subtwo = [];
        this.loadingController.create({ message: "Loading subject types" }).then((res) => {
            res.present();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            });
            this.httpClient.get(this.allsubjectsurl).subscribe(data => {
                // console.log(data)
                var datagotten = data;
                res.dismiss();
                datagotten.data.forEach(subjecttype => {
                    if (subjecttype.image != null) {
                        console.log(subjecttype);
                        this.subjecttypes.push(subjecttype);
                        // this.subtwo.push(subjecttype)
                        this.subtwo = this.subjecttypes;
                    }
                });
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map