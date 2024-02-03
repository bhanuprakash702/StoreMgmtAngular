import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class GroupService {
  URL: any ="https://localhost:7017/api/Groups/"
    constructor(private http : HttpClient){
        
    }

    getGroups = () : Observable<any> => {
        return this.http.get(this.URL);
    }

}