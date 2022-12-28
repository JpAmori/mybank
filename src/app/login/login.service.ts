import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Usuario from "./usuario";

@Injectable()
export class loginAuth{
   constructor(private router: Router){} 
    private userAuthenticated: boolean = false; 
    mensagem!: string;
        
    realizeLogin(user: Usuario){
        if(user.username === '123456789' && user.password === '12345678'){
            user.name = 'João Pedro';
            this.userAuthenticated = true;

            this.router.navigate(['/home'])
            console.log("2")
        }else{
            console.log("3")
            this.userAuthenticated = false;
            this.mensagem = "Chave/senha informadas estão incorretas ou incompletas."
            alert(this.mensagem)
        }
   }
}