import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss']
})
export class UpdateCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateCampaign(){
    console.log('updating campaign...');
  }

}
