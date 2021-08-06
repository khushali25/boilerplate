import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Lobby } from "../../../interface/lobby.interface";
import { LobbyService } from "../../../service/lobby.service";

@Component({
  selector: "app-lobby-view",
  templateUrl: "./lobby-view.component.html",
  styleUrls: ["./lobby-view.component.scss"],
})
export class LobbyViewComponent implements OnInit {
  constructor(
    private lobbyService: LobbyService,
    private route: ActivatedRoute
  ) {}
  LobbyId: number | string;
  lobby: Lobby;
  ngOnInit() {
    this.LobbyId = this.route.snapshot.paramMap.get("id");
    this.getLobby(this.LobbyId);
  }
  getLobby(lobbyId: number | string) {
    this.lobbyService.getLobby(lobbyId).then((lobby: any) => {
      this.lobby = lobby[0];
    });
  }
}
