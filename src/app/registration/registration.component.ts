import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  genders = ['male', 'female'];

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'age': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    this.initTest() ;
  }

  initTest() {
    this.http.get("http://localhost:3000/test").subscribe(response => {
      console.log(response);
    });
  }

}
