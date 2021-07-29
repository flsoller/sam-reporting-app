// Module imports
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptor imports
import { AuthInterceptor } from './auth/auth-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
