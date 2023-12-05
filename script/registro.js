function togglePasswordVisibility() {
  const senhaInput = document.getElementById('password');
  const confirmacaoSenhaInput = document.getElementById('confirm-password'); // Corrigido aqui

  senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
  confirmacaoSenhaInput.type = confirmacaoSenhaInput.type === 'password' ? 'text' : 'password';
}

function validarSenhaForte(senha) {
  const regexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Atualizada a expressão regular para validação de senha forte
  return regexSenhaForte.test(senha);
}

function submitRegistro(event) {
  event.preventDefault();

  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('password');
  const confirmacaoSenhaInput = document.getElementById('confirm-password');

  const nome = nomeInput.value;
  const email = emailInput.value;
  const senha = senhaInput.value;
  const confirmacaoSenha = confirmacaoSenhaInput.value;

  if (email.endsWith('@aluno.ifsp.edu.br')) {
    if (senha === confirmacaoSenha && validarSenhaForte(senha)) {
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);

      window.location.href = '../pags/login.html';
    } else {
      alert('Senhas não correspondem ou não atendem aos critérios de força.');
    }
  } else {
    alert('Por favor, insira um email do IFSP válido.');
  }
}
