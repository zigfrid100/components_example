import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DataPickerComponent } from './data-picker/data-picker.component';
import { InputCustomComponent} from './input-custom/input-custom.component';
import { ReposComponent} from './repos/repos.component';
import { CheckboxComponent} from './checkbox/checkbox.component';

export const routes: Routes = [
  { path: 'data-picker', component: DataPickerComponent, data: {displayName: 'Dataiicker'}},
  { path: 'input' , component: InputCustomComponent, data: {displayName: 'Input'}},
  { path: 'checkbox' , component: CheckboxComponent, data: {displayName: 'Checkbox'}},
  { path: 'repos', component: ReposComponent, data: {displayName: 'Repos'}}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
