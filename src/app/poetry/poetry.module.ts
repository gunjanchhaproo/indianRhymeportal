import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpoetryComponent } from './viewpoetry/viewpoetry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ViewpoetryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ViewpoetryComponent
  ]
})
export class PoetryModule { }
