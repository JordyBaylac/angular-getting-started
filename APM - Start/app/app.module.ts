import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent},
    ])
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
   ],
  //  providers: [ProductDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
