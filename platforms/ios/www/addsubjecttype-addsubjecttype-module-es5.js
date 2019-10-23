(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addsubjecttype-addsubjecttype-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addsubjecttype/addsubjecttype.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addsubjecttype/addsubjecttype.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons style=\"margin-left: 5px\" slot=\"start\">\n          <ion-back-button color=\"primary\" defaultHref=\"/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Subject Type</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"each_item\">\n        <!-- <img height=\"60px\" src=\"../../assets/name.svg\" style=\"margin-right: 15px; zoom: 35%;\"> -->\n        <ion-input style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    \n    <!-- <div style=\"margin-left: 11px; margin-bottom: 1px; \">Logo</div> -->\n    <ion-card (click)=\"selectImage()\">\n        <ion-item lines=\"none\">\n            <ion-icon name=\"images\" item-left></ion-icon>\n              <div style=\"margin-left: 16px\">Upload Image</div>                \n        </ion-item>\n    </ion-card>\n\n    <p align=\"center\">\n        <ion-button style=\"width: 90px\">\n            <b>Save</b>\n          </ion-button>\n    </p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addsubjecttype/addsubjecttype.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addsubjecttype/addsubjecttype.module.ts ***!
  \*********************************************************/
/*! exports provided: AddsubjecttypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsubjecttypePageModule", function() { return AddsubjecttypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addsubjecttype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addsubjecttype.page */ "./src/app/addsubjecttype/addsubjecttype.page.ts");







var routes = [
    {
        path: '',
        component: _addsubjecttype_page__WEBPACK_IMPORTED_MODULE_6__["AddsubjecttypePage"]
    }
];
var AddsubjecttypePageModule = /** @class */ (function () {
    function AddsubjecttypePageModule() {
    }
    AddsubjecttypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addsubjecttype_page__WEBPACK_IMPORTED_MODULE_6__["AddsubjecttypePage"]]
        })
    ], AddsubjecttypePageModule);
    return AddsubjecttypePageModule;
}());



/***/ }),

/***/ "./src/app/addsubjecttype/addsubjecttype.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addsubjecttype/addsubjecttype.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHN1YmplY3R0eXBlL2FkZHN1YmplY3R0eXBlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addsubjecttype/addsubjecttype.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addsubjecttype/addsubjecttype.page.ts ***!
  \*******************************************************/
/*! exports provided: AddsubjecttypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsubjecttypePage", function() { return AddsubjecttypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");





var AddsubjecttypePage = /** @class */ (function () {
    function AddsubjecttypePage(camera, actionSheetController, toastCtrl, file) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.name = "";
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    AddsubjecttypePage.prototype.ngOnInit = function () {
    };
    AddsubjecttypePage.prototype.pickImage = function (sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, function (err) {
            // Handle error
        });
    };
    AddsubjecttypePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
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
    AddsubjecttypePage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toastCtrl.create({
                    message: message,
                    position: "bottom",
                    duration: 5000
                }).then(function (res) {
                    res.present();
                });
                return [2 /*return*/];
            });
        });
    };
    AddsubjecttypePage.ctorParameters = function () { return [
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] }
    ]; };
    AddsubjecttypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addsubjecttype',
            template: __webpack_require__(/*! raw-loader!./addsubjecttype.page.html */ "./node_modules/raw-loader/index.js!./src/app/addsubjecttype/addsubjecttype.page.html"),
            styles: [__webpack_require__(/*! ./addsubjecttype.page.scss */ "./src/app/addsubjecttype/addsubjecttype.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]])
    ], AddsubjecttypePage);
    return AddsubjecttypePage;
}());



/***/ })

}]);
//# sourceMappingURL=addsubjecttype-addsubjecttype-module-es5.js.map