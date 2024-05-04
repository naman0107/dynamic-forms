import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFiledComponent } from './text-filed.component';

describe('TextFiledComponent', () => {
  let component: TextFiledComponent;
  let fixture: ComponentFixture<TextFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFiledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
