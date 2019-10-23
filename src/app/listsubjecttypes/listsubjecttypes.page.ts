import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-listsubjecttypes',
  templateUrl: './listsubjecttypes.page.html',
  styleUrls: ['./listsubjecttypes.page.scss'],
})
export class ListsubjecttypesPage implements OnInit {

    allsubjectsurl = "https://tawsil.mr/api/v1/subject_types";

 


  subjecttypes = [];
  subtwo = [];


  constructor(public router: Router, 
    public loadingController: LoadingController,
    // public page: Page,
    public httpClient: HttpClient) {}

  ionViewDidEnter(){
    this.getAllSubjectTypes()
  }
  
  ngOnInit(){
    
  }


  opensubjecttypedetails(i){
    let navigationExtras: NavigationExtras = {
      state: {
        subjecttype: this.subtwo[i]
      }
    };

    console.log(i)

    this.router.navigate(['subjecttypedetails'], navigationExtras);
  }


  // ngOnInit(): void {
  //   this.page.on('navigatedTo', (data) => {  
  //     console.log('navigated TO the page!')
  //   //  awesomeFunction()
  //   })
  // }
  onChange($event){
    // console.log($event.detail.value)
    this.subtwo = this.filterItems($event.detail.value);
    console.log(this.subtwo)
  }

  filterItems(searchTerm){
    return this.subjecttypes.filter(item => {
      // console.log(item)
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  addsubjecttype(){
    this.router.navigateByUrl('/addsubjecttype');
  }
  

  getAllSubjectTypes(){
    this.subjecttypes = [];
    this.subtwo = [];
    this.loadingController.create({message:"Loading subject types"}).then((res) =>{
      res.present();

      var headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
  

      this.httpClient.get(this.allsubjectsurl).subscribe(data =>{
        // console.log(data)
        var datagotten:any = data;
        res.dismiss()
        datagotten.data.forEach(subjecttype => {
          if(subjecttype.image != null){
          console.log(subjecttype)
          this.subjecttypes.push(subjecttype);
          // this.subtwo.push(subjecttype)
          this.subtwo = this.subjecttypes;
          } 
        });
      })
    });

  }

}
