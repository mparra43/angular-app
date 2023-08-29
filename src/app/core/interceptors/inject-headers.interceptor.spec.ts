import { TestBed } from '@angular/core/testing';

import { InjectHeadersInterceptor } from './inject-headers.interceptor';

describe('InjectHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectHeadersInterceptor = TestBed.inject(InjectHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
