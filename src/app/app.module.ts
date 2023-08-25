import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinFormatPipe } from './pipe/sin-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SelectLanguageComponent,
    UserInfoFormComponent,
    AppFooterComponent,
    SinFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
