import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-information-technology',
  templateUrl: './information-technology.component.html',
  styleUrls: ['./information-technology.component.css']
})
export class InformationTechnologyComponent implements OnInit {
  startPage = true;
  ItSupport = false;
  telephone_dir = false;
  downloadForms = false;
  userManage = false;

  search;
  telephone_Array: any = [];
 actualData: any = [];
 location;
 extension = true;
 user = false;
 showdetails = false;
 isSearching = false;

   constructor(public sc: ApiService) { }


   // get all data
   getAll_data() {
     this.isSearching = false;
     this.telephone_Array = this.actualData.map(elem => elem).sort((a, b) => (a.department.toLowerCase() > b.department.toLowerCase() ));
     console.log(this.telephone_Array);
     console.log(this.actualData);
   }

   // get search
   getSearch(e) {


 const word = e.target.value;
 this.isSearching = true;
  this.telephone_Array = this.actualData.filter(elem => elem.extension.toString().indexOf(word.toString()) !== -1);
  console.log(this.telephone_Array);
   }

   // get_userSearch
   get_userSearch(e) {

     const word = e.target.value;
     this.isSearching = true;
     this.telephone_Array = this.actualData.filter(elem => elem.extension_user.toLowerCase().indexOf(word.toLowerCase()) !== -1);
  console.log(this.telephone_Array);

     if (!this.telephone_Array ) {
       this.isSearching = false;
     }
   }

 // get department
   getDepartment(event) {
     this.isSearching = false;
  this.telephone_Array = this.actualData.filter(elem => elem.location.toLowerCase().indexOf(event.toLowerCase()) !== -1);

   }


   searchby(a, b) {
     this.user = a;
     this.extension = b;

   }

   // hover
   show_details(e) {
    this.showdetails = true;
    this.location = e;
   }



  // showIt_support
  showIt_support() {
    this.startPage = false;
    this.ItSupport = true;
    this.telephone_dir = false;
    this.downloadForms = false;
    this.userManage = false;
  }


  // show_telephone_dir
  show_telephone_dir() {
    this.startPage = false;
    this.ItSupport = false;
    this.telephone_dir = true;
    this.downloadForms = false;
    this.userManage = false;
  }

  // showIt_download
  showIt_download() {
    this.startPage = false;
    this.ItSupport = false;
    this.telephone_dir = false;
    this.downloadForms = true;
    this.userManage = false;
  }

  // showIt_userManage
  showIt_userManage() {
    this.startPage = false;
    this.ItSupport = false;
    this.telephone_dir = false;
    this.downloadForms = false;
    this.userManage = true;
  }

  // download userForm
  downloadUserForm() {
    this.sc.downloadForms()
                .subscribe(data => {
                  console.log(data);
                  console.log('clicked');
                });
  }

  // load email client/ outlook
  loadOutlook() {
    alert('please wait while outlook loads \n click ok to continue');
  }

  ngOnInit() {


    this.actualData = this.sc.tel.data;
   this.telephone_Array  = this.actualData;




   }

}
