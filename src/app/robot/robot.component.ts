import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RobotService } from '../service/robot.service';

export class Robot{
    code:number;
    text:string;
}

@Component({
    selector: 'robot',
    templateUrl: './robot.component.html',
    styleUrls: ['./robot.component.css'],
    providers: [RobotService],
})
export class RobotComponent implements OnInit {
    constructor(private robotService:RobotService) {  }//private robotService:RobotService
    // items = [{"code":100000,"text":"欢迎到南方深造喔"}];
    // items = [{a:"a1",b:"b1"},{a:"a1",b:"b1"},{a:"a1",b:"b1"},{a:"a1",b:"b1"},{a:"a1",b:"b1"}]; 
    items:any = [];
    num = [];
    ngOnInit() {

    }
    contextSend(param){
        this.getData(param);
    }
    getData(param){
        this.robotService.robot(param).subscribe(items => {
            this.items.push(items.result);
        });
    }
    ObjectToArray(obj){
        let arr = [];
        this.items.push(obj);
        return arr;
    }
    aaa(){
        console.log(this.items);
    }
}