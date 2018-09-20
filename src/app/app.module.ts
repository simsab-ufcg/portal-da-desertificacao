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

const router: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'team', component: TeamComponent},
    {path: 'news', component: NewsComponent}
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
        NewsComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        RouterModule.forRoot(router),
        NgxPaginationModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
