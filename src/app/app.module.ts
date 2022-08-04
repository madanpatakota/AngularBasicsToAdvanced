import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoveEmailDomainPipe } from './remove-email-domain.pipe';
import { TrimEmailPipe } from './trim-email.pipe';
import { TrimStringPipe } from './trim-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemoveEmailDomainPipe,
    TrimEmailPipe,
    TrimStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
