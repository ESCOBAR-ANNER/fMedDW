import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersmoduleModule } from './users/usersmodule/usersmodule.module';
import { authGuardian } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FooterComponent } from './shared/footer/footer.component';
import { PatientModule } from './patients/patient-module/patient.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    PatientProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersmoduleModule,
    HttpClientModule,
    PatientModule,
    FormsModule
  ],
  providers: [
    authGuardian,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
