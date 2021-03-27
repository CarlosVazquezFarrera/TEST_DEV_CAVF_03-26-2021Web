export class Usuario{
    constructor(correo:string, password: string) {
        this.password = password;
        this.correo = correo;
    }

    correo: string;
    password: string;
}