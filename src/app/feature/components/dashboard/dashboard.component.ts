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
  loading:boolean = false
  ngOnInit(): void {
    this.api.userdata();
    this.api.response.subscribe((res) => {
      console.log(res);
      this.data.push(res.length);
      let admin: any = [];
      let users: any = [];
      let viewer: any = [];
      let male: any = [];
      let female: any = [];
      res.filter((user: any) => {
        if (user.role == 'admin') {
          return admin.push(user);
        }
        if (user.role == 'user') {
          return users.push(user);
        }
        if (user.role == 'viewer') {
          return viewer.push(user);
        }
      });

      res.filter((user: any) => {
        if (user.gender == 'Male') {
          return male.push(user);
        }
        if (user.gender == 'Female') {
          return female.push(user);
        }
      });
      this.data.push(admin.length);
      this.data.push(users.length);
      this.data.push(viewer.length);
      this.data.push(male.length);
      this.data.push(female.length);
      this.loading = true
      console.log(this.data);
    });
  }
}
