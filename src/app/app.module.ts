import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {PartnersComponent} from './partners/partners.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import { InsaComponent } from './insa/insa.component';
import { DesertificationComponent } from './desertification/desertification.component';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StripHTMLPipe } from './strip-html.pipe';

const materialModules = [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ];

const router: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projeto', component: AboutComponent},
    {path: 'parceiros', component: PartnersComponent},
    {path: 'equipe', component: TeamComponent},
    {path: 'noticias', component: NewsComponent},
    {path: 'insa', component: InsaComponent},
    {path: 'desertificacao', component: DesertificationComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PartnersComponent,
        AboutComponent,
        TeamComponent,
        HomeComponent,
        NewsComponent,
        InsaComponent,
        DesertificationComponent,
        StripHTMLPipe
    ],
    imports: [
        RouterModule,
        BrowserModule,
        RouterModule.forRoot(router),
        NgxPaginationModule,
        materialModules,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
