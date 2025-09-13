import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, private _loginService: LoginService,private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // 🔐 Hash password with SHA-256
    this.sha256(password).then(hashedPassword => {
      this._loginService.loginUser({
        username: username,
        password: hashedPassword
      }).subscribe({
        next: (res) => {
          console.log('Login successful', res);
          localStorage.setItem('token',res.access_token);
          this._router.navigateByUrl('/home');
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          console.error('Login failed', err)
        }
      });
    });
  }

  // ✅ SHA-256 method INSIDE the class
  async sha256(message: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}
