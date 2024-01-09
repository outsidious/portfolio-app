import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsShellComponent } from './projects-shell.component';

describe('ProjectsShellComponent', () => {
  let component: ProjectsShellComponent;
  let fixture: ComponentFixture<ProjectsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
