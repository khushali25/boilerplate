import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Lobby } from "../interface/lobby.interface";

@Injectable()
export class LobbyService {
  constructor(private http: HttpService) {}

  getLobbies(): any {
    return this.http.get("assets/lobby-large.json").then((data) => {
      return data;
    });
  }
  async getLobby(id: number | string): Promise<any> {
    let Lobbies = await this.getLobbies();
    Lobbies = Lobbies.data;
    let LobbyById = Lobbies.filter((lobby: any) => {
      return lobby.id == id;
    });
    if (LobbyById) {
      return LobbyById;
    } else {
      return {};
    }
  }
}
