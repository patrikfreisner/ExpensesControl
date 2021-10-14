import { Injectable } from '@angular/core';
import { CognitoIdentityProvider } from 'aws-sdk/clients/cognitoidentity';
declare let AWS: any;

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() {
    AWS.config.region(""); 
  }


}
