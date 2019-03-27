import { Injectable, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Injectable()
export class CursosService {

    constructor() {
        console.log('cursos.service.ts');
    }

    static criouNovoCurso = new EventEmitter<String>();

    emitirCursoCriado = new EventEmitter<String>();

    private cursos: string[] = ['Angular', 'Python', 'Ionic'];

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}
