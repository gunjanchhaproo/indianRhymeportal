import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionModule } from '../introduction/introduction.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PoetryModule } from '../poetry/poetry.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IntroductionModule,
    NgbModule,
    PoetryModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
