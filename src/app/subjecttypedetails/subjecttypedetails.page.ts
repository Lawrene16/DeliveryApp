import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-subjecttypedetails',
  templateUrl: './subjecttypedetails.page.html',
  styleUrls: ['./subjecttypedetails.page.scss'],
})
export class SubjecttypedetailsPage implements OnInit {

  data;
  apiUrl = "http://tawsil.mr/api/v1/subject_types/";

  constructor(public alertController: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public httpClient: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.subjecttype;

        console.log(this.data);
      }
    });
  }

  makeeditable(){
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Input subject title here',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: this.data.name
          // placeholder: 'Placeholder 1'
        },
        // {
        //   name: 'name3',
        //   value: 'http://ionicframework.com',
        //   type: 'url',
        //   placeholder: 'Favorite site ever'
        // },
        // // input date with min & max
        // {
        //   name: 'name4',
        //   type: 'date',
        //   min: '2017-03-01',
        //   max: '2018-01-12'
        // },
        // // input date without min nor max
        // {
        //   name: 'name5',
        //   type: 'date'
        // },
        // {
        //   name: 'name6',
        //   type: 'number',
        //   min: -5,
        //   max: 10
        // },
        // {
        //   name: 'name7',
        //   type: 'number'
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Save',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data)
            console.log()
          }
        }
      ]
    });

    await alert.present();
  }


  async presentDelete(){

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons: [
        {
          text: 'Add Category',
          icon: 'add',
          handler: () => {
            console.log('Share clicked');
            this.router.navigateByUrl('/addcategory');
          }
        },  
      {
        text: 'Edit Photo',
        icon: 'images',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Edit Title',
        icon: 'create',
        handler: () => {
          // console.log('Share clicked');
          this.makeeditable();
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.deleteSubjectType(this.data.id);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  deleteSubjectType(id){
    this.loadingCtrl.create({message: "Deleting subject type"}).then((res) =>{
      res.present();

      this.httpClient.delete(this.apiUrl + id).subscribe((data) =>{
        res.dismiss();
        this.router.navigateByUrl('/listsubjecttypes');
        this.presentToast("Subject type deleted successfully")
      }, (err) =>{
        res.dismiss()
      })
    })
    
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

