import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';
import { regex } from 'src/app/core/services/regex/regex';
ApiService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private service: ApiService,
    ) {}

  ngOnInit(): void {}

  pswd:boolean = true

  loginform = this.fb.group({
    email:['',[Validators.required,Validators.pattern(regex.email)]],
    password:['',[Validators.required,Validators.pattern(regex.password)]],
  });

  submit() {
    this.service.login(this.loginform.value)
  }
}
