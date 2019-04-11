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
import { InsaComponent } from './insa/insa.component';
import { DesertificationComponent } from './desertification/desertification.component';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StripHTMLPipe } from './strip-html.pipe';
import { CommonModule } from '@angular/common';

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
        InsaComponent,
        DesertificationComponent,
        StripHTMLPipe,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        RouterModule.forRoot(router),
        NgxPaginationModule,
        materialModules,
        HttpClientModule,
        CommonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
