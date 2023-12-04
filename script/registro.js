function submitRegistro(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password'); // Corrigido o ID aqui

    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email.endsWith('@aluno.ifsp.edu.br')) {
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);

      window.location.href = 'login.html';
    } else {
      alert('Por favor, insira um email do IFSP válido.');
    }
  }