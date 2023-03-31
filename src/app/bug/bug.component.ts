import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent {
  pageBugs: any; 
  constructor(private http: HttpClient){
    this.pageBugs = { content: [] };
    this.http.get("http://localhost:8080/Bug")
  .subscribe(
    (data: any) => {
      this.pageBugs = data;
    },
    (error: any) => {
      console.error('Error fetching bugs:', error);
    }
  );


  }
}
