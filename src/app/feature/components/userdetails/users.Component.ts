import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Users } from 'src/app/core/interface/dashboard/dashboard';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UserformComponent } from './modal/userform/userform.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './users.Component.html',
  styleUrls: ['./users.Component.scss'],
})
export class usersComponent implements OnInit {
  products!: Users[];
  @ViewChild('childComponent', { static: false }) childComponent:
    | UserformComponent
    | undefined;

  cols!: any[];
  role!: string;
  constructor(public api: ApiService, public common: CommonService) {}
  ngOnInit(): void {
    this.api.userdata();
    this.api.data.subscribe((res) => {
      this.products = res;
    });
    this.role = JSON.parse(localStorage.getItem('credential')!)[1];

    this.cols = [
      { field: 'firstname', header: 'firstname' },
      { field: 'lastname', header: 'lastname' },
      { field: 'gender', header: 'gender' },
      { field: 'email', header: 'email' },
      { field: 'address', header: 'address' },
      { field: 'role', header: 'role' },
    ];
  }
  modalopen() {
    this.common.modalf();
    this.childComponent?.resetform();
  }
  update(i: object){
    this.childComponent?.updateuser(i);
  }
  delete(i: number) {
    this.api.deleteUser(i).subscribe((res) => {
      this.api.userdata();
    });
  }
}
