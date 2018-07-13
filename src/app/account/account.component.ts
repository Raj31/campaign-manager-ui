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
public accounts:any[];
public users:any[];
accountId:string;
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
        this.accountId = this.accounts[0]._id
        this.accountName = this.accounts[0].accountname;
        this.accountPhone = this.accounts[0].phone;
        this.accountAddress = this.accounts[0].address;
        this.accountCity = this.accounts[0].city;
        this.accountState = this.accounts[0].state;
        this.accountCountry = this.accounts[0].country;
        this.accountZip = this.accounts[0].zip;
        console.log(this.users);
        
      });
  }

  addUpdateUser(action,userId){
    console.log("addUpdateUser  called....");
    console.log("Action is....",action);
    console.log("account or userId passed....",userId);
    if(action=="add"){
      this.router.navigate(['user'], { queryParams: { action: action,accountid:this.accountId,userid:'' } });
    }else if(action=="update"){
      this.router.navigate(['user'], { queryParams: { action: action,accountid:this.accountId,userid:userId } });
    }
    
  }

  deleteUser(userId){
    console.log('Code to be written for making user inactive');
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