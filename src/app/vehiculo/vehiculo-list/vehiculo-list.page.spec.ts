import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListPage } from './vehiculo-list.page';

describe('VehiculoListPage', () => {
  let component: VehiculoListPage;
  let fixture: ComponentFixture<VehiculoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
