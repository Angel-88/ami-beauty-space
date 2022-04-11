import {Component, OnInit} from '@angular/core';
import {ClientDto} from "../../rest/clients/client.dto";
import {ClientsService} from "../../rest/clients/clients.service";
import {MatDialog} from "@angular/material/dialog";
import {RecordDialogComponent} from "../../shared/components/record-dialog/record-dialog.component";

@Component({
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
  providers: [ClientsService],
})

export class MainComponent implements OnInit {

  activeServiceTab: 'nail' | 'hair' | 'make-up' = 'nail';
  clients: ClientDto[] = [];

  constructor(
    private clientService: ClientsService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.initClients();
  }

  initClients(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.clients.forEach(client => {
        console.log(client.clientName)
      });
    });
  }

  openRecordDialog() :void {
    this.dialog.open(RecordDialogComponent,{
      width: '50%',
    }).afterClosed().subscribe(res => {
      console.log(res)
    })
  }
}
