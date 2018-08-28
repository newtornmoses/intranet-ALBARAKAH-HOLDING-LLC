import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-intranet-home',
  templateUrl: './intranet-home.component.html',
  styleUrls: ['./intranet-home.component.css']
})
export class IntranetHomeComponent implements OnInit {
quotes = [];
newMembers: any = [];
  constructor(private http: HttpClient) {}


     getQuoteTheDay() {
        this.http.get('http://quotes.rest/qod.json')
      .subscribe(data => {

        this.quotes = data['contents'].quotes;

      });
     }


     // new staff
     newstaff() {
       this.http.get('./assets/images/newStaff/newStaff.json')
           .subscribe(data => {
             this.newMembers = data;
console.log(this.newMembers);

            });

     }

    ngOnInit() {
      this.getQuoteTheDay();
      this.newstaff();

    }




}
