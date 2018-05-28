import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DbService{
  constructor(private httpClient: HttpClient){}

  createApplication(application){
    return this.httpClient.post('http://localhost:3000/applications', application);
  }

}
