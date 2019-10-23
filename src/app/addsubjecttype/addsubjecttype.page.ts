import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
 
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsubjecttype',
  templateUrl: './addsubjecttype.page.html',
  styleUrls: ['./addsubjecttype.page.scss'],
})
export class AddsubjecttypePage implements OnInit {

    croppedImagepath = "";
  isLoading = false;
  name = "";
  // base64String = "";
  // imageUri;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  base64Image;
  constructor(
    private camera: Camera,
    private DomSanitizer: DomSanitizer,
    private router: Router,
    public httpClient: HttpClient,
    public loadingCtrl: LoadingController,
public actionSheetController: ActionSheetController,
public toastCtrl: ToastController,
private file: File
  ) { }

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

  

  AccessCamera(){
     this.camera.getPicture({targetWidth:512, targetHeight:512,correctOrientation:true,sourceType: this.camera.PictureSourceType.CAMERA,destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {

     this.base64Image = 'data:image/jpeg;base64,'+imageData;
      // this.insertImage(this.base64Image)
    //  this.picture = imageData;

         }, (err) => {

     console.log(err);

   });
  }

  AccessGallery(){
    this.camera.getPicture({

    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,

    destinationType: this.camera.DestinationType.DATA_URL

   }).then((imageData) => {

     this.base64Image = 'data:image/jpeg;base64,'+imageData;
// this.insertImage(this.base64Image);
    //  this.picture = imageData;

        }, (err) => {

     console.log(err);

   });
  }

  save(){
    if(this.name == "" || this.name == null || this.name == undefined){
      this.presentToast("Subject type name field cannot be blank")
    }else if(this.base64Image == undefined){
      this.presentToast("Invalid image selected");
    }else{
      this.insertImage(this.base64Image)
    }
  }
  insertImage(base64img){
    this.loadingCtrl.create({message: "Please wait"}).then((res) =>{
      res.present()

      var headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
      
      var reqbody = {
        "name": this.name,
	      "imagestring": base64img
      };

      // this.presentToast(base64img)
      this.httpClient.post("https://tawsil.mr/api/v1/subject_types", reqbody, {headers: headers}).subscribe(data =>{
        console.log(data)

        res.dismiss();
        this.presentToast("Subject type added successfully");
        this.router.navigateByUrl('/listsubjecttypes');

        
      }, (err) =>{

        // console.log(err);
        res.dismiss();
        this.presentToast(err);

      })
    })


    // Indomie 3500
    // Towel 1200
    // Garri 500
    // Detergent 500
    // Harpic 800
    // Rod 1000
    // Airfreshner 300
    


  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
                    this.AccessGallery()

          // this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
                    this.AccessCamera()

          // this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  async presentToast(message){
   this.toastCtrl.create({
     message: message,
     position: "bottom",
     color: 'dark',     
     duration: 5000
   }).then((res) =>{
      res.present()
   })

   
  }
}
