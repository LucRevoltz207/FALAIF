function editProfile() {
  const editableFields = document.querySelectorAll('.editable');

  editableFields.forEach(field => {
      const currentValue = field.textContent.trim();
      const inputType = field.id === 'user-email' ? 'email' : 'text';
      const placeholder = field.id.replace('user-', '').toUpperCase();

      if (field.id === 'user-course') {
          const courseOptions = ['Informática', 'Desenvolvimento de Sistemas', 'Mecânica', 'Eletrotécnica', 'Eletrônica', 'Telecomunicações', 'Energias Renováveis', 'Edificações'];
          field.innerHTML = `<select id="courseSelect"><option value="">Escolha seu curso</option>${courseOptions.map(option => `<option value="${option}">${option}</option>`).join('')}</select>`;
          document.getElementById('courseSelect').value = currentValue;
      } else if (field.id === 'user-year') {
          field.innerHTML = `<input type="number" value="${currentValue}" min="1" max="4" placeholder="${placeholder}">`;
      } else {
          field.innerHTML = `<input type="${inputType}" value="${currentValue === placeholder ? '' : currentValue}" placeholder="${placeholder}">`;
      }
  });

  const avatar = document.getElementById('user-avatar');
  avatar.style.border = '2px solid #FFCC00';
  avatar.style.cursor = 'pointer';
  avatar.onclick = function () {
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
  const name = document.getElementById('user-name').querySelector('input').value.trim();
  const age = document.getElementById('user-age').querySelector('input').value.trim();
  const email = document.getElementById('user-email').querySelector('input').value.trim();
  const course = document.getElementById('user-course').querySelector('select').value;
  const year = document.getElementById('user-year').querySelector('input').value.trim();

  if (name === '' || age === '' || email === '' || course === '' || year === '') {
      alert('Preencha todos os campos antes de salvar.');
      return;
  }

  document.getElementById('user-name').innerHTML = name ;
  document.getElementById('user-age').innerHTML = age ;
  document.getElementById('user-email').innerHTML = email ;
  document.getElementById('user-course').innerHTML = course ;
  document.getElementById('user-year').innerHTML = year ;

  resetEditState();
}