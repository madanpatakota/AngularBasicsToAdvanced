import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoveEmailDomainPipe } from './remove-email-domain.pipe';
import { TrimEmailPipe } from './trim-email.pipe';
import { TrimStringPipe } from './trim-string.pipe';
import { DirDemoFirstComponent } from './dir-demo-first/dir-demo-first.component';
import { FirstDirective } from './first.directive';
import { SecondDirective } from './second.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemoveEmailDomainPipe,
    TrimEmailPipe,
    TrimStringPipe,
    DirDemoFirstComponent,
    FirstDirective,
    SecondDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
