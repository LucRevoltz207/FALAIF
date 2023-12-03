function validateEmail(event) {
    event.preventDefault(); // Evita o envio do formulário padrão para teste
  
    const emailInput = document.getElementById('email');
    const email = emailInput.value.toLowerCase();
  
    if (email.endsWith('@aluno.ifsp.edu.br')) {
      window.location.href = '/index.html'; // Redireciona para /index.html
    } else {
      alert('Por favor, insira um email do IFSP válido.');
    }
  }
  