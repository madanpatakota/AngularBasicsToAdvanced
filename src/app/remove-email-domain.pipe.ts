import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmailDomain'
})

export class RemoveEmailDomainPipe 
implements PipeTransform {
  // shortDate'	'M/d/yy'	6/15/15 
  //hr@techmahindra.com
  transform(value: unknown): unknown {
    console.log(value); //hr@techmahindra.com
    
    let inputValue = value as string;
    
    
    let ouput = inputValue.split("@")[0]
    
    return ouput;
  }

}
