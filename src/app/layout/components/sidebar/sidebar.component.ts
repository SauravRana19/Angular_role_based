import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonService } from 'src/app/core/services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private service: CommonService, private router: Router) {}

  leftsidebar: any;
  rightsidebar: any;

  items!: MenuItem[];
  userinfo: string = JSON.parse(localStorage.getItem('credential')!)[2];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-users',
        command: () => {
          this.router.navigate(['main/dashboard']);
          this.leftsidebar = false;
          // this.changetitle('Users')
        },
      },
      {
        label: 'TaskManager',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.router.navigate(['main/taskview']);
          this.leftsidebar = false;
        },
      },
      {
        label: 'TaskBoard',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.router.navigate(['main/taskboard']);
          this.leftsidebar = false;
        },
      },
    ];

    this.service.leftsidebar.subscribe((res) => {
      this.leftsidebar = res;
    });

    this.service.rightsidebar.subscribe((res) => {
      console.log(res);

      this.rightsidebar = res;
    });
  }
}
