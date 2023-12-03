function editProfile() {
    document.getElementById('user-name').innerHTML = '<input type="text" id="name" placeholder="Seu nome">';
    document.getElementById('user-age').innerHTML = '<input type="number" id="age" placeholder="Sua idade">';
    document.getElementById('user-course').innerHTML = '<input type="text" id="course" placeholder="Seu curso">';
    document.getElementById('user-year').innerHTML = '<input type="number" id="year" placeholder="Ano do curso">';
    document.getElementById('change-avatar').style.display = 'block';
    
    const avatar = document.getElementById('user-avatar');
    avatar.style.border = '2px solid #FFCC00';
    avatar.style.cursor = 'pointer';
    avatar.onclick = function() {
      document.getElementById('avatar-input').click();
    };
  
    const backButton = document.querySelector('.back-btn');
    backButton.style.display = 'none';
  
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar';
    saveButton.onclick = saveProfile;
    document.getElementById('user-details').appendChild(saveButton);
  }
  
  function saveProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;
  
    document.getElementById('user-name').innerHTML = name ? name : 'Nome do Usuário';
    document.getElementById('user-age').innerHTML = age ? age + ' anos' : 'Idade';
    document.getElementById('user-course').innerHTML = course ? course : 'Curso';
    document.getElementById('user-year').innerHTML = year ? 'Ano ' + year : 'Ano do Curso';
  
    resetEditState();
  }
  
  function resetEditState() {
    document.getElementById('change-avatar').style.display = 'none';
  
    const avatar = document.getElementById('user-avatar');
    avatar.style.border = 'none';
    avatar.style.cursor = 'auto';
    avatar.onclick = null;
  
    const backButton = document.querySelector('.back-btn');
    backButton.style.display = 'block';
  
    const saveButton = document.querySelector('#user-details button');
    saveButton.remove();
  }
  