import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMasterComponent } from './group-master.component';

describe('GroupMasterComponent', () => {
  let component: GroupMasterComponent;
  let fixture: ComponentFixture<GroupMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupMasterComponent]
    });
    fixture = TestBed.createComponent(GroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
