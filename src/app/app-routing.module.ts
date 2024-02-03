import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMasterComponent } from './pages/master/group-master/group-master.component';
import { SubGroupMasterComponent } from './pages/master/sub-group-master/sub-group-master.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './pages/main-layout/login/login.component';
import { LayoutComponent } from './pages/main-layout/layout/layout.component';  
import { CustomerComponent } from './pages/users/customer/customer.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:"group",
        component: GroupMasterComponent
      },
      {
        path: "subGroup",
        component: SubGroupMasterComponent
      },
      {
        path:"Customer",
        component: CustomerComponent
      }
    ]
  },
  {
    path:"**",
    component: LoginComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgGridModule
  ],
  exports: [RouterModule, AgGridModule]
})
export class AppRoutingModule { }
