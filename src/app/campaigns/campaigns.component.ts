import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateCampaign(){
    console.log("updating campaign");
  }

  deleteCampaign(){
    console.log("deleting campaign");
  }

}
