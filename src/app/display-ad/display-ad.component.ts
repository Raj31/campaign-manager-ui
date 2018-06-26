import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-ad',
  templateUrl: './display-ad.component.html',
  styleUrls: ['./display-ad.component.scss']
})


export class DisplayAdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadImages(formData){
    console.log('formData...');
  }

}
