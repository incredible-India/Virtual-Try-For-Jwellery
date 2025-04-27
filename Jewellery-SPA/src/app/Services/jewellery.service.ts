import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jewellery } from "../../models/jewellery.model";
@Injectable({
    providedIn: 'root' ,
  })
export class JewelleryClient {

    private baseUrl = "http://localhost:4900";
    constructor(private http: HttpClient) {
    
        
    }

    getAllJewelleries(): Observable<Jewellery[]>{
        const targetUrl = `${this.baseUrl}/admin/getproducts`;
        return this.http.get<Jewellery[]>(targetUrl);
    }
}
