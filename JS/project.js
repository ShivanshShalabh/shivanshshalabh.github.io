let projectContainerDivs = document.querySelectorAll(
  "#projects .container > div"
);
let projectImagesAll = document.querySelectorAll("#projects div img");

projectContainerDivs.forEach((elem, ind) => {
  elem.children.item(1).setAttribute("data-aos-duration", "600");
  elem.children.item(0).setAttribute("data-aos-duration", "600");
  if (!(ind % 2)) {
    elem.classList.add("flex-row-reverse");
    elem.classList.add("flex-md-row");
    elem.children.item(0).setAttribute("data-aos", "zoom-out-left");
    elem.children.item(1).setAttribute("data-aos", "zoom-out-right");  
  } else {
    elem.children.item(1).setAttribute("data-aos", "zoom-out-left");
  elem.children.item(0).setAttribute("data-aos", "zoom-out-right");
  }
  projectImagesAll[ind].classList.add(
    ind % 2 ? "img-clip-right-backward" : "img-clip-left-backward"
  );
});
