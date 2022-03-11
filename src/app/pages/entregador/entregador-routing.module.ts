import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregadorPage } from './entregador.page';

const routes: Routes = [
  {
    path: '',
    component: EntregadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregadorPageRoutingModule {}
