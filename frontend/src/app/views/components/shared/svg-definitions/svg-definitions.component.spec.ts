import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDefinitionsComponent } from './svg-definitions.component';

describe('SvgDefinitionsComponent', () => {
  let component: SvgDefinitionsComponent;
  let fixture: ComponentFixture<SvgDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDefinitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
