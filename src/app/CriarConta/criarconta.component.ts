import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserConta } from "./criarConta";


@Component({
    selector: 'CriarConta',
    templateUrl: './criarconta.component.html',
    styleUrls: ['./criarconta.component.css']
})
export class CriarContaComponent implements OnInit {
 
    usuario!: UserConta[];
    form!: any;

    constructor(){
        this.usuario = [];
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            cpf: new FormControl(''),
            income: new FormControl(''),
        })
    }
    
    createUser(): void{
        const user: UserConta = this.form.value;
        user.contNumber = Math.floor(Math.random()*250);
        this.usuario.push(user);
        localStorage.setItem('BANK', JSON.stringify(this.usuario));
        this.form.reset();
    }    

    showCont(): void{
        if(localStorage.getItem('BANK')){
            const BANK: UserConta[] = JSON.parse(localStorage.getItem('BANK') || '[]')
            this.usuario = BANK
        }
    }
}
