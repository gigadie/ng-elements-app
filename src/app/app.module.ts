import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {

	constructor(private injector: Injector) {}

	ngDoBootstrap() {
		const appAsCustomElement = createCustomElement(AppComponent, {injector: this.injector});
		customElements.define('ng-elements-app', appAsCustomElement);
	}
	
}
