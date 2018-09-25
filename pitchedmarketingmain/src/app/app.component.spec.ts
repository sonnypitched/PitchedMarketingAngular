import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatMenuModule, MatTableModule,
  MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatSelectModule, MatInputModule 
} from '@angular/material';
import { EmailtemplatesComponent } from './emailtemplates/emailtemplates.component';
import { EmailschedulesComponent } from './emailschedules/emailschedules.component';
import { CustomersubscriptionComponent } from './customersubscription/customersubscription.component';
import { CustomersubscriptionDetailComponent } from './customersubscription/customersubscription-detail/customersubscription-detail.component';
import { EmailtemplatesDetailComponent } from './emailtemplates/emailtemplates-detail/emailtemplates-detail.component';


const routes: Routes = [
  {
    path: '',
    component: EmailtemplatesComponent
  },
  {
    path: 'emailtemplates',
    children: [
      {
        path: '',
        component: EmailtemplatesComponent
      },
      {
        path: ':id',
        component: EmailtemplatesDetailComponent
      }
    ]
  },
  {
    path: 'emailschedules',
    component: EmailschedulesComponent
  },
  {
    path: 'customersubscription',
    children: [
      {
        path: '',
        component: CustomersubscriptionComponent
      },
      {
        path: ':id',
        component: CustomersubscriptionDetailComponent
      }
    ]
  }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(routes), MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
        MatListModule, MatToolbarModule, MatCardModule, MatMenuModule, MatTableModule,
        MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
        MatFormFieldModule, MatSelectModule, MatInputModule ],
      declarations: [
        AppComponent,
        EmailtemplatesComponent,
        EmailschedulesComponent,
        CustomersubscriptionComponent,
        CustomersubscriptionDetailComponent,
        EmailtemplatesDetailComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Pitched'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pitchedmarketing');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pitchedmarketing!');
  }));
});
