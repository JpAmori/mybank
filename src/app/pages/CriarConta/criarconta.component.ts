import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { UserConta } from "./criarConta";


@Component({
    selector: 'CriarConta',
    templateUrl: './criarconta.component.html',
    styleUrls: ['./criarconta.component.css']
})
export class CriarContaComponent implements OnInit {
 
    usuario!: UserConta[];
    form!: any;
    mask!: string;

    constructor(){
        this.usuario = [];
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            phone: new FormControl('', Validators.required),
            cpf: new FormControl('', Validators.required),
            income: new FormControl('', Validators.required),
        })
    }
    
    cpfcnpjmask() {
        const value = this.form.get('cpf_cnpj').value;
        console.log(value, value.length,this.form)
        if(value.length <= 14) {
          this.mask = '00.000.000/0000-00'
        }
        else {
          this.mask = '00.000.0000-00'
        }
      }

    createUser(form: NgForm): void{
        if(form.valid){
            const user: UserConta = this.form.value;
            user.contNumber = Math.floor(Math.random()*250);
            this.usuario.push(user);
            localStorage.setItem('BANK', JSON.stringify(this.usuario));
            this.form.reset();
        }

    }

    showCont(): void{
        if(localStorage.getItem('BANK')){
            const BANK: UserConta[] = JSON.parse(localStorage.getItem('BANK') || '[]')
            this.usuario = BANK
        }
    }
}
