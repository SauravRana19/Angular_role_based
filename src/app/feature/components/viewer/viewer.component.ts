import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { UserformComponent } from '../userdetails/modal/userform/userform.component';
ApiService;

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  constructor(private api: ApiService) {}
  @ViewChild('childComponent', { static: false }) childComponent:
  | UserformComponent
  | undefined;

  profile:any = [];

  ngOnInit(): void {
    this.api.userprofile(JSON.parse(localStorage.getItem('credential')!)[0]);
    this.api.profiledata.subscribe((res) => {
      this.profile = res;
    });
  }
  edit(data:object){
    this.childComponent?.editprofile(data)
  }
  
}
