import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LobbyViewComponent } from "./lobby-view/lobby-view.component";
import { LobbyComponent } from "./lobby.component";
import { LobbyRoutingModule } from "./lobby-routing.module";
import { LobbyListComponent } from "./lobby-list/lobby-list.component";
import { LobbyService } from "../../service/lobby.service";

@NgModule({
  declarations: [LobbyViewComponent, LobbyComponent, LobbyListComponent],
  imports: [CommonModule, LobbyRoutingModule],
  exports: [],
  providers: [LobbyService],
})
export class LobbyModule {}
