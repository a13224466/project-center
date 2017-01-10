import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CenterService } from './service/center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CenterService]
})
export class AppComponent implements OnInit {
  constructor(private center:CenterService){  }

  items: any;

  ngOnInit(){
    this.getData();
  }
  
  getData(){
    this.center.heihei().subscribe(items => this.items = items.data);
  }
  title = 'app works!';
  // items = this.center.heihei();

}