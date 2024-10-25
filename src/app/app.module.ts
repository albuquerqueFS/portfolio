import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { PageComponent } from './pages/page/page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardComponent } from './components/projects/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialsComponent } from './components/socials/socials.component';
import { BlogComponent } from './components/blog/blog.component';
import { BigCardComponent } from './components/projects/big-card/big-card.component';
import { TechsComponent } from './components/techs/techs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageComponent,
    ProjectsComponent,
    CardComponent,
    SocialsComponent,
    BlogComponent,
    BigCardComponent,
    TechsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
