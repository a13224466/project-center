import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainData } from '../data-role/MainData';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    
    constructor() {  }

    @Input()
    mainData: MainData;

    @Output()
    outputMainData: EventEmitter<Object> = new EventEmitter<Object>();;

    ngOnInit() { }

    show(param){
        if(param){
            this.mainData.isShow = false;
        }else{
            this.mainData.isShow = true;
        }
    }

    goto(param){
        switch (param) {
            case 1:
                this.mainData.headerTitle = "聊天机器人";
                break;
            case 2:
                this.mainData.headerTitle = "笑话";
                break;
            default:
                this.mainData.headerTitle = "";
                break;
        }
        this.outputMainData.emit(this.mainData);
    }

}