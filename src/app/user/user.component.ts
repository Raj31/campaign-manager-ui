import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { environment } from 'environments/environment';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  baseAPIUrl:String;
  public user:{};
  http:any;
  accountName:String;
  status = [
      { value: "active", label: "Active" },
      { value: "in-active", label: "In-active" }
    ];
  userStatus="In-active";

  


  constructor(http:Http,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.http=http;
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let action = params['action'];
      let accountId = params['accountid'];
      let userId = params['userid'];
      console.log("in user ts.");
      console.log(action);
      
      this.getAccountName(accountId);

      if(action=='update'){
        this.getUser(accountId,userId);
      }

    });
  }
  
  addUser(accountId){
    //should be called submit for new user
  }
  updateUser(accountId,userId){
    //should be called submit for exiting user
  }

  getAccountName(accountId){
    //should be called to get Account Name, will be called in ngOnIt
    this.baseAPIUrl=environment.apiUrl;
    this.http.get(this.baseAPIUrl+'/accounts/'+accountId)
      .subscribe(response =>{
        console.log(response.json());
        this.accountName = response.json().accountname;
        console.log(this.accountName);
      });
  }

  getUser(accountId,userId){
    //should be called to display user details, will be used by ngOnIt and updateUser

    this.baseAPIUrl=environment.apiUrl;
    this.http.get(this.baseAPIUrl+'/accounts/user/'+accountId+'/'+userId)
      .subscribe(response =>{
        this.user=response.json();
        this.userStatus=response.json().status.toLowerCase();
        console.log(this.user);
        
      });
  }

  


}
