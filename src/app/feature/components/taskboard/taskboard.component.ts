import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
})
export class TaskboardComponent implements OnInit {
  constructor(private api: ApiService) {}
  // priortyColor:any  = {low:"#1f62de",medium:"#1fde8b",high:"#de2c1f"}
  loading!: boolean;
  cards: any = [
    { title: 'todo', task: [], color: '#295bac' },
    { title: 'pending', task: [], color: '#eab308' },
    { title: 'done', task: [], color: '#188a42' },
  ];

  draggitem: any = [];

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.api.taskData();
    this.api.taskdata.subscribe((res) => {
      console.log(res);

      res.filter((item: any) => {
        if (item.status == 'pending') {
          return this.cards[1].task.push(item);
        }
        if (item.status == 'todo') {
          return this.cards[0].task.push(item);
        }
        if (item.status == 'done') {
          return this.cards[2].task.push(item);
        }
      });
    });
  }

  dragStart(dragitem: any, i: number, j: number) {
    this.draggitem.push(dragitem, i, j);
  }
  drop(data: any, i: number) {
    this.cards[i].task.push(this.draggitem[0]);
    this.cards[this.draggitem[1]].task.splice(this.draggitem[2], 1);
    this.api.updatetask(this.draggitem[0].id, data.title).subscribe()
    this.draggitem = [];
  }
  dragEnd() {}
}
