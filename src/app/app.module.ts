import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxMaskConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptorService } from './token-interceptor.service';
import { AgGridModule } from 'ag-grid-angular';
import { ActionCellRendererComponent } from './action-cell-renderer/action-cell-renderer.component';

const maskConfig: Partial<NgxMaskConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DeshboardComponent,
    ActionCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective, 
    NgxMaskPipe, NgbModule,    
    AgGridModule,
  ],
 providers: [
  provideNgxMask(),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,  
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
