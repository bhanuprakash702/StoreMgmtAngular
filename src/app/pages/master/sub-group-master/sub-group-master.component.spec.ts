import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroupMasterComponent } from './sub-group-master.component';

describe('SubGroupMasterComponent', () => {
  let component: SubGroupMasterComponent;
  let fixture: ComponentFixture<SubGroupMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubGroupMasterComponent]
    });
    fixture = TestBed.createComponent(SubGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
