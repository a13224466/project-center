import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CenterService } from './service/center.service';

export class MainData {
  isShow:boolean;
  headerTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CenterService],
  // inputs:[],
  // outputs: ['isShow'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private center:CenterService){  }

  items: any;

  mainData: MainData = {
      isShow : false,
      headerTitle : "聊天机器人",
  };

  ngOnInit(){
    this.getData();
  }
  
  getData(){
    this.center.heihei().subscribe(items => this.items = items.data);
  }
  
  outData(mainData){
    this.mainData = mainData;
  }

  ngOnDestroy(){
    console.log("1111111111");
  }
}