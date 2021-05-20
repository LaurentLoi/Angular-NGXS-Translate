import { Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

import { mockInterceptorProvider } from './mock.interceptor';

export const httpInterceptorProviders: Provider[] = [];

if (environment.mock.enable) {
  httpInterceptorProviders.push(mockInterceptorProvider);
}
