import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ClientDto} from "./client.dto";

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>('http://localhost:8080/api/clients').
      pipe(
        map(clients => clients.map(client => new ClientDto(client))),
    );

  }
}
