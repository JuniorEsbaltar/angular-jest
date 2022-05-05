import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldTextComponent } from './field-text.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FieldTextComponent', () => {
  let component: FieldTextComponent;
  let fixture: ComponentFixture<FieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ FieldTextComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
