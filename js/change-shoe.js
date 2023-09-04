const changeShoe = (element) => {
  const allDiv = document.querySelectorAll("div");
  const bigShoeImage = document.getElementById('big-shoe-image');
  allDiv.forEach((div) => {
    div.classList.remove("border-2");
    div.classList.remove("border-[#FF6452]");
  });
  element.classList.add("border-2");
  element.classList.add("border-[#FF6452]");
  if(element.classList.contains('shoe1')){
    bigShoeImage.src = "Assets/images/big-shoe1.png";
  }
  else if(element.classList.contains('shoe2')){
    bigShoeImage.src = "Assets/images/big-shoe2.png";
  }
  else if(element.classList.contains('shoe3')){
    bigShoeImage.src = "Assets/images/big-shoe3.png";
  }
};
