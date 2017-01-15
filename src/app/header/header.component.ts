import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { MainData } from '../data-role/MainData';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private location:Location) { }

    ngOnInit() { }

    @Input()
    mainData:MainData;

    goBack(){
        this.location.back();
    }
}