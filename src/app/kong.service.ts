import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Kong } from "./kong";

@Injectable({
    providedIn: 'root'
})

export class KongService {
    constructor(private http:HttpClient) { }

    getKong(id:number):Observable<Kong>{
        return this.http.get<Kong>("http://localhost:8080/api/list/"+id);
    }
    getKongEmail(email:string):Observable<Kong>{
        return this.http.get<Kong>("http://localhost:8080/api/listM/"+email);
    }
}