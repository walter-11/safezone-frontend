import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected readonly authService = inject(AuthService);
  protected readonly toastService = inject(ToastService);

  username = 'recepcion_lima';
  password = 'contrasena123';

  login() {
    if (!this.username || !this.username.trim() || !this.password || !this.password.trim()) {
      this.toastService.show('Por favor, ingrese sus credenciales.', 'error');
      return;
    }
    this.authService.login(this.username);
  }

  showToast(message: string, type: 'success' | 'error' | 'warning' | 'info') {
    this.toastService.show(message, type);
  }
}
