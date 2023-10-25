import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styles: []
})
export class ModifyPatientComponent implements OnInit {
  patientId: string;
  patient: any = {}; // Variable para almacenar los detalles del paciente
  newMedicalHistory: string = ''; // Variable para rastrear el nuevo historial médico
  newAlergias: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    // Obtener el ID del paciente desde la ruta activa
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get('id') || '';
      // Luego, puedes usar this.patientId para obtener los detalles del paciente
      if (this.patientId) {
        this.getPatientDetails(this.patientId);
      }
    });
  }

  getPatientDetails(patientId: string): void {
    this.patientService.getPatientById(patientId).subscribe(
      (data) => {
        this.patient = data; // Almacena los detalles del paciente en la variable
      },
      (error) => {
        console.error('Error al obtener los detalles del paciente', error);
      }
    );
  }

  addMedicalHistory(): void {
    if (this.newMedicalHistory) {
      // Asegura que this.patient.history sea un arreglo
      if (!Array.isArray(this.patient.history)) {
        this.patient.history = [];
      }

      // Agregar el nuevo historial médico al arreglo del paciente
      this.patient.history.push(this.newMedicalHistory);

      // Limpia el campo de entrada después de agregar el nuevo historial
      this.newMedicalHistory = '';
    }
  }

  addAlergias(): void {
    if (this.newAlergias) {
      // Asegura que this.patient.history sea un arreglo
      if (!Array.isArray(this.patient.allergies)) {
        this.patient.allergies = [];
      }

      // Agregar el nuevo historial médico al arreglo del paciente
      this.patient.allergies.push(this.newAlergias);

      // Limpia el campo de entrada después de agregar el nuevo historial
      this.newAlergias = '';
    }
  }


  updatePatient(): void {
    // Aquí debes enviar los cambios en this.patient al servicio para actualizar al paciente
    this.patientService.updatePatient(this.patientId, this.patient).subscribe(
      (data) => {
        console.log('Paciente actualizado con éxito', data);
        // Redirige a la página de detalles del paciente
        this.router.navigate(['/patient-profile', this.patientId]);
      },
      (error) => {
        console.error('Error al actualizar al paciente', error);
      }
    );
  }
}
