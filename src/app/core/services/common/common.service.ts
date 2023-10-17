import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public leftsidebarvalue: BehaviorSubject<any> = new BehaviorSubject<any>(
    false
  );
  public leftsidebar: Observable<[]> = this.leftsidebarvalue.asObservable();

  public rightsidebarvalue: BehaviorSubject<any> = new BehaviorSubject<any>(
    false
  );
  public rightsidebar: Observable<[]> = this.rightsidebarvalue.asObservable();

  public modalvalue: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public modal: Observable<[]> = this.modalvalue.asObservable();

  public pagetitle = 'admin';

  lefttoggle() {
    this.leftsidebarvalue.next(true);
  }
  righttoggle() {
    this.rightsidebarvalue.next(true);
  }

  modalf() {
    this.modalvalue.next(true);
  }

  constructor() {}
}
