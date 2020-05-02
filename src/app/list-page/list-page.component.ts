import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  nameData = [];
  captionData = [];
  data = [];

  constructor(private route : ActivatedRoute, public globalVar : GlobSerService) {
    this.data = []; 
    this.nameData = this.globalVar.getName();
    this.captionData = this.globalVar.getCaption();

    for(let i = 0; i < this.nameData.length; i++){
      var str = "";
      str += "Jurusan : ";
      str += this.nameData[i];
      str += "\n";
      str += "Penjelasan : ";
      str += this.captionData[i];
      this.data.push(str);
    }


  }

  ngOnInit() {
  }

}