const videoCards = document.querySelectorAll(".video-card");
const videos = document.querySelectorAll(".video");


videoCards.forEach((videoCard, index) => {
  const video = videos[index]; 

  videoCard.addEventListener("mouseenter", () => {
    video.play();
  });

  videoCard.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.load();
  })

});


// const path = window.location.pathname;
// const fileName = path.substring(path.lastIndexOf("/") + 1);
// let videoUrls = [];

// if(fileName == "personalProjects.html") {
//   videoUrls = [
//     "/detailsPages/hamada.html", 
//     "clientProjects.html", 
//   ];
// }else if(fileName == "clientProjects.html"){
//   videoUrls = [
//     "contact.html", 
//     "test.html", 
//   ];
// }else if(fileName == "assets.html"){
//   videoUrls = [
//     "personalProjects.html", 
//     "test.html", 
//   ];
// }
