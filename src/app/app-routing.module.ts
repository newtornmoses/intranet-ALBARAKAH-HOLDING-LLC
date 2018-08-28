import { DownloadsComponent } from './downloads/downloads.component';
import { TelephoneDirComponent } from './telephone-dir/telephone-dir.component';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GallaryComponent} from './gallary/gallary.component';
import {TakreemComponent} from './takreem/takreem.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {MyAccountComponent} from './my-account/my-account.component';

const routes: Routes = [
  {path: '' , component: HomeComponent, pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'takreem' , component: TakreemComponent},
  {path: 'document_automation' , component: DocumentationComponent},
  {path: 'information_technology', component: InformationTechnologyComponent},
  {path: 'user_account', component: MyAccountComponent},
  {path: 'downloads', component: DownloadsComponent},
  {path: 'telephoneDir', component: TelephoneDirComponent},


];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
