import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from '../../../components/auth-form/auth-form.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister!: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isRegister = data["isRegister"];
    })
  }

  auth(authForm: FormGroup) {
    if(this.isRegister) {
      this.authService.register({
        username: authForm.get('username')?.value,
        password: authForm.get('password')?.value,
        confirm_password: authForm.get('confirm_password')?.value
      });
    }
      
  }
}
