import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styles: []
})
export class DeletePatientComponent {

  patientId: string;

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');
    });
  }

  deletePatient() {
    if (confirm('¿Estás seguro de que deseas eliminar a este paciente?')) {
      this.patientService.deletePatient(this.patientId).subscribe(
        (data) => {
          console.log('Paciente eliminado con éxito', data);
          this.router.navigate(['/dashbor']);
        },
        (error) => {
          console.error('Error al eliminar al paciente', error);
        }
      );
    }
  }
}
