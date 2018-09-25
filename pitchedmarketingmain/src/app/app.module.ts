import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//layouting
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatMenuModule, MatTableModule,
  MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule 
} from '@angular/material';


//components
import { EmailtemplatesComponent } from './emailtemplates/emailtemplates.component';
import { EmailschedulesComponent } from './emailschedules/emailschedules.component';
import { CustomersubscriptionComponent } from './customersubscription/customersubscription.component';
import { CustomersubscriptionDetailComponent } from './customersubscription/customersubscription-detail/customersubscription-detail.component';
import { EmailtemplatesDetailComponent } from './emailtemplates/emailtemplates-detail/emailtemplates-detail.component';
import { EmailschedulesDetailComponent } from './emailschedules/emailschedules-detail/emailschedules-detail.component';
import { SegmentbuilderComponent } from './segmentbuilder/segmentbuilder.component';
import { SegmentbuilderdetailComponent } from './segmentbuilder/segmentbuilderdetail/segmentbuilderdetail.component';
import { SourcecodesComponent } from './sourcecodes/sourcecodes.component';
import { SourcecodesdetailComponent } from './sourcodes/sourcecodesdetail/sourcecodesdetail.component';

//services
import { CustomersubscriptionsService } from './services/customersubscriptions.service';
import { EmailtemplatesService } from './services/emailtemplates.service';
import { SegmentbuilderService } from './services/segmentbuilder.service';
import { SourcecodeserviceService } from './services/sourcecodeservice.service';

//toast
import { ToastrModule } from 'ngx-toastr';


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
    children: [
      {
        path: '',
        component: EmailschedulesComponent
      },
      {
        path: ':id',
        component: EmailschedulesDetailComponent
      }
    ]        
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
  },
  {
    path: 'segmentbuilder',
    children: [
      {
        path: '',
        component: SegmentbuilderComponent
      },
      {
        path: ':id',
        component: SegmentbuilderdetailComponent
      }
    ]
  },
  {
    path: 'sourcecodes',
    children: [
      {
        path: '',
        component: SourcecodesComponent
      },
      {
        path: ':id',
        component: SourcecodesdetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,    
    EmailtemplatesComponent,
    EmailschedulesComponent,
    CustomersubscriptionComponent,
    CustomersubscriptionDetailComponent,
    EmailtemplatesDetailComponent,
    EmailschedulesDetailComponent,
    SegmentbuilderComponent,
    SegmentbuilderdetailComponent,
    SourcecodesComponent,
    SourcecodesdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,   
    MatTableModule, MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,

    //config for toast module
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true                        
    })
    
  ],
  providers: [    
    CustomersubscriptionsService,
    EmailtemplatesService,
    SegmentbuilderService,
    SourcecodeserviceService
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
