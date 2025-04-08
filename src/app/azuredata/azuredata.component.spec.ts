import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuredataComponent } from './azuredata.component';

describe('AzuredataComponent', () => {
  let component: AzuredataComponent;
  let fixture: ComponentFixture<AzuredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzuredataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzuredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
