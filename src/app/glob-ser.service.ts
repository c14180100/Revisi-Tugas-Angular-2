import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  nameData = [];
  captionData = [];

  constructor() { }

  public editCaption(name,caption){
    for(let i = 0; i < this.nameData.length; i++){
      if(name == this.nameData[i]){
        this.captionData[i] = caption;
      }
    }
  }

  public getName(){
    return this.nameData;
  }

  public setName(name){
    for(let i = 0; i < this.nameData.length; i++){
      if(name == this.nameData[i]) return;
    }
    this.nameData.push(name);
  }

  public getCaption(){
    return this.captionData;
  }

  public setCaption(caption){
    for(let i = 0; i < this.captionData.length; i++){
      if(caption == this.captionData[i]) return;
    }
    this.captionData.push(caption);
  }

}