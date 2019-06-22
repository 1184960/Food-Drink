import { Component, OnInit } from '@angular/core';
import example from '../../../Ingredienti.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  constructor() {
    example.forEach(element => {

    });
   }
   
  ngOnInit() {
    
  }

}
