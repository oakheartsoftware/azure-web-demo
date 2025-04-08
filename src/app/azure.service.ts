import { Injectable } from '@angular/core';
import { Azurenum } from './azurenum';
import { TableClient, AzureSASCredential } from '@azure/data-tables';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AzureService {
  credential: AzureSASCredential;
  tableClient: TableClient;

  constructor() {
    this.credential = new AzureSASCredential(environment.sas);
    this.tableClient = new TableClient(
      `https://${environment.storageAccountName}.table.core.windows.net`,
      environment.tableName,
      this.credential
    );
  }

  async getAllAzurenum(): Promise<Azurenum[]> {
    let entitiesIter = this.tableClient.listEntities();
    let data: Azurenum[] = [];
    let i = 1;
    for await (let entity of entitiesIter) {
      let castValue: number = Math.floor(Number(entity['someInt']));
      if (!isNaN(castValue)) {
        data.push({ num: castValue });
      }
      console.log(`Entity${i}: PartitionKey:${entity.partitionKey} Num:${castValue}`);
    }

    return data;
  }


  sendToAzure(num: number) {
    console.log(`number received: ${num}`);
  }
}
