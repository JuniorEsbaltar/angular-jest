import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PageComponent } from "./page.component";
@Component({ selector: "app-text", template: "" })
class TextStubComponent {}
@Component({ selector: "app-field-text", template: "" })
class FieldTextStubComponent {}

describe("PageComponent", () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent, TextStubComponent, FieldTextStubComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
