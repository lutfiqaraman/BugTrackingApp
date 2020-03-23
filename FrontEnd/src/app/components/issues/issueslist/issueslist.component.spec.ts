import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueslistComponent } from './issueslist.component';

describe('IssueslistComponent', () => {
  let component: IssueslistComponent;
  let fixture: ComponentFixture<IssueslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
