(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addsubjecttype-addsubjecttype-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addsubjecttype/addsubjecttype.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addsubjecttype/addsubjecttype.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons style=\"margin-left: 5px\" slot=\"start\">\n          <ion-back-button color=\"primary\" defaultHref=\"/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Subject Type</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"each_item\">\n        <!-- <img height=\"60px\" src=\"../../assets/name.svg\" style=\"margin-right: 15px; zoom: 35%;\"> -->\n        <ion-input style=\"margin-left: 10px\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    \n    <!-- <div style=\"margin-left: 11px; margin-bottom: 1px; \">Logo</div> -->\n    <ion-card (click)=\"selectImage()\">\n        <ion-item lines=\"none\">\n            <ion-icon name=\"images\" item-left></ion-icon>\n              <div style=\"margin-left: 16px\">Upload Image</div>                \n        </ion-item>\n    </ion-card>\n\n    <img style=\"height: 300px; width: 100%;\" [src]=\"base64Image\" *ngIf=\"base64Image\">\n\n    <p align=\"center\">\n        <ion-button (click)=\"save()\" style=\"width: 90px\">\n            <b>Save</b>\n          </ion-button>\n    </p>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addsubjecttype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addsubjecttype.page */ "./src/app/addsubjecttype/addsubjecttype.page.ts");







const routes = [
    {
        path: '',
        component: _addsubjecttype_page__WEBPACK_IMPORTED_MODULE_6__["AddsubjecttypePage"]
    }
];
let AddsubjecttypePageModule = class AddsubjecttypePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AddsubjecttypePage = class AddsubjecttypePage {
    constructor(camera, DomSanitizer, router, httpClient, loadingCtrl, actionSheetController, toastCtrl, file) {
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.router = router;
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.name = "";
        // base64String = "";
        // imageUri;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    ngOnInit() {
        // this.insertImage()
    }
    //   pickImage(sourceType) {
    //   const options: CameraOptions = {
    //     quality: 100,
    //     sourceType: sourceType,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64 (DATA_URL):
    //     // let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     // this.insertImage(base64Image);
    //     // this.base64String = base64Image;
    //     // this.imageUri = imageData;
    //     // console.log(base64Image)
    //   }, (err) => {
    //     // Handle error
    //   });
    // }
    AccessCamera() {
        this.camera.getPicture({ targetWidth: 512, targetHeight: 512, correctOrientation: true, sourceType: this.camera.PictureSourceType.CAMERA, destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.insertImage(this.base64Image)
            //  this.picture = imageData;
        }, (err) => {
            console.log(err);
        });
    }
    AccessGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.insertImage(this.base64Image);
            //  this.picture = imageData;
        }, (err) => {
            console.log(err);
        });
    }
    save() {
        if (this.name == "" || this.name == null || this.name == undefined) {
            this.presentToast("Subject type name field cannot be blank");
        }
        else if (this.base64Image == undefined) {
            this.presentToast("Invalid image selected");
        }
        else {
            this.insertImage(this.base64Image);
        }
    }
    insertImage(base64img) {
        this.loadingCtrl.create({ message: "Please wait" }).then((res) => {
            res.present();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                "Content-Type": "application/json",
            });
            var reqbody = {
                "name": this.name,
                "imagestring": base64img
            };
            // this.presentToast(base64img)
            this.httpClient.post("https://tawsil.mr/api/v1/subject_types", reqbody, { headers: headers }).subscribe(data => {
                console.log(data);
                res.dismiss();
                this.presentToast("Subject type added successfully");
                this.router.navigateByUrl('/listsubjecttypes');
            }, (err) => {
                // console.log(err);
                res.dismiss();
                this.presentToast(err);
            });
        });
        // Indomie 3500
        // Towel 1200
        // Garri 500
        // Detergent 500
        // Harpic 800
        // Rod 1000
        // Airfreshner 300
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.AccessGallery();
                            // this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.AccessCamera();
                            // this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toastCtrl.create({
                message: message,
                position: "bottom",
                color: 'dark',
                duration: 5000
            }).then((res) => {
                res.present();
            });
        });
    }
};
AddsubjecttypePage.ctorParameters = () => [
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] }
];
AddsubjecttypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addsubjecttype',
        template: __webpack_require__(/*! raw-loader!./addsubjecttype.page.html */ "./node_modules/raw-loader/index.js!./src/app/addsubjecttype/addsubjecttype.page.html"),
        styles: [__webpack_require__(/*! ./addsubjecttype.page.scss */ "./src/app/addsubjecttype/addsubjecttype.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]])
], AddsubjecttypePage);



/***/ })

}]);
//# sourceMappingURL=addsubjecttype-addsubjecttype-module-es2015.js.map