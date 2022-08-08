import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDemoFirstComponent } from './dir-demo-first.component';

describe('DirDemoFirstComponent', () => {
  let component: DirDemoFirstComponent;
  let fixture: ComponentFixture<DirDemoFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDemoFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirDemoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
