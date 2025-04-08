import { Component } from '@angular/core';
import { AzuredataComponent } from './azuredata/azuredata.component';
import { NuminputComponent } from './numinput/numinput.component';

@Component({
  selector: 'app-root',
  imports: [AzuredataComponent, NuminputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'azure-web-demo';
}
