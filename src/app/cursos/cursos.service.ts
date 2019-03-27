import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular', 'Python', 'Ionic'];

    constructor() {
        console.log('cursos.service.ts');
    }
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }

}
