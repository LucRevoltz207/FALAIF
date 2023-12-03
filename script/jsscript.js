function likePost(button) {
    const likesCount = button.nextElementSibling.nextElementSibling;
    let currentLikes = parseInt(likesCount.textContent);
    currentLikes++;
    likesCount.textContent = currentLikes;
  }