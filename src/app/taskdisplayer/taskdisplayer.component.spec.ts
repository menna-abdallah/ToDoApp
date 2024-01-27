import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdisplayerComponent } from './taskdisplayer.component';

describe('TaskdisplayerComponent', () => {
  let component: TaskdisplayerComponent;
  let fixture: ComponentFixture<TaskdisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskdisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskdisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
