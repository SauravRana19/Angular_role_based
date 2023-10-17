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
          this.router.navigate(['main/users']);
          this.service.leftsidebarvalue.next(false);
        },
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        command: () => {
          this.router.navigate(['main/dashboard']);
          this.service.leftsidebarvalue.next(false);
        },
      },
      {
        label: 'TaskManager',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.router.navigate(['main/taskview']);
          this.service.leftsidebarvalue.next(false);
        },
      },
      {
        label: 'TaskBoard',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.router.navigate(['main/taskboard']);
          this.service.leftsidebarvalue.next(false);
        },
      },
    ];
    this.sidebarmenu(JSON.parse(localStorage.getItem('credential')!)[1]),

    this.service.leftsidebar.subscribe((res) => {
      this.leftsidebar = res;
    });

    this.service.rightsidebar.subscribe((res) => {
   

      this.rightsidebar = res;
    });
  }
  leftclose() {
    this.service.leftsidebarvalue.next(false);
  }
  rightclose() {

    this.service.rightsidebarvalue.next(false);
  }
  sidebarmenu(value: string) {
    if (value == 'viewer') {
      this.items = [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            this.router.navigate(['main/viewer']);
            this.service.leftsidebarvalue.next(false);
          },
        },
        {
          label: 'TaskBoard',
          icon: 'pi pi-calendar-plus',
          command: () => {
            this.router.navigate(['main/taskboard']);
            this.service.leftsidebarvalue.next(false);
          },
        },
      ];
    } else if( value == 'user'){
      this.items = [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            this.router.navigate(['main/viewer']);
            this.service.leftsidebarvalue.next(false);
          },
        },
        {
          label: 'Users',
          icon: 'pi pi-users',
          command: () => {
            this.router.navigate(['main/users']);
            this.service.leftsidebarvalue.next(false);
          },
        },
        {
          label: 'TaskBoard',
          icon: 'pi pi-calendar-plus',
          command: () => {
            this.router.navigate(['main/taskboard']);
            this.service.leftsidebarvalue.next(false);
          },
        },
      ];
    }
  }
}
