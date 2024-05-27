import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from '../../../components/auth-form/auth-form.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isRegister = data["isRegister"];
    })
  }

  auth(authForm: FormGroup) {
    console.log(authForm.get('username')!.invalid);
  }
}
