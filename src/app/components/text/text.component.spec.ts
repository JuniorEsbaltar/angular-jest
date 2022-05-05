import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text by input', () => {
    const textElement = fixture.debugElement;
    const pElement = textElement.nativeElement.querySelector('p');
    
    component.text = 'sans';
    fixture.detectChanges();

    expect(pElement.textContent).toBe('your text is: sans');
  });
});
