async function postLike(tweetId) {
  console.log("almenos entro en la funcion");
  const likeCount = document.getElementById("likes-count");
  const tweet = await axios.get(`/tweet/like/${tweetId}`);
  console.log(tweet);
}
