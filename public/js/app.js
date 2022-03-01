async function like(likeBtn) {
  const likeCount = document.querySelector(`#likes-count-${likeBtn.dataset.tweetId}`);
  const response = await axios.get(`/tweet/like/${likeBtn.dataset.tweetId}`);
  if (response.data.tweet.likes.length === 0) {
    likeCount.textContent = "";
  } else {
    likeCount.textContent = `${response.data.tweet.likes.length}`;
  }
  console.log(response);
  if (response.data.includesUser) {
    likeBtn.innerHTML = `<i class="bi bi-heart-fill fs-6 text-danger"></i>`;
  } else {
    likeBtn.innerHTML = `<i class="bi bi-heart fs-6"></i>`;
  }
}

async function follow(followBtn) {
  const response = await axios.get(`/follow/${followBtn.dataset.followed}`);
  console.log(response);
}
