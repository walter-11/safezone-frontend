import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.scss'
})
export class AuditoriaComponent {
  auditLogs = [
    { timestamp: '2026-05-22 01:22:10', user: 'smedina', role: 'Psicólogo', action: 'Modificación de Expediente', ip: '192.168.10.45', detail: 'Se actualizó el estado emocional en el Caso #082-2026.' },
    { timestamp: '2026-05-22 01:15:02', user: 'crojas', role: 'Psicólogo', action: 'Carga de Evidencia', ip: '192.168.10.82', detail: 'Se adjuntó el archivo grabacion_audio_amenaza.mp3.' },
    { timestamp: '2026-05-22 00:45:18', user: 'admin_safezone', role: 'Administrador', action: 'Creación de Usuario', ip: '192.168.1.110', detail: 'Se creó la cuenta del Psicólogo Dr. Manuel Cabrera.' },
    { timestamp: '2026-05-21 23:10:45', user: 'defensor_legal_1', role: 'Defensor Legal', action: 'Asignación de Caso', ip: '192.168.12.18', detail: 'Se asignó patrocinio en el Caso #075-2026.' },
    { timestamp: '2026-05-21 19:40:00', user: 'recepcion_lima', role: 'Recepcionista', action: 'Registro de Denuncia', ip: '192.168.20.104', detail: 'Registro de la denuncia Caso #083-2026.' }
  ];
}
