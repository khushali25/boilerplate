//leaves-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { CustomerViewComponent } from "./customer-view/customer-view.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerComponent,
    children: [
      {
        path: "view",
        component: CustomerViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
