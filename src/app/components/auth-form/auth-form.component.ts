import { Component, input, OnInit, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements OnInit {
  
  isRegister = input<boolean>(false);
  formOutput = output<FormGroup>();

  authForm = new FormGroup({
    username: new FormControl({value: '', disabled: false}, [Validators.required]),
    password: new FormControl({value: '', disabled: false}, [Validators.required, Validators.maxLength(40)]),
    confirm_password: new FormControl({value: '', disabled: false}, [Validators.required, Validators.maxLength(40)]),
  })

  ngOnInit(): void {
    if (!this.isRegister()) {
      this.authForm.get("confirm_password")?.disable()
    }
      
  }
}
