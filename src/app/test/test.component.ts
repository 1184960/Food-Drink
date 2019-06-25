import { Component, OnInit } from '@angular/core';
import example from '../../../Ingredienti.json';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ciaone = [];
  
  constructor(private httpClient: HttpClient) {
    
    example.forEach(element => {
      this.ciaone.push(element.searchValue);
    });
    
    this.httpClient.get(AppComponent.baseUrlServer +'').subscribe((res)=>{
      console.log(res);
     });
   
    }
    dropdownOptions = this.ciaone;
   
  ngOnInit() {
    
  }

}
