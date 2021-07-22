import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCredential} from "../models/models";
import {CredentialsService} from "../services/credentials.service";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor{

  constructor(private credentialService: CredentialsService) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone( {
      setHeaders : {
        'x-rapidapi-key': this.credentialService.getRapidAPiKey(),
        'x-rapidapi-host': this.credentialService.getRapidAPIHost()
      },
      setParams: {
        key: this.credentialService.getRawGamesKey()
      }
    });
    return next.handle(req);
  }

}
