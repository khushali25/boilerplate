import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerViewComponent } from "./customer-view/customer-view.component";
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer-routing.module";

@NgModule({
  declarations: [CustomerViewComponent, CustomerComponent],
  imports: [CommonModule, CustomerRoutingModule],
  exports: [],
  providers: [],
})
export class CustomerModule {}
