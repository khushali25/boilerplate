import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Lobby } from "../../../interface/lobby.interface";
import { LobbyService } from "../../../service/lobby.service";

@Component({
  selector: "app-lobby-list",
  templateUrl: "./lobby-list.component.html",
  styleUrls: ["./lobby-list.component.scss"],
})
export class LobbyListComponent implements OnInit {
  lobbies: Lobby[];
  constructor(private lobbyService: LobbyService, private router: Router) {}

  ngOnInit() {
    this.lobbyService.getLobbies().then((lobbies: any) => {
      this.lobbies = lobbies.data;
      this.lobbies.forEach(
        (lobby) => (lobby.regDeadline = new Date(lobby.regDeadline))
      );
    });
  }
  ViewLobby(id: number) {
    this.router.navigate(["/lobby/view", id]);
  }
}
