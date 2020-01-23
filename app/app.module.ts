import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesService } from './categories.service';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, BrowserAnimationsModule, TreeViewModule, HttpClientModule],
  providers: [CategoriesService]
})
export class AppModule { }
