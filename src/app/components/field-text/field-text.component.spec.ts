import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldTextComponent } from './field-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

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

  it("should emit value when click on button", () => {
    jest.spyOn(component.text, 'emit');
    const fieldTextElement: DebugElement = fixture.debugElement;
    const input: HTMLInputElement = fieldTextElement.nativeElement.querySelector('input');
    const button: HTMLButtonElement = fieldTextElement.nativeElement.querySelector('button');

    input.value = 'sans';
    input.dispatchEvent(new Event('input'));
    button.click();
    
    expect(component.text.emit).toHaveBeenCalledWith('sans');
  });
});
