import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { CommonService } from 'src/app/core/services/common/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: CommonService, private router: Router,private toaster:ToastrService ) {}
  items!: MenuItem[];
  loginuser: string = '';
  title: string = '';
  ngOnInit(): void {
    this.items = [
      {
        label: 'Info',
        icon: 'pi pi-info-circle',
        command: () => {
          this.userinfo();
        },
      },
      {
        label: 'Setting',
        icon: 'pi pi-cog',
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
    this.title = this.service.pagetitle;
    this.loginuser = JSON.parse(localStorage.getItem('credential') || '[]')[1];
  }
  toggle() {
    this.service.lefttoggle();
  }
  logout() {
    localStorage.removeItem('credential');
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this.toaster.success('Logout Successful', '', {
      positionClass: 'toast-top-center',
      progressBar: true,
    });
  }
  userinfo() {
    this.service.righttoggle()
  }
}
