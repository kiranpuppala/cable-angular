import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OperatorDashboardComponent } from './components/operator-dashboard/operator-dashboard.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OperatorDashboardComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule, 
    MatCheckboxModule,
    MatToolbarModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule, 
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
