const img = [
  "https://i.pinimg.com/1200x/05/6d/d3/056dd39fccee614d4e46d77ef8814bf8.jpg",
  "https://i.pinimg.com/1200x/ee/97/8d/ee978dfd01ce05de84f042a401a889a9.jpg",
  "https://i.pinimg.com/736x/23/1a/d3/231ad31d82000b7d3d0cf3f9c1e1e041.jpg",
];

let index = 0;

function showSlider() {
  // img.forEach((img_slider) => {
    let sliderImg = document.getElementById("imgSlider");
    console.log(sliderImg);
    sliderImg.src = img[index];
    console.log(img[index])
  // });
}
function next() {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }
  showSlider();
}
function prev() {
  index--;
  if (index < 0) {
    index = img.length - 1;
  }
  showSlider();
}
showSlider();
