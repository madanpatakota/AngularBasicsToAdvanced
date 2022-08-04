import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimEmail'
})
export class TrimEmailPipe implements PipeTransform {

  // Emails:'gmail.com'
  transform(value:unknown , domain:unknown): any {
    //value = Emails
    let emailNames = value as string[];
    let outputEmails:any = [];
    emailNames.forEach((email)=>{
      if(email.split("@")[1] == domain){
         email = email.split("@")[0];
      }
      outputEmails.push(email);
    })
    return outputEmails;
  }

}
