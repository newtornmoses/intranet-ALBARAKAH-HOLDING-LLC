import { HttpClient } from '@angular/common/http';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takreem',
  templateUrl: './takreem.component.html',
  styleUrls: ['./takreem.component.css']
})
export class TakreemComponent implements OnInit {

  constructor(private sv: ApiService , private Http: HttpClient) { }
  showAlert: Boolean = false;
  successMsg: String;
  departments: any [];
  takreem = {
  'idea': '',
  'email': '',
  'name': '',
   'department': '',
   'ideaWill': {
    'saveMoney': true,
    'saveTime' : false,
    'betterQuality': false,
    'CustomerExperience': false
   }
   ,
   'part_of' : 'no'
  };
// collect departments
   getDepartments() {
    this.sv.departments()
    .subscribe(data => {
     const sorted = data['result'].sort((a, b) => a.SiteID - b.SiteID );
      this.departments = sorted;
    });
   }
  // collect form data
  getFormData(e) {
    e.preventDefault();
  console.log(this.takreem);
  this.sv.saveTakreem(this.takreem.idea, this.takreem.email, this.takreem.part_of, this.takreem.name,
    this.takreem.ideaWill.CustomerExperience, this.takreem.ideaWill.saveMoney,
    this.takreem.ideaWill.saveTime, this.takreem.ideaWill.betterQuality,
  )
          .subscribe(data => {
            if (data['msg']) {
            this.showAlert = true;

               this.successMsg = data['msg'];
            }
          });
  }

  // close alert
  cancleAlert(e) {
    e.preventDefault();
    this.showAlert = false;
  }


  


  ngOnInit() {
    this.getDepartments();
  }

}
