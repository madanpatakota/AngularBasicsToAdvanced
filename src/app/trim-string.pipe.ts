import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]):any {
    
    let data = value as string[];
    let outputEmails:any = [];
    data.forEach((email)=>{
      let x = email.split('@');
        if(x[0].length> 5){
          email = email.split('@')[0].slice(0,5)+"...@" + email.split('@')[1];
        }
        outputEmails.push(email);
    })

     return outputEmails;
  }

}
