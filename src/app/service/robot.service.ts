import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Jsonp, Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import '../rxjs-extensions';

@Injectable()
export class RobotService {

    constructor(private http:Http, private jsonp:Jsonp) { }

    robot(param): Observable<any>{
        let headers = new Headers();
        headers.append("Content-Type","application/json");
        // headers.append("Content-Type","application/x-www-form-urlencoded");
        let options = new RequestOptions({ headers: headers });
        // let headers = new Headers({'Accept': 'application/json'});
        // let params = new URLSearchParams();
        // params.set('callback', 'JSONP_CALLBACK');
        let url = 'http://192.168.1.111:8080/myResume/robot/getOne'; //?callback=callback&info=%E7%AC%91%E8%AF%9D
        let datas = {
            info: param
        };
        return this.http.post(url, JSON.stringify(datas), options)
            .map(resp => resp.json());
    }

    
}