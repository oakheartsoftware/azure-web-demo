import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Azurenum } from '../azurenum';
import { AzureService } from '../azure.service';

@Component({
  selector: 'azuredata',
  imports: [MatTableModule],
  templateUrl: './azuredata.component.html',
  styleUrl: './azuredata.component.css'
})
export class AzuredataComponent {
  displayedColumns: string[] = ['num'];
  dataSource: Azurenum[] = [];
  azureService: AzureService = inject(AzureService);

  constructor() {
    this.azureService.getAllAzurenum().then((azureData) => {
      this.dataSource = azureData;
    });
  }
}
