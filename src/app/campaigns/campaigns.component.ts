import { Component, OnInit, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  baseAPIUrl:String;
  campaigns:any[];
  public advertiser:any[];
  campaignname:String;
  enddate:Date;
  startdate:Date;
  http:any;
  //loginValue:any = {};

  constructor(
    http:Http,
    private router:Router,
    private route:ActivatedRoute
        ){
        this.http=http;
        console.log("Getting Campaigns Data");
        this.getCampaigns("active");
  }

  ngOnInit() {
  }

  getCampaigns(status){
    console.log('getCampaigns:'+status);
    this.baseAPIUrl=environment.apiUrl;
    this.http.get(this.baseAPIUrl+'/campaigns?status='+status)
      .subscribe(response =>{
        console.log(response.json());
        this.campaigns=response.json();
        for(var i=0; i<this.campaigns.length; i++){
          this.advertiser=this.campaigns[i].advertiser;
          this.campaignname = this.campaigns[i].campaignname;
          this.startdate = this.campaigns[i].startdate;
          this.enddate = this.campaigns[i].enddate;
        }

      });
  }

  updateCampaign(campaign){
    console.log(campaign);
  }

  deleteCampaign(){
    console.log("deleting campaign");
  }


}
