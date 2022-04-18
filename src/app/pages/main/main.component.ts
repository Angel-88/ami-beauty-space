import {Component, OnInit} from '@angular/core';
import {ClientDto} from "../../rest/clients/client.dto";
import {ClientsService} from "../../rest/clients/clients.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RecordDialogComponent} from "../../shared/components/record-dialog/record-dialog.component";
import {MastersService} from "../../rest/masters/masters.service";
import {MasterDto} from "../../rest/masters/master.dto";
import { CategoriesService } from 'src/app/rest/categories/categories.service';
import {CategoryDto} from "../../rest/categories/category.dto";
import {ServicesService} from "../../rest/services/services.service";
import {ServiceDto} from "../../rest/services/service.dto";
import { SchedulesService } from 'src/app/rest/schedules/schedules.service';
import {ScheduleDto} from "../../rest/schedules/schedule.dto";
import * as moment from "moment";

@Component({
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
  providers: [
    ClientsService,
    MastersService,
    CategoriesService,
    ServicesService,
    SchedulesService,
  ],
})

export class MainComponent implements OnInit {

  activeServiceTab: 'nail' | 'hair' | 'make-up' = 'nail';
  clients: ClientDto[] = [];
  masters: MasterDto[] = [];
  categories: CategoryDto[] = [];
  services: ServiceDto[] = [];
  schedules: ScheduleDto[] = [];

  constructor(
    private clientService: ClientsService,
    private dialog: MatDialog,
    private mastersService: MastersService,
    private categoriesService: CategoriesService,
    private servicesService: ServicesService,
    private schedulesService: SchedulesService,
  ) {
  }

  ngOnInit() {
    this.initClients();
    this.initMasters();
    this.initCategories();
    this.initServices();
    this.initSchedules();
  }

  initClients(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.clients.forEach(client => {
        // console.log(client.clientName)
      });
    });
  }

  initMasters(): void {
    this.mastersService.getMasters().subscribe(masters => {
      this.masters = masters;
      this.masters.forEach(master => {
        // console.log(master.masterName)
      });
    });
  }

  initCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.forEach(category => {
        // console.log(category.categoryName)
      });
    });
  }

  initServices(): void {
    this.servicesService.getServices().subscribe(services => {
      this.services = services;
      this.services.forEach(service => {
        // console.log(service.serviceName)
      });
    });
  }

  initSchedules(): void {
    this.schedulesService.getSchedules().subscribe(schedules => {
      this.schedules = schedules;
      this.schedules.forEach(schedule => {
        // console.log('she', schedule)
        // console.log(schedule.scheduleName)
      });
    });
  }


  openRecordDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '50%';
    dialogConfig.data = {
      masters: this.masters,
      categories: this.categories,
      services: this.services,
      schedules: this.schedules,
    };
    this.dialog.open(RecordDialogComponent, dialogConfig).afterClosed().subscribe(res => {
      console.log(res);
      const date = moment().format('YYYY-MM-DD');

      console.log(date);
    })
  }
}
