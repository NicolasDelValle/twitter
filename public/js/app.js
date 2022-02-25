async function postLike() {
  const likeBtn = document.querySelector(`#likes-btn-${likeBtn.dataset.tweetId}`);
  const likeCount = document.querySelector("#likes-count");
  const response = await axios.get(`/tweet/like/${likeBtn.dataset.tweetId}`);
  if (response.data.tweet.likes.length === 0) {
    likeCount.textContent = "";
  } else {
    likeCount.textContent = `${response.data.tweet.likes.length}`;
  }
  console.log(response);
  if (response.data.includesUser) {
    likeBtn.innerHTML = `<i id="elCora" class="bi bi-heart-fill fs-6 text-danger"></i>`;
  } else {
    likeBtn.innerHTML = `<i id="elCora" class="bi bi-heart fs-6"></i>`;
  }
}
