import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Jsonp, Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import '../rxjs-extensions';

@Injectable()
export class CenterService {

    constructor(private http:Http,private jsonp:Jsonp) {  }
    // aaa = new URLSearchParams();
    // headers: Headers = new Headers({ dataType: 'jsonp', jsonpCallback: 'a' });
    // options = new RequestOptions({ headers: this.headers });

    heihei(): Observable<any>{
        let url = 'http://192.168.1.111:8080/myResume/joke/methodOne';
        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        let datas = '';
        return this.jsonp.get(url, { search: params })
            .map(resp => resp.json());
    }
 
}