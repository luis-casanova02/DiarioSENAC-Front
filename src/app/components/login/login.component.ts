import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nome = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService) {}

  autenticar(){
    this.autenticacaoService.login(this.nome).subscribe(
      (token) => {
        this.autenticacaoService.salvarToken(token);
        console.log('Login bem-sucedido. Token salvo:', token);
      },
      (error) => {
        console.error('Erro ao autenticar:', error);
      }
    );
  }
}
