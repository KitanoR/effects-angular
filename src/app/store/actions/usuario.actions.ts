import {Action} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = 'CARGAR_USUARIO';
export const CARGAR_USUARIO_FAIL = 'CARGAR_USUARIO_FAIL';
export const CARGAR_USUARIO_SUCCESS = 'CARGAR_USUARIO_SUCCESS';


export class CargarUsuario implements Action {
    readonly type=CARGAR_USUARIO
    constructor(public id: string){

    }
}
export class CargarUsuarioFail implements Action {
    readonly type=CARGAR_USUARIO_FAIL;
    constructor(public payload: any){}
}
export class CargarUsuarioSuccess implements Action {
    readonly type=CARGAR_USUARIO_SUCCESS;
    constructor(public usuario: Usuario){}
}


export type usuarioAcciones = CargarUsuario |
        CargarUsuarioFail | CargarUsuarioSuccess;