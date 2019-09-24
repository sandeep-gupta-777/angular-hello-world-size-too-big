import {Route, RouterModule} from '@angular/router';
import {CoreWrapperComponent} from './core-wrapper.component';
import {NgModule} from '@angular/core';


const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent,
    children: [{
      path: 'test', loadChildren: './test.module#TestModule', canLoad: []
    }],
  },
  {path: '', redirectTo: `core/viewbots/test`, pathMatch: 'full'},
];

declare let areReducersRegistered;

@NgModule({
  declarations: [CoreWrapperComponent],
  entryComponents: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class CoreModule {
}
