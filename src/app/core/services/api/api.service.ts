import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  usersUrl: string = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private toaster: ToastrService
  ) {}
  token: string = '';
  // credential = JSON.parse(localStorage.getItem('credential')!);

  public response: Subject<any> = new Subject<any>();
  public data: Observable<[]> = this.response.asObservable();

  public profile: Subject<any> = new Subject<any>();
  public profiledata: Observable<[]> = this.profile.asObservable();

  public usertask: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public taskdata: Observable<[]> = this.usertask.asObservable();

  login(data: any) {
    this.http.get<any[]>(this.usersUrl + 'login').subscribe((res) => {
      let result: boolean = false;
      res.find((item: any) => {
        if (item.email == data.email && item.password == data.password) {
          localStorage.setItem(
            'credential',
            JSON.stringify([item.id, item.role, item.firstname])
          );
          result = true;
        }
      });
      if (result) {
        this.token =
          Math.random().toString(36).substring(2) +
          Math.random().toString(36).substring(2);
        localStorage.setItem('token', this.token);
        this.toaster.success('Login Successful', '', {
          positionClass: 'toast-top-center',
          progressBar: true,
        });

        if (JSON.parse(localStorage.getItem('credential')!)[1] == 'viewer') {
          this.router.navigate(['main/viewer']);
        } else if (
          JSON.parse(localStorage.getItem('credential')!)[1] !== 'viewer'
        ) {
          this.router.navigate(['main/users']);
        }
      } else {
        this.toaster.warning('Wrong Credentials', '', {
          positionClass: 'toast-top-center',
          progressBar: true,
        });
      }
    });
  }
  userdata() {
    this.http.get<any[]>(this.usersUrl + 'login').subscribe((res) => {
      if (JSON.parse(localStorage.getItem('credential')!)[1] == 'superadmin') {
        this.response.next(res);
      } else {
        let users = res.filter((user: any) => {
          if (
            JSON.parse(localStorage.getItem('credential')!)[0] ===
            user.createdby
          ) {
            return user;
          }
        });

        this.response.next(users);
      }
    });
  }
  addUser(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.usersUrl + 'login', data);
  }
  updateUser(data: any): Observable<any[]> {
    return this.http.put<any[]>(this.usersUrl + 'login/' + data.id, data);
  }
  deleteUser(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.usersUrl + 'login/' + id);
  }
  taskData() {
    this.http.get<any[]>(this.usersUrl + 'task').subscribe((res) => {
      if (JSON.parse(localStorage.getItem('credential')!)[1] == 'superadmin') {
        this.usertask.next(res);
      } else {
        let users = res.filter((user: any) => {
          if (
            JSON.parse(localStorage.getItem('credential')!)[0] ===
            user.createdby
          ) {
            return user;
          }
        });
        this.usertask.next(users);
      }
    });
  }
  addTask(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.usersUrl + 'task', data);
  }
  updatetask(key: number, data: any): Observable<any[]> {
    console.log(data);

    return this.http.patch<any[]>(this.usersUrl + 'task/' + key, {
      status: data,
    });
  }
  deletetask(id: number) {
    return this.http.delete<any[]>(this.usersUrl + 'task/' + id);
  }
  userprofile(id: number) {
    this.http.get<any[]>(this.usersUrl + 'login/' + id).subscribe((res) => {
      this.profile.next(res);
    });
  }
}
