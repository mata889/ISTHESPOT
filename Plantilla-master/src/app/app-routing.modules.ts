
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
<<<<<<< HEAD
<<<<<<< HEAD
//users
import { ListUsuarioComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';
=======
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';
>>>>>>> ¨aaaa¨
=======
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
>>>>>>> 763e3d1b0b65a5aa5cc9bd96eb4ebed43feda32d
>>>>>>> 7ba15ff972004aa7c5ad92d1f2451407b3cc2780

const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'add-usuario',component: AddUsuarioComponent},
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: '', component: ListBebidasComponent, pathMatch: 'full' },
  { path: '', component: ListUsuarioComponent, pathMatch: 'full' }
=======
=======
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
>>>>>>> 763e3d1b0b65a5aa5cc9bd96eb4ebed43feda32d
>>>>>>> 7ba15ff972004aa7c5ad92d1f2451407b3cc2780
  { path: 'list-bebida', component: ListBebidasComponent, pathMatch: 'full' },
  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: 'list-ingrediente', component: ListIngredientesComponent, pathMatch: 'full' }
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
>>>>>>> 763e3d1b0b65a5aa5cc9bd96eb4ebed43feda32d
>>>>>>> 7ba15ff972004aa7c5ad92d1f2451407b3cc2780
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import {NgModule} from '@angular/core'
// import {Routes, RouterModule} from '@angular/router'
// import {UsuarioCrudsComponent} from './usuario-cruds/usuario-cruds.component'
// import {BebidasCrudsComponent} from './bebidas-cruds/bebidas-cruds.component'
// import {ComidasCrudsComponent} from './comidas-cruds/comidas-cruds.component'
// import {IngredientesCrudsComponent} from './ingredientes-cruds/ingredientes-cruds.component'
// import {ProveedoresCrudsComponent} from './proveedores-cruds/proveedores-cruds.component'

// const routes: Routes = [
//     {path: 'usuarios', component: UsuarioCrudsComponent},
//     {path: 'bebidas', component: BebidasCrudsComponent},
//     {path: 'comidas', component: ComidasCrudsComponent},
//     {path: 'ingredientes', component: IngredientesCrudsComponent},
//     {path: 'proveedores', component: ProveedoresCrudsComponent}
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule { }
