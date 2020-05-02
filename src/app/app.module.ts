import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobSerService } from './glob-ser.service';
import { InputPageComponent } from './input-page/input-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputPageComponent, ListPageComponent, EditPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobSerService]
})
export class AppModule { }
