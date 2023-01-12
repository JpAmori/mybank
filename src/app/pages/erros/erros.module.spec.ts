import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosModule } from './erros.module';

describe('ErrosModule', () => {
  let component: ErrosModule;
  let fixture: ComponentFixture<ErrosModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrosModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrosModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
