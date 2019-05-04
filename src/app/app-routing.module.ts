import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/llamadas', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'mensajes', loadChildren: './pages/mensajes/mensajes.module#MensajesPageModule' },
  { path: 'audio', loadChildren: './pages/audio/audio.module#AudioPageModule' },
  { path: 'llamadas', loadChildren: './pages/llamadas/llamadas.module#LlamadasPageModule' },
  { path: 'detalle/:id', loadChildren: './pages/detalle/detalle.module#DetallePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
