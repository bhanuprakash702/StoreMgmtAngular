import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupMasterComponent } from './pages/master/group-master/group-master.component';
import {MatTableModule,MatTableDataSourcePaginator} from '@angular/material/table';
import { SubGroupMasterComponent } from './pages/master/sub-group-master/sub-group-master.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './pages/main-layout/login/login.component';
import { LayoutComponent } from './pages/main-layout/layout/layout.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './pages/users/customer/customer.component';
import {MatPaginatorModule } from  '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GroupMasterComponent,
    SubGroupMasterComponent,
    LoginComponent,
    LayoutComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
