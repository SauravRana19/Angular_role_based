import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
})
export class TaskboardComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.fetchTasks();
  }

  tasks: any = {};
  dragid!: number;
  dragstatus!: string;
  loading: boolean = false;
  bloacker: boolean = false;

  dragStart(dragitem: any) {
    console.log('drag', dragitem);

    this.dragid = dragitem.id;
    this.dragstatus = dragitem.status;
  }
  drop(item: any) {
    console.log('drop', item);
    this.bloacker = true;
    this.api.updatetask(this.dragid, item).subscribe((res) => {
      console.log('res', res);
      this.fetchTasks();
    });
  }

  filterTask(status: string, tasks: any): any[] {
    return tasks.filter((task: any) => {
      if (task.status === status) return task;
    });
  }

  fetchTasks() {
    this.api.taskData();
    this.loading = true;

    this.api.taskdata.subscribe((res) => {
      this.loading = false;

      this.tasks = {
        todo: this.filterTask('todo', res),
        pending: this.filterTask('pending', res),
        done: this.filterTask('done', res),
      };
      if (res.length) {
        this.bloacker = false;
      }
    });
  }
}
