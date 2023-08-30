import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { InjectHeadersInterceptor } from '@core/interceptors/inject-headers.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { appRoutes } from './app/app-routing';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes),
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InjectHeadersInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
    .catch(err => console.error(err));
