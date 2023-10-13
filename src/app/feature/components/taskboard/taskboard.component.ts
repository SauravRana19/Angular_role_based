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
    // this.assignvalues();
    this.fetchTasks();
  }
  ngAfterViewInit() {}
  cards: any = [
    {
      title: 'Task',
      task: [],
    },
    {
      title: 'Progress',
      task: [],
    },
    // {
    //   title: 'Review',
    //   task: [],
    // },
    {
      title: 'todo',
      task: [],
    },
  ];

  tasks: any = {};
  dragid!: number;
  dragstatus!: any;
  loading = false;
  draggedProduct: any;
  availableProducts: any;
  selectedProducts: any;

  dragStart(dragitem: any) {
    console.log("drag",dragitem);

    this.dragid = dragitem.id;
    this.dragstatus = dragitem.status;
  }
  dragEnd(item: any) {
    this.dragstatus = item.status;
    console.log('end', this.dragid, this.dragstatus);
    this.api.updatetask(this.dragid, this.dragstatus).subscribe((res) => {
      console.log('res', res);
    });
    this.fetchTasks();
  }
  // findIndex(product: any) {
  //   let index = -1;
  //   for (let i = 0; i < this.availableProducts.length; i++) {
  //     if (product.id === this.availableProducts[i].id) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   return index;
  // }
  drop(item: any) {
    console.log("");
    
    this.dragEnd(item);
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
    });
  }
}
