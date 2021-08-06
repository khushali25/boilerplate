import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { Page404Component } from "./page/page404/page404.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "customer",
    loadChildren: () =>
      import(`./page/customer/customer.module`).then((m) => m.CustomerModule),
  },
  {
    path: "lobby",
    loadChildren: () =>
      import(`./page/lobby/lobby.module`).then((m) => m.LobbyModule),
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
