import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesService } from '../../core/services/cases.service';

@Component({
  selector: 'app-victimas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './victimas.component.html',
  styleUrl: './victimas.component.scss'
})
export class VictimasComponent {
  protected readonly casesService = inject(CasesService);
}
