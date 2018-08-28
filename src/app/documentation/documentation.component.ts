import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import * as  moment from 'moment';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit  {
dailyReport = true;
rangeReport = false;
dailyAccessReport = false;
res_access = false;
printer_usage = false;
webAccess = false;
firstAid = false;
safty = false;
firstAid_data;
firstAid_location;
firstAid_Driver;
showTable = false;
firstAid_department;
errorMsg = '';
alertMsg = false;
createForm = true;
firstAid_Duty_Officer;
Treatment;
insertedBy;
alertPannel = false;
alertPannel2 = false;
alertReportMsg = 'test Msg';
date;
user_id;
  document = {
    'location': '',
  };
  safty_patient;
 saftyLocation;
  hoursSelected;
  minuteSelected;
  firstAid_patient;
  Picked_date;
  dinnerAccess = 'dinnerAccess_details';
  ResidentAccess = 'All_accessRecords';
  residential_locations = [
   {'LocationNo': 0, 'value': 'Others'}, {'LocationNo': 1, 'value': 'Workers Village'}, {'LocationNo': 2, 'value': 'Al Raha Village'},
   {'LocationNo': 3, 'value': 'Dubai Industrial City'}, {'LocationNo': 4, 'value': 'Sadiyaat Village'},
   {'LocationNo': 5, 'value': 'AlQana'}
  ];
  residential_durations = [
    {'value': 'Last Month'}, {'value': 'Last 3 Months'}, {'value': 'Last 6 Months'}
  ];
  residential_clients = [

  ];
 resident_location;
 saftyYears;
 saftyMonths;
 safty_dates = [
 2014, 2015, 2016, 2017, 2018
 ];

 safty_months = [
  {'value': 'JAN'}, {'value': 'FEB'}, {'value': 'MAR'}, {'value': 'APR'},
  {'value': 'MAY'}, {'value': 'JUN'}, {'value': 'JUL'}, {'value': 'AUG'},
  {'value': 'SEPT'}, {'value': 'OCT'}, {'value': 'NOV'}, {'value': 'DEC'},
 ];
 safty_operator = [
  'SAFETY.WV' , 'SAFETY.RV', 'SAFETY.DIC', 'SAFETY.SAV'
 ];


location_data = [
  {'name': 'HOD & MANAGER', 'value': 'HOD & MANAGER'},
  {'name': 'WV ADMIN', 'value': 'WV ADMIN'},
  {'name': 'WV SITE', 'value': 'WV SITE'},
  {'name': 'RV ADMIN', 'value': 'RV ADMIN'},
  {'name': 'RV SITE', 'value': 'RV SITE'},
  {'name': 'ICCC ADMIN', 'value': 'ICCC SITE'},
  {'name': 'DIC ADMIN', 'value': 'DIC ADMIN'},
  {'name': 'DIC SITE', 'value': 'DIC SITE'},
  {'name': 'SAV ADMIN', 'value': 'SAV SITE'},
  {'name': 'SAV SITE', 'value': 'SAV ADMIN'},
  {'name': 'AL QUANA', 'value': 'AL QUANA'},
  {'name': 'JOUD', 'value': 'JOUD'},
  {'name': 'SKILLfORCE ADMIN', 'value': 'SKILLfORCE ADMIN'},
  {'name': 'SKILLfORCE OPERATION', 'value': 'SKILLfORCE OPERATION'},
  {'name': 'UNIQUEST', 'value': 'UNIQUEST'},
  {'name': 'DVISON', 'value': 'DVISON'},
  {'name': 'TAM AL DAYA', 'value': 'TAM AL DAYA'},
  {'name': 'ICAD WORKSHOP', 'value': 'ICAD WORKSHOP'},
  {'name': 'Not a Biometric Site', 'value': 'Not a Biometric Site'},
  {'name': 'INACTIVE', 'value': 'INACTIVE'},


];



myalert = false;
saftyReportArray2 = [];
showSafteyTable = false;
IDNumber;
ResidentName;
Designation;
PatientContactNo;
IsWorkRelated = 0;
Complaint;
Diagnosis;
HospitalCode;
driver;
officers;
departments;
companies;
hospitals;
Selectedcompany;
Report_date;
hours = [];
minutes = [];
bioData = [];
showBioData: Boolean = false;
duty_status;
serial;
showAlert = false;
dayTime: String;
Emp_id = '';
date_1 = '';
date_2 = '';
show_range_BioData = false;
rangeBioData =  [];
constructor(private sc: ApiService) {

// get minutes and hours

for (let i = 0; i < 61; i++) {


  this.minutes.push((i.toString()).padStart(2, '0'));


}

for (let j = 0; j < 24; j++) {

 this.hours.push((j.toString()).padStart(2, '0'));


}



}

// get hrs selected
gettime(e) {
  console.log(this.hoursSelected);

}



// get first aid details
getuserDetails() {
  this.sc.firstaid_data()
  .subscribe(data => {
    console.log(data);
      this.departments = data['department'];
      this.companies = data['company'];
      this.driver = data['driver'];
      this.hospitals = data['hospital'];
      this.officers = data['officers'];
  });

}
// addReport
addReport(e) {
  e.preventDefault();
  let time = this.hoursSelected + ':' + this.minuteSelected;

  this.sc.makeFirstAid_report ( // send data to back end
    this.firstAid_location, this.Report_date , time,
this.firstAid_patient,  this.duty_status, this.Selectedcompany[0], this.Selectedcompany[1], this.firstAid_department,  this.IDNumber,
this.ResidentName, this.Designation,  this.PatientContactNo, this.IsWorkRelated,
this.Complaint, this.Diagnosis, this.Treatment, this.HospitalCode, this.firstAid_Driver,
this.firstAid_Duty_Officer, this.insertedBy

  )
     .subscribe( data => {
 if (data['errors']) {
        this.alertPannel = true;

        this.alertReportMsg = 'please fill in all the fields';
       }

       if (data['status'] === 'success') {

                      this.alertPannel = false;
                      this.alertPannel2 = true;
                      this.alertReportMsg = 'Report has been successfully created';

                      // empty all fields

                      this.firstAid_location = null, this.Report_date  = '' , time  = '',
    this.firstAid_patient  = '',  this.duty_status  = '', this.Selectedcompany[0]  = '',
    this.Selectedcompany[1] = '', this.firstAid_department = '',  this.IDNumber = '',
    this.ResidentName = '', this.Designation = '',  this.PatientContactNo = '', this.IsWorkRelated = null,
    this.Complaint = '', this.Diagnosis = '', this.Treatment = '' , this.HospitalCode = '', this.firstAid_Driver = '',
    this.firstAid_Duty_Officer = '', this.insertedBy = ' ';
       }

                    });
}


// hideWarning
hideWarning() {
  this.alertPannel = false;
  this.alertPannel2 = false;
}

// view data
view_data() {
  if (this.saftyLocation === undefined || this.safty_patient === undefined || this.saftyYears === undefined ) {
    this.myalert = true;

    setTimeout(() => {
        this.myalert = false;
        }, 4000);
    return false;
  }
  this.sc.GetsaftyReport(this.saftyLocation, this.safty_patient, this.saftyYears )
.subscribe(data => {
     //
   data['data'].filter(elem => {
    if ((elem.InsertTime).slice(0, -20) == this.saftyYears) {
    console.log(elem);
      this.saftyReportArray2.push(elem);
      this.showSafteyTable = true;
    }
   });


    });

  }


  


// downloadFile saftey
  downloadFile() {
    if (this.saftyLocation === undefined || this.safty_patient === undefined || this.saftyYears === undefined ) {
      this.myalert = true;

      setTimeout(() => {
          this.myalert = false;
          }, 4000);
      return false;
    }
   const dataTodownload = [];
   this.showSafteyTable = false;
    this.sc.GetsaftyReport(this.saftyLocation, this.safty_patient, this.saftyYears )
    .subscribe(data => {
         //
       data['data'].filter(elem => {
        if ((elem.InsertTime).slice(0, -20) == this.saftyYears) {
        console.log(elem);
        dataTodownload.push(elem);

        }
       });
        this.saftyReportArray2 = [];
       const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataTodownload);
       const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
       XLSX.writeFile(workbook, 'safteyReport.csv', { bookType: 'csv', type: 'buffer' });



        });

  }


  /// view Bio Data

  viewData() {
   const dt =  moment(this.date).format();
   if (this.user_id === undefined) {
    this.showAlert = true;
    this.showBioData = false;
     setTimeout(() => {
        this.showAlert = false;
        this.showBioData = false;
      }, 1000);
      return false;
   }
   this.sc.getBioData(this.user_id, dt )
           .subscribe(data => {
              this.bioData = data['recordset'];

              this.showBioData = true;
              if (data['recordset'].length === 0) {
                this.showAlert = true;
                this.showBioData = false;

                  setTimeout(() => {
                    this.showAlert = false;
                    this.showBioData = false;
                  }, 1000);
              }


            }

            );

  }



  // viewMultiple Biometric Data
  viewMultipleData() {

    if (this.user_id === undefined || this.date_1 === undefined || this.date_2 === undefined) {
      this.showAlert = true;
      this.showBioData = false;
       setTimeout(() => {
          this.showAlert = false;
          this.showBioData = false;
        }, 1000);
        return false;
     }

  this.sc.getRangeBioData(this.user_id, this.date_1, this.date_2)
         .subscribe(data => {
           this.show_range_BioData = true;
           if (data['recordset'].length === 0) {
            this.showAlert = true;
            this.showBioData = false;

              setTimeout(() => {
                this.showAlert = false;
                this.showBioData = false;
              }, 1000);
          }
           this.rangeBioData = data['recordset'];
           console.log(data);
         });

  }



// get_DailyReport

get_DailyReport() {
  this.dailyReport = true;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = false;

}



// get_WebReport
get_WebReport() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = true;
  this.firstAid = false;
  this.safty = false;


}



// get_RangeReport
get_RangeReport() {
  this.dailyReport = false;
  this.rangeReport = true;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = false;


}


// get_Daily_AccessReport
get_Daily_AccessReport() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = true;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = false;
}


// get_safetyReport
get_safetyReport() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = true;

}
// get_Res_Report
get_Res_Report() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = true;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = false;


}

// get_PrinterReport
get_PrinterReport() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = true;
  this.webAccess = false;
  this.firstAid = false;
  this.safty = false;


}

// get_FirstAidReport
get_FirstAidReport() {
  this.dailyReport = false;
  this.rangeReport = false;
  this.dailyAccessReport = false;
  this.res_access = false;
  this.printer_usage = false;
  this.webAccess = false;
  this.firstAid = true;
  this.safty = false;


}


// getSelectedOption
getSelectedOption(e) {
  console.log(e.value);
  console.log(this.Picked_date);
}


// getSelectedResidenceReport
getSelectedResidenceReport(e) {
  console.log(e.value);
}


chooseDate(e) {
  console.log(e);

}


// get data from search
getSearchData() {
  this.sc.firstaid_search(this.serial)
  .subscribe(data => {
    console.log(data);

    if (data) {
      this.alertMsg = false;
      this.showTable = true;
      this.createForm = false;
    }
    if (data['msg']) {

      this.showTable = false;
      this.alertMsg = true;
      this.errorMsg = 'Error: ' + data['msg'];

    }

    this.firstAid_data = data;

  });
}

// showCreateForm
showCreateForm() {
  this.createForm = true;
  this.showTable = false;
  this.alertMsg = false;

}


// getDutty
getDutty(e) {
  this.duty_status = e.value;
}



  ngOnInit() {
    this.getuserDetails();

  }

}
