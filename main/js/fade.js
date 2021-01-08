const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
	opacity = 1 - currentScroll / checkpoint;
  } else {
	opacity = 0;
  }
  document.querySelector("#artist").style.opacity = opacity;
  document.querySelector("#artist_name").style.opacity = opacity;
  document.querySelector("#facebook").style.opacity = opacity;
  document.querySelector("#youtube").style.opacity = opacity;
  document.querySelector("#instagram").style.opacity = opacity;
  document.querySelector("#snapcatch").style.opacity = opacity;
  document.querySelector("#twitter").style.opacity = opacity;
});