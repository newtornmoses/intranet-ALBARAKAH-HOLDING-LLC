import { MyAccountComponent } from './my-account/my-account.component';
import { ActiveButtonDirective } from './active-button.directive';
import { Telephone } from './telephone_data/telephone';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TelephoneDirComponent } from './telephone-dir/telephone-dir.component';
import { TakreemComponent } from './takreem/takreem.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { EventsComponent } from './events/events.component';
import {MatDatepicker } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ActiveBtnDirective } from './active-btn.directive';
import {APP_BASE_HREF} from '@angular/common';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { IntranetHomeComponent } from './intranet-home/intranet-home.component';
import {CalendarModule} from 'primeng/calendar';
import {CarouselModule} from 'primeng/carousel';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { DocumentsComponent } from './documents/documents.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsComponent } from './news/news.component';
import { TrainingComponent } from './training/training.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    GallaryComponent,
    TelephoneDirComponent,
    TakreemComponent,
    DownloadsComponent,
    SitemapComponent,
    InformationTechnologyComponent,
    EventsComponent,
    FooterComponent,
    DocumentationComponent,
    ActiveBtnDirective,
    ActiveButtonDirective,
    MyAccountComponent,
    IntranetHomeComponent,
    ShopComponentComponent,
    DocumentsComponent,
    ArticlesComponent,
    NewsComponent,
    TrainingComponent,
    HoverDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    CalendarModule,
    CarouselModule






  ],
  providers: [MatDatepicker, ApiService, Telephone,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
