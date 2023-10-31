import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: ApiService) {}
  data: any = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.api.userdata();
    this.api.response.subscribe((res) => {
      this.data.push(res.length);
      let admin: any = [];
      let users: any = [];
      let viewer: any = [];
      let male: any = [];
      let female: any = [];
      res.filter((user: any) => {
        switch (user.role) {
          case 'admin':
            admin.push(user);
            break;
          case 'user':
            users.push(user);
            break;
          case 'viewer':
            viewer.push(user);
            break;
        }
        switch (user.gender) {
          case 'Male':
            male.push(user);
            break;
          default:
            female.push(user);
        }
      });
      this.data.push(admin.length);
      this.data.push(users.length);
      this.data.push(viewer.length);
      this.data.push(male.length);
      this.data.push(female.length);
      this.loading = true;
      console.log(this.data);
    });
  }
}
