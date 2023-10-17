import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { TaskformComponent } from './modal/taskform/taskform.component';
ApiService;

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss'],
})
export class TaskviewComponent implements OnInit {
  @ViewChild('taskComponent', { static: false })
  childComponent!: TaskformComponent;

  tasks!: any[];
  constructor(private api: ApiService, public common: CommonService) {}
  cols!: any[];


  ngOnInit(): void {
    this.cols = [
      { field: 'task', header: 'Task' },
      { field: 'assignto', header: 'Assignto' },
      { field: 'status', header: 'Status' },
    ];
    this.api.taskData();
    this.api.taskdata.subscribe((res) => {
      this.tasks = res;
    });

  }
  taskopen() {
    this.childComponent?.modalopen();
  }
  delete(id:number){
    this.api.deletetask(id).subscribe((res)=>{
      this.api.taskData()
    })
  }
}
