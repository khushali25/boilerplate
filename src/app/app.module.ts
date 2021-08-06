import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpService } from "./service/http.service";
import {
  RequestCache,
  RequestCacheWithMap,
} from "./service/request-cache.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { Page404Component } from "./page/page404/page404.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { CachingInterceptor } from "./interceptor/cache.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    HttpService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
