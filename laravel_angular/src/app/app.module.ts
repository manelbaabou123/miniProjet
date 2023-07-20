import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SearchPipe } from './search.pipe';

const appRoutes: Routes = [

  { path: '', component:ProduitsComponent},
  { path: 'edit/:id', component:ProduitEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NavbarComponent,
    ProduitEditComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
