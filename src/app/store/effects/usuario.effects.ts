import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor (
        private actionsS$: Actions,
        public usuariosService: UsuarioService
    ){

    }
    @Effect()
    cargarUsuario$ = this.actionsS$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO)
    )
    .pipe(
       switchMap((action) => {
            return this.usuariosService.getUser(action['id'])
                .pipe(
                    map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                    catchError( error =>  of(new usuarioActions.CargarUsuarioFail(error)))
                )
       })
    )
}