import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PoetryService } from '../poetry.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-viewpoetry',
  templateUrl: './viewpoetry.component.html',
  styleUrls: ['./viewpoetry.component.css']
})
export class ViewpoetryComponent implements OnInit {

  poemForm!:FormGroup
  poems:any=[]
  selectedPoem:any
  data:any
  downloadClicked:boolean=false

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

  public openPDF(): void {
    this.downloadClicked=true
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

}
