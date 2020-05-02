import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  name:String;
  caption:String;

  constructor(private route : ActivatedRoute, public globalVar : GlobSerService) { 
    

  }

  ngOnInit() {
  }

  edit(name, caption){

    this.name = name;
    this.caption = caption;
    this.globalVar.editCaption(this.name,this.caption);

  }



}