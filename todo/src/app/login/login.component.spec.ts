import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have Login component title", () => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector(".card-header").textContent).toEqual(
      "Login to the ToDo App"
    );
  });

  it("should perform login", async () => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    component.username = "demo";
    component.password = "444";
    const res = await component.login();
    expect(res).toBeTruthy();
  });

  it("should not perform login without a username or password", async () => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const res = await component.login();
    expect(res).toBeFalsy();
  });
});
