import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserConta } from "./criarConta";
import { Guid } from "guid-typescript";


@Component({
    selector: 'CriarConta',
    templateUrl: './criarconta.component.html',
    styleUrls: ['./criarconta.component.css']
})
export class CriarContaComponent implements OnInit {
 
    usuario!: UserConta[];
    form!: any;
    

    constructor(){}

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required]),
            income: new FormControl('', [Validators.required]),
        })
    }
    
    createUser(): void{
        const user: UserConta = this.form.value;
        


        localStorage.setItem("BANK", JSON.stringify(user));
        this.form.reset();
    }    

}
