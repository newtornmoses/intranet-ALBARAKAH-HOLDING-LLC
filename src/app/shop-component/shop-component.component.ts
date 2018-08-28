
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../assets/ng_prime/primeng/shared';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent implements OnInit {
 url = 'https://secure.telr.com/gateway/order.json';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const data =  {
      ivp_method: 'create',
      ivp_store: 20803,
      ivp_authkey: 'fZ4hW~NgCR#bP4pv',
      ivp_amount: 100.00

    };
   const headers: any = new Headers();
   headers.append('Content-Type', 'application/json');
    this.http.post(this.url , data, {headers: headers})
      .subscribe( res => console.log(res));
  }

}
