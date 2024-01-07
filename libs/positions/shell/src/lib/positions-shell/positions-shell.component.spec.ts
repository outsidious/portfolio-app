import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PositionsShellComponent } from './positions-shell.component';

describe('PositionsShellComponent', () => {
  let component: PositionsShellComponent;
  let fixture: ComponentFixture<PositionsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionsShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PositionsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
