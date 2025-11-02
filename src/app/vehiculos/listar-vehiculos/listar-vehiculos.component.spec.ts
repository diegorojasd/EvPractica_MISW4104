/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  const mockVehiculosService = [
    { id: 1, marca: 'Nissan', modelo: 'Sentra', anio: 2020 },
    { id: 2, marca: 'Chevrolet', modelo: 'Sail', anio: 2019 },
    { id: 3, marca: 'Renault', modelo: 'Logan', anio: 2021 }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVehiculosComponent],
      providers: [
        {
          provide: VehiculosService,
          useValue: {
            getVehiculos: () => of(mockVehiculosService)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with three vehicles and the header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);

    const headerRow = fixture.nativeElement.querySelectorAll('thead tr');
    expect(headerRow.length).toBe(1);
  });
});
