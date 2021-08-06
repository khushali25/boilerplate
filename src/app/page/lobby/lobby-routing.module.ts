//leaves-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LobbyComponent } from "./lobby.component";
import { LobbyViewComponent } from "./lobby-view/lobby-view.component";
import { LobbyListComponent } from "./lobby-list/lobby-list.component";

const routes: Routes = [
  {
    path: "",
    component: LobbyComponent,
    children: [
      {
        path: "view/:id",
        component: LobbyViewComponent,
      },
      {
        path: "list",
        component: LobbyListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobbyRoutingModule {}
