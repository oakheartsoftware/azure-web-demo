import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AzureService } from '../azure.service';

@Component({
  selector: 'app-numinput',
  imports: [ReactiveFormsModule],
  templateUrl: './numinput.component.html',
  styleUrl: './numinput.component.css'
})
export class NuminputComponent {
  azureService = inject(AzureService);

  applyForm = new FormGroup({
    num: new FormControl('', Validators.pattern('[0-9]+'))
  });

  submitApplication() {
    const castValue = Math.floor(Number(this.applyForm.value.num));

    if (!isNaN(castValue)) {
      this.azureService.sendToAzure(castValue);
    }
  }
}
