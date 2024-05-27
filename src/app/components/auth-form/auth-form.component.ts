import { Component, input, OnInit, output} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements OnInit {
  
  isRegister = input<boolean>(false);
  errors = input<string[]>([]);
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
