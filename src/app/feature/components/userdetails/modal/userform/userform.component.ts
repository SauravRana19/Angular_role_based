import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { regex } from 'src/app/core/services/regex/regex';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  constructor(
    private common: CommonService,
    private api: ApiService,
    private fb: FormBuilder
  ) {}
  display: any;
  pswd: boolean = true;
  submitbtn: boolean = true;
  profileupdate:boolean = false

  gender = [{ value: 'Male' }, { value: 'Female' }, { value: 'Other' }];
  role = [{ value: 'admin' }, { value: 'user' }, { value: 'viewer' }];

  userform = this.fb.group({
    id: ['', []],
    firstname: ['', [Validators.required, Validators.pattern(regex.name)]],
    lastname: ['', [Validators.required, Validators.pattern(regex.name)]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(regex.email)]],
    password: ['', [Validators.required, Validators.pattern(regex.password)]],
    role: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern(regex.address)]],
    createdby: [''],
  });

  ngOnInit(): void {
    this.common.modal.subscribe((res) => {
      this.display = res;
    });
    this.changestatus(JSON.parse(localStorage.getItem('credential')!)[1]);
  }
  updateuser(i: number) {
    this.display = true;
    this.api.userdata();
    this.submitbtn = false;
    this.api.data.subscribe((res: any) => {
      let data = res[i];
      this.userform.patchValue({
        ...data,
      });
    });
  }
  resetform() {
    this.userform.reset();
  }
  closeform() {
    this.submitbtn = true;
    this.common.modalvalue.next(false);
    
  }

  showDialog() {}
  submit() {
    this.display = false;
    this.userform.patchValue({
      createdby: JSON.parse(localStorage.getItem('credential')!)[0],
    });
    if (this.submitbtn) {
      this.api.addUser(this.userform.value).subscribe((res) => {});
    } else if (!this.submitbtn) {
      this.api.updateUser(this.userform.value).subscribe((res) => {
        if(this.profileupdate){
          this.api.userprofile(JSON.parse(localStorage.getItem('credential')!)[0])
        }
      });
    }
  }
  changestatus(value: string) {
    // console.log('value', value);
    if (value == 'user') {
      this.role = [{ value: 'user' }, { value: 'viewer' }];
    } else if (value == 'viewer') {
      this.role = [{ value: 'viewer' }];
    }
  }
  editprofile(i:number){
    console.log('click', i);
    this.display = true;
    this.api.userprofile(i)
    this.submitbtn = false;
    this.profileupdate = true;
    this.api.profiledata.subscribe((res: any) => {
      let data = res;
      this.userform.patchValue({
        ...data,
      });
    });
  }
}
