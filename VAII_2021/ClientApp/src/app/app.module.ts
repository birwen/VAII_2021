import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { HousesComponent } from './houses/houses.component';
import { ZodiacSignsComponent } from './zodiac-signs/zodiac-signs.component';
import { PlanetsComponent } from './planets/planets.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { BlogComponentFormComponent } from './blog-component/blog-component-form/blog-component-form.component';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HousesComponent,
    ZodiacSignsComponent,
    PlanetsComponent,
    BlogComponentComponent,
    BlogComponentFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'houses', component: HousesComponent, pathMatch: 'full' },
      { path: 'zodiac-signs', component: ZodiacSignsComponent, pathMatch: 'full' },
      { path: 'planets', component: PlanetsComponent, pathMatch: 'full' },
      { path: 'blog', component: BlogComponentComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
