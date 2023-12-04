let contadorPosts = 0; 
function adicionarPost(event) {
  event.preventDefault();

  const conteudo = document.querySelector('textarea[name="conteudo"]').value;
  const imagem = document.querySelector('input[name="imagem"]').files[0];

  if (conteudo.trim() !== '' || imagem) {
    contadorPosts++;

    const postsContainer = document.getElementById('posts-container');
    const novoPost = document.createElement('div');
    novoPost.className = 'text-card';
    novoPost.innerHTML = `
      <h2>Novo Post ${contadorPosts}</h2>
      <p>${conteudo}</p>
      ${imagem ? `<img src="${URL.createObjectURL(imagem)}" alt="Imagem do Post">` : ''}
      <div class="like">
        <span class="like-btn" onclick="likePost(this)">Curtir</span>
        <img src="img/coracaonoback.png" alt="">
        <p class="likes-count">0</p>
      </div>
    `;

    postsContainer.appendChild(novoPost);

    document.querySelector('form').reset(); // Limpar o formulário após a publicação
  }
}

function likePost(button) {
  const likesCount = button.nextElementSibling.nextElementSibling;
  let currentLikes = parseInt(likesCount.textContent);
  currentLikes++;
  likesCount.textContent = currentLikes;
}