import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { UrlService } from './url.service';
import { UrlComponent } from './url/url.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlEffects } from './state/url.effects';
import { urlReducer } from './state/url.reducer';


@NgModule({
  declarations: [
    AppComponent,
    UrlComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({url: urlReducer}),
    EffectsModule.forRoot([UrlEffects]),
    FormsModule,
    HttpClientModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
