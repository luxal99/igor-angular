import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {

  imageObject: Array<object>=[
    {image:'assets/img/dpf-icon.jpg', thumbImage: 'assets/img/dpf-icon.jpg'},
    {image:'assets/img/k-tag.jpg', thumbImage: 'assets/img/k-tag.jpg'}
  ]

  images:any=['assets/img/Audi_RS5_A5_Drive_2018_Back_view_Red_536755_1280x746.jpg','assets/img/k-tag.jpg','assets/img/KessV2-Australia.jpg','assets/img/Mercedes_Car_Dark_Wallpaper.jpg']

  slider: NgImageSliderComponent ;
  
  constructor() { }

  imageUrlArray:string[];

  prevImg(){
    this.slider.prev()
  }
  nextImg(){
    this.slider.next();
  }
  
  ngOnInit() {
  }

}
