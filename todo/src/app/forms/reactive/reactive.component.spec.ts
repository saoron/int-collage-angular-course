import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReactiveComponent } from "./reactive.component";

describe("ReactiveComponent", () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ReactiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
