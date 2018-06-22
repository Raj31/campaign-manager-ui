import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { environment } from 'environments/environment';
//import { AccountService } from '../../app/services/account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router, ActivatedRoute } from '@angular/router';
//import {DataSource} from '@angular/cdk/collections';
//import { Account } from '../../app/models/account.model';
//import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
baseAPIUrl:String;
accounts:any[];
public users:any[];
accountName:String;
accountPhone:String;
accountAddress:String;
accountCity:String;
accountState:String;
accountCountry:String;
accountZip:String;
http:any;
loginValue:any = {};

//dataSource = new UserDataSource(this.accountService);

  constructor(
    http:Http,
    private router:Router,
    private route:ActivatedRoute
        ){ 
        this.http=http;
        console.log("calling getAccount");
        this.getAccount();
  }

  ngOnInit() {
  }

  getAccount(){
    this.baseAPIUrl=environment.apiUrl;
    this.http.get(this.baseAPIUrl+'/accounts')
      .subscribe(response =>{
        console.log(response.json());
        this.accounts=response.json();
        this.users=this.accounts[0].users;
        this.accountName = this.accounts[0].accountname;
        this.accountPhone = "248-120-1200";
        this.accountAddress = "32425 Grand River";
        this.accountCity = "Novi";
        this.accountState = "MI";
        this.accountCountry = "USA";
        this.accountZip = "48393";
        console.log(this.users);
        
      });
  }

  updateUser(){
    console.log("update user called....");
    this.router.navigate(['user']);
  }
}
/*
export class UserDataSource extends DataSource<any> {
  constructor(private userService: AccountService) {
    super();
  }
  connect(): Observable<Account[]> {
    console.log("UserDataSource called....");
    return this.userService.getUser();
    
  }
  disconnect() {}
}
*/