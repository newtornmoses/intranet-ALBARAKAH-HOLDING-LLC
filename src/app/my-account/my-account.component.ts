import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {



  search;
  telephone_Array: any = [];
 actualData: any = [];
 location;
 extension = true;
 user = false;
 showdetails = false;
 isSearching = false;
 Quickemails = false;
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


   ShowQuickEmail() {
     this.Quickemails = true;

   }


  ngOnInit() {
    this.actualData = this.sc.tel.data;
   this.telephone_Array  = this.actualData;
    console.log(this.telephone_Array);
  }

}
