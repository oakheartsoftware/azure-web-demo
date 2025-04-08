import { Injectable } from '@angular/core';
import { Azurenum } from './azurenum';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  constructor() { }

  getAllAzurenum(): Azurenum[] {
    return [
      { num: 33 }
    ];
  }

  sendToAzure(num: number) {
    console.log(`number received: ${num}`);
  }
}
