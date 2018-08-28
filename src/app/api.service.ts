import { Injectable  } from '@angular/core';
import { Response,  Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import {Telephone} from './telephone_data/telephone';



@Injectable()
export class ApiService {

  constructor(private http: HttpClient, public tel: Telephone ) { }

gettel() {
  return this.tel.getdata;
}

// login
getLogin(id, password) {
  const data = {
    id,
    password
  };
  const header: any = new Headers();
  header.append('Content-Type', 'application/json');
 return   this.http.post('http://localhost:3000/users/login',  data, {headers: header});


}


// signup
getSignup(username, PCName, email,  password,  LoginName, id,  DepartmentCode ) {
  const data = {
    id,
    password,
    username,
    LoginName,
    email,
    DepartmentCode,
    PCName,

  };

  const header: any = new Headers();
  header.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/users/signup',  data, {headers: header});
}






// get departments
departments () {
  const header: any = new Headers();
  header.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/departments', {headers: header});
}


// get  first aid data from search
 firstaid_search(formdata) {

  const form_data =  {
    serial: formdata
  };
   return this.http.post('http://localhost:3000/firstaid/search' ,  form_data );
 }


 // get first aid user data
firstaid_data() {
  return this.http.get('http://localhost:3000/firstaid/user_data');
}


// make new first aid report
makeFirstAid_report(location, reportDate, reportTime, type_no , IsDuty,
  CompanyCode, CompanyName, DepartmentCode, IDNumber, ResidentName,
  Designation, PatientContactNo,  IsWorkRelated,  Complaint,  Diagnosis,
  Treatment, HospitalCode, DriverCode, OfficerCode, InsertBy
) {
  const data = {
    LocationNo: location,
    ReportDate: reportDate,
    ReportTime: reportTime,
    TypeNo: type_no,
    CompanyCode: CompanyCode,
    CompanyName: CompanyName,
    DepartmentCode: DepartmentCode,
    IDNumber: IDNumber,
    ResidentName: ResidentName,
    Complaint: Complaint,
    Diagnosis: Diagnosis,
    Treatment: Treatment,
    HospitalCode: HospitalCode,
    PatientContactNo: PatientContactNo,
    DriverCode: DriverCode,
    OfficerCode: OfficerCode,
    Designation: Designation,
    IsDuty: IsDuty,
    IsWorkRelated: IsWorkRelated,
    InsertBy: InsertBy,


  };
const headers = new Headers();
headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/firstaid/addReport', data);
}



// collect data by loc, patient, date
GetsaftyReport(loc, patient, date) {
  const data = {
    InsertTime: date,
    TypeNo: patient,
    LocationNo: loc

  };
  return this.http.post('http://localhost:3000/firstaid/getData' , data);

}

// dowload Forms
downloadForms() {
  return this.http.get('./assets/forms/01-User Account Access Form.docx');
}


// save Takreem
saveTakreem(idea, email, part_of, name, CustomerExperience, saveMoney , saveTime, betterQuality   ) {
  const data = {
    idea: idea,
    email: email,
    part_of: part_of,
    name: name,
    ideaWill: {
      CustomerExperience: CustomerExperience,
      saveMoney: saveMoney,
      saveTime: saveTime,
      betterQuality: betterQuality

    }
  };


  return this.http.post('http://localhost:3000/takreem/add', data);
}



// get biometric data
getBioData(userid, date) {
   const data = {
    userId: userid,
    date: date
   };
  return this.http.post('http://localhost:3000/biometric' , data );
}


//  getRangeBioData
getRangeBioData(userid, date_1 , date_2) {
  const data = {
   userId: userid,
   date_1: date_1,
   date_2: date_2

  };
 return this.http.post('http://localhost:3000/biometric/dataBtnDates' , data );
}




}
