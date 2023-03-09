import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PoetryService } from '../poetry.service';

@Component({
  selector: 'app-viewpoetry',
  templateUrl: './viewpoetry.component.html',
  styleUrls: ['./viewpoetry.component.css']
})
export class ViewpoetryComponent implements OnInit {

  poemForm!:FormGroup
  poems:any=[]
  selectedPoem:any

  constructor(private poemService:PoetryService) { }

  ngOnInit(): void {
    this.createPoemForm()
  }

  createPoemForm(){
    this.poemForm=new FormGroup({
      language:new FormControl()
    })
  }

  getPoem(){
    this.poemService.getPoem({
      Language:this.poemForm.get('language')?.value
    }).subscribe((value)=>{
      this.poems=value
      this.poems.forEach((element: { Poem: any; }) => {
        this.selectedPoem=element.Poem
      });
      console.log(value)
    })
  }

}
