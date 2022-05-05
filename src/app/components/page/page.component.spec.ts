import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TextService } from '../../services/text.service';
import textServiceStub from "../../stub/text.service.stub";
import { PageComponent } from "./page.component";
@Component({ selector: "app-text", inputs: ['text'], template: "" })
class TextStubComponent {}
@Component({ selector: "app-field-text", template: "" })
class FieldTextStubComponent {}

describe("PageComponent", () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;
  let textService: TextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent, TextStubComponent, FieldTextStubComponent],
      providers: [ { provide: TextService, useValue: textServiceStub } ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    textService = TestBed.inject(TextService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
