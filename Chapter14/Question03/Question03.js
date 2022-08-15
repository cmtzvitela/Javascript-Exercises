import info from "./info.json" assert { type: "json" };
const emptyDiv = document.getElementById("empty-div");

const template1 = document.getElementById("template-1");
const template1Clone = template1.content.firstElementChild.cloneNode(true);
emptyDiv.appendChild(template1Clone);

//template1Clone.addEventListener("click", firstTemplateClick);

const template2 = document.getElementById("template-2");
const template2Clone = template2.content.firstElementChild.cloneNode(true);

const firstTitle = document.getElementById("first-title");
firstTitle.textContent = info.article1.title;
const firstText = document.getElementById("first-text");
firstText.textContent = info.article1.text;

const secondTitle = document.getElementById("second-title");
secondTitle.textContent = info.article2.title;
const secondText = document.getElementById("second-text");
secondText.textContent = info.article2.text;

const thirdTitle = document.getElementById("third-title");
thirdTitle.textContent = info.article3.title;
const thirdText = document.getElementById("third-text");
thirdText.textContent = info.article3.text;

const contentClick = template1Clone.getElementsByClassName("content");

contentClick[0].addEventListener("click", firstTemplateClick);
contentClick[1].addEventListener("click", firstTemplateClick);
contentClick[2].addEventListener("click", firstTemplateClick);

function firstTemplateClick(event) {
  const imageContainer = document.getElementsByClassName("image");
  switch (event.target) {
    case imageContainer[0]:
      console.log(event.target);
      const parentId1 = event.target.parentNode.id;
      console.log("🚀 ~ file: Question03.js ~ line 40 ~ firstTemplateClick ~ parentId", parentId1);

      createSecondTemplate(parentId1);
      break;
    case imageContainer[1]:
      console.log(event.target);
      const parentId2 = event.target.parentNode.id;
      console.log("🚀 ~ file: Question03.js ~ line 40 ~ firstTemplateClick ~ parentId", parentId2);

      createSecondTemplate(parentId2);
      break;
    case imageContainer[2]:
      console.log(event.target);
      const parentId3 = event.target.parentNode.id;
      console.log("🚀 ~ file: Question03.js ~ line 40 ~ firstTemplateClick ~ parentId", parentId3);

      createSecondTemplate(parentId3);
      break;

    default:
      const parentId = event.target.parentNode.parentNode.id;
      console.log("🚀 ~ file: Question03.js ~ line 44 ~ firstTemplateClick ~ parentId", parentId);

      createSecondTemplate(parentId);
      break;
  }
}

function secondTemplateClick() {
  emptyDiv.removeChild(template2Clone);
  emptyDiv.appendChild(template1Clone);
}

function createSecondTemplate(parentId) {
  emptyDiv.removeChild(template1Clone);
  emptyDiv.appendChild(template2Clone);
  const individualTitle = document.getElementById("individual-title");
  individualTitle.textContent = info[parentId].title;
  const firstText = document.getElementById("article-text");
  firstText.textContent = info[parentId].text;
  const articleImage = document.getElementById("article-image");
  articleImage.src = info[parentId].img;
  const backLink = document.getElementById("go-back");
  backLink.addEventListener("click", secondTemplateClick);
}

//   console.log("🚀 ~ file: Question03.js ~ line 37 ~ firstTemplateClick ~ imageContainer", imageContainer);
//   if (event.target == imageContainer[0]) {
//     console.log(event.target);
//     const parentId = event.target.parentNode.id;
//     console.log("🚀 ~ file: Question03.js ~ line 40 ~ firstTemplateClick ~ parentId", parentId);

//     createSecondTemplate(parentId);
//     return;
//   }
//   const parentId = event.target.parentNode.parentNode.id;
//   console.log("🚀 ~ file: Question03.js ~ line 44 ~ firstTemplateClick ~ parentId", parentId);

//   createSecondTemplate(parentId);
