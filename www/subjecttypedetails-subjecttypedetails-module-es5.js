(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subjecttypedetails-subjecttypedetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/subjecttypedetails/subjecttypedetails.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subjecttypedetails/subjecttypedetails.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons style=\"margin-left: 5px\" slot=\"start\">\n          <ion-back-button color=\"primary\" defaultHref=\"/tab1\"></ion-back-button>\n        </ion-buttons>\n\n    <ion-title>\n      {{data.name}}\n      <!-- <ion-icon name=\"create\"></ion-icon> -->\n    </ion-title>\n\n    <ion-buttons style=\"margin-left: 5px\" slot=\"end\">\n        <ion-button (click)=\"presentActionSheet()\" color=\"primary\" >\n          <ion-icon color=\"primary\" name=\"options\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 300px;\">\n    <img height=\"100%\" src=\"https://tawsil.mr{{data.image.url}}\" >\n  </div>\n\n<ion-item>\n    <img height=\"20px\" src=\"../../assets/id-card (1).svg\">\n    <ion-label style=\"margin-left: 16px\">\n        Id - {{data.id}}\n\n        <!-- <span style=\"font-size: 18px; font-weight: 600\">ID - </span> 33  -->\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n      <img height=\"20px\" src=\"../../assets/edit.svg\">\n      <ion-label style=\"margin-left: 16px\">\n        Created At - {{data.created_at}}\n          <!-- <span style=\"font-size: 18px; font-weight: 600\">Created At - </span> 33  -->\n      </ion-label>\n    </ion-item>\n\n  <ion-item>\n      <img height=\"20px\" src=\"../../assets/refresh.svg\">\n      <ion-label style=\"margin-left: 16px\">\n          Updated At - {{data.updated_at}}\n\n          <!-- <span style=\"font-size: 18px; font-weight: 600\">Updated At - </span> 33  -->\n      </ion-label>\n    </ion-item>\n\n\n\n\n  <br>\n\n  <br>\n<!-- \n  <p align=\"center\"><img (click)=\"presentDelete()\" height=\"40px\" src=\"../../assets/garbage.svg\"></p>\n -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/subjecttypedetails/subjecttypedetails.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/subjecttypedetails/subjecttypedetails.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubjecttypedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjecttypedetailsPageModule", function() { return SubjecttypedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subjecttypedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subjecttypedetails.page */ "./src/app/subjecttypedetails/subjecttypedetails.page.ts");







var routes = [
    {
        path: '',
        component: _subjecttypedetails_page__WEBPACK_IMPORTED_MODULE_6__["SubjecttypedetailsPage"]
    }
];
var SubjecttypedetailsPageModule = /** @class */ (function () {
    function SubjecttypedetailsPageModule() {
    }
    SubjecttypedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_subjecttypedetails_page__WEBPACK_IMPORTED_MODULE_6__["SubjecttypedetailsPage"]]
        })
    ], SubjecttypedetailsPageModule);
    return SubjecttypedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/subjecttypedetails/subjecttypedetails.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/subjecttypedetails/subjecttypedetails.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3R0eXBlZGV0YWlscy9zdWJqZWN0dHlwZWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subjecttypedetails/subjecttypedetails.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/subjecttypedetails/subjecttypedetails.page.ts ***!
  \***************************************************************/
/*! exports provided: SubjecttypedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjecttypedetailsPage", function() { return SubjecttypedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SubjecttypedetailsPage = /** @class */ (function () {
    function SubjecttypedetailsPage(alertController, actionSheetCtrl, httpClient, loadingCtrl, toastCtrl, route, router) {
        this.alertController = alertController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.apiUrl = "http://tawsil.mr/api/v1/subject_types/";
    }
    SubjecttypedetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.subjecttype;
                console.log(_this.data);
            }
        });
    };
    SubjecttypedetailsPage.prototype.makeeditable = function () {
        this.presentAlertPrompt();
    };
    SubjecttypedetailsPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Input subject title here',
                            inputs: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    value: this.data.name
                                    // placeholder: 'Placeholder 1'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Save',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        console.log(data);
                                        console.log();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjecttypedetailsPage.prototype.presentDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SubjecttypedetailsPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Options',
                            buttons: [
                                {
                                    text: 'Add Category',
                                    icon: 'add',
                                    handler: function () {
                                        console.log('Share clicked');
                                        _this.router.navigateByUrl('/addcategory');
                                    }
                                },
                                {
                                    text: 'Edit Photo',
                                    icon: 'images',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                },
                                {
                                    text: 'Edit Title',
                                    icon: 'create',
                                    handler: function () {
                                        // console.log('Share clicked');
                                        _this.makeeditable();
                                    }
                                },
                                {
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        _this.deleteSubjectType(_this.data.id);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjecttypedetailsPage.prototype.deleteSubjectType = function (id) {
        var _this = this;
        this.loadingCtrl.create({ message: "Deleting subject type" }).then(function (res) {
            res.present();
            _this.httpClient.delete(_this.apiUrl + id).subscribe(function (data) {
                res.dismiss();
                _this.router.navigateByUrl('/listsubjecttypes');
                _this.presentToast("Subject type deleted successfully");
            }, function (err) {
                res.dismiss();
            });
        });
    };
    SubjecttypedetailsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toastCtrl.create({
                    message: message,
                    position: "bottom",
                    color: 'dark',
                    duration: 5000
                }).then(function (res) {
                    res.present();
                });
                return [2 /*return*/];
            });
        });
    };
    SubjecttypedetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SubjecttypedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subjecttypedetails',
            template: __webpack_require__(/*! raw-loader!./subjecttypedetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/subjecttypedetails/subjecttypedetails.page.html"),
            styles: [__webpack_require__(/*! ./subjecttypedetails.page.scss */ "./src/app/subjecttypedetails/subjecttypedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SubjecttypedetailsPage);
    return SubjecttypedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=subjecttypedetails-subjecttypedetails-module-es5.js.map