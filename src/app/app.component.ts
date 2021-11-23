import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number = 5;
  n2: number = 2;
  picName:string = "https://i1.sndcdn.com/artworks-000619817740-mj6qhm-t500x500.jpg";

  hi(name:string){
    alert("Hi " + name);
  }
}