import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor(
    private http: HttpClient
    ) {}

  getRespos(): Observable<any> {
    return this.http.get("http://api.github.com/users/aptsharp/repos");
  }

  getSingleRepo(name: string): Observable<any>{
    return this.http.get('http://api.github.com/repos/aptsharp/${name}');
  }
}
