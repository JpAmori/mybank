import { ComponentFixture, TestBed } from '@angular/core/testing';
import { consultarContaComponent } from './consultarConta.component';


describe('ConsultaConta', () => {
  let component: consultarContaComponent;
  let fixture: ComponentFixture<consultarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ consultarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(consultarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
