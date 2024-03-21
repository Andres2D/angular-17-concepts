import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTemplateComponent } from './prop-template.component';

describe('PropTemplateComponent', () => {
  let component: PropTemplateComponent;
  let fixture: ComponentFixture<PropTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
