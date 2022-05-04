import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextService } from '../../services/text.service';
import textServiceStub from '../../stub/text.service.stub';

import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;
  let textService: TextService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent ],
      providers: [ { provide: TextService, useValue: textServiceStub } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    textService = TestBed.inject(TextService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
