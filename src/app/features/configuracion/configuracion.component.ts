import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  protected readonly toastService = inject(ToastService);

  configRules = {
    sessionTimeout: 15,
    minPasswordLength: 12,
    requireSpecialChar: true,
    requireNumbers: true,
    twoFactorAuth: true
  };

  showToast(text: string, type: 'success' | 'error' | 'warning' | 'info') {
    this.toastService.show(text, type);
  }
}
