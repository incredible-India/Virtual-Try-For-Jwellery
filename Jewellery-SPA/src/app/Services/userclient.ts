import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserLogin } from "../../models/user";

@Injectable({
  providedIn: 'root' ,
})
export class UserClient {

  private baseUrl = "http://localhost:4900";

  constructor(private http: HttpClient) {}

  // for the login request
  loginUser(userData: UserLogin): Observable<any> {
    const targetUrl = `${this.baseUrl}/user/login`;
    return this.http.post(targetUrl, userData);
  }
  newUser(user:User):Observable<any>{
    const targetUrl =`${this.baseUrl}/user/newuser`;
    return this.http.post(targetUrl,user)
  }
}
