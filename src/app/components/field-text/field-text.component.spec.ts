import { ComponentFixture, TestBed } from '@angular/core/testing';
import textServiceStub from '../../stub/text.service.stub';
import { TextService } from '../../services/text.service';
import { FieldTextComponent } from './field-text.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FieldTextComponent', () => {
  let component: FieldTextComponent;
  let fixture: ComponentFixture<FieldTextComponent>;
  let textService: TextService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ FieldTextComponent ],
      providers: [ { provide: TextService, useValue: textServiceStub } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    textService = TestBed.inject(TextService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
