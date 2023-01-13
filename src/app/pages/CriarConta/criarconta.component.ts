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
        this.consultCont();
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            phone: new FormControl('', Validators.required),
            cpf: new FormControl('', Validators.required),
            income: new FormControl('', Validators.required),
        })
    }

    createUser(form: NgForm): void{
        if(form.valid){
            const user: UserConta = this.form.value;
            user.contNumber = Math.floor(Math.random()*250);
            this.usuario.push(user);
            localStorage.setItem('USER', JSON.stringify(this.usuario));
            this.form.reset();
        }

    }

    showCont(): void{
        let move: string = (<HTMLInputElement>document.getElementById('overlay-container')).value;
        const movendoTudo = document.getElementById('overlay-container');
        if(move != ""){
            movendoTudo?.classList.toggle('hide')
            movendoTudo?.classList.toggle('overlay-container');
            movendoTudo?.classList.toggle('move')    
        }
    }

    consultCont(): void{
        if(localStorage.getItem('USER')){
            const BANK: UserConta[] = JSON.parse(localStorage.getItem('USER') || '[]')
            this.usuario = BANK
            console.log(BANK)
        }else{
            this.usuario = []
        }
    }

}
