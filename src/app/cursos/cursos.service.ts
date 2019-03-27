import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    constructor(private _logService: LogService) {
        console.log('cursos.service.ts');
    }

    static criouNovoCurso = new EventEmitter<String>();

    emitirCursoCriado = new EventEmitter<String>();

    private cursos: string[] = ['Angular', 'Python', 'Ionic'];

    getCursos() {
        this._logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this._logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}
