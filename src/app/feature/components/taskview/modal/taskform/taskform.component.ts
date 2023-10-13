import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { regex } from 'src/app/core/services/regex/regex';
import { ApiService } from 'src/app/core/services/api/api.service';
ApiService;
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss'],
})
export class TaskformComponent implements OnInit {
  displays: any;

  constructor(
    public common: CommonService,
    private fb: FormBuilder,
    private api: ApiService
  ) {}
  taskform = this.fb.group({
    id: [''],
    task: ['', [Validators.required]],
    status: ['', [Validators.required]],
    assignto: ['', [Validators.required]],
    assignby: ['', [Validators.required]],
    createdby: [''],
  });

  users: any;
  status = [
    {
      value: 'todo',
    },
    {
      value: 'pending',
    },
    {
      value: 'done',
    },
  ];

  ngOnInit(): void {
    this.api.userdata();
    this.api.data.subscribe((res: any) => {
      let data = res.map(({ email }: any) => ({ value: email }));
      this.users = data;
    });
  }
  closeform() {
    this.displays = false;
  }
  modalopen() {
    this.displays = true;
  }
  submit() {
    this.displays = false;
    this.taskform.patchValue({
      createdby: JSON.parse(localStorage.getItem('credential')!)[0],
    });
    this.api.addTask(this.taskform.value).subscribe((res) => {
      this.api.taskData();
    });
    this.taskform.reset();
  }
}
