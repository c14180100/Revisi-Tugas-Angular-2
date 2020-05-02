import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

  name:String;
  caption:String;

  constructor(private route : ActivatedRoute, public globalVar : GlobSerService) { 
    

  }

  ngOnInit() {
  }

  input(name, caption){

    this.name = name;
    this.caption = caption;
    this.globalVar.setCaption(this.caption);
    this.globalVar.setName(this.name);

  }

}