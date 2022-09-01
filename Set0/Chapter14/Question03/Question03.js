fetch("./info.json")
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    const defaultTemplate = document.createDocumentFragment();
    const homeAnchor = document.createElement("a");
    homeAnchor.id = "home";
    const container = document.createElement("section");
    const imageContainer = document.createElement("div");
    imageContainer.classList = "image-container";
    container.appendChild(imageContainer);
    homeAnchor.appendChild(container);
    createArticles();
    defaultTemplate.appendChild(homeAnchor);
    document.body.appendChild(defaultTemplate);

    function createArticles() {
      for (let i = 0; i < info.length; i++) {
        const anchor = document.createElement("a");
        anchor.href = `#article${info[i].id}`;
        const content = document.createElement("div");
        anchor.appendChild(content);
        content.className = "content";
        content.id = `article ${info[i].id}`;
        const image = document.createElement("div");
        image.className = "image";
        const numberImage = document.createElement("h3");
        image.appendChild(numberImage);
        content.appendChild(image);
        image.style.backgroundImage = "url(" + info[i].img + ")";
        const article = document.createElement("article");
        content.appendChild(article);
        const title = document.createElement("h2");
        title.id = "title";
        title.textContent = info[i].title;
        article.appendChild(title);
        const text = document.createElement("p");
        text.id = "text";
        text.textContent = info[i].text;
        article.appendChild(text);
        imageContainer.appendChild(anchor);
        content.addEventListener("click", (event) => {
          return otherTemplate(info[i]);
        });
      }
    }

    function otherTemplate(obj) {
      const secondTemplate = document.createDocumentFragment();
      const divContainer = document.createElement("div");
      divContainer.id = `article${obj.id}`;
      divContainer.classList = "second-template-container";
      secondTemplate.appendChild(divContainer);
      const title = document.createElement("h2");
      divContainer.appendChild(title);
      title.textContent = obj.title;
      const imageDiv = document.createElement("div");
      divContainer.appendChild(imageDiv);
      const image = document.createElement("img");
      image.src = obj.img;
      image.classList = "article-image";
      imageDiv.appendChild(image);
      const text = document.createElement("p");
      text.textContent = obj.text;
      divContainer.appendChild(text);
      const goBack = document.createElement("a");
      goBack.textContent = "Go back!";
      goBack.href = "#home";
      divContainer.appendChild(goBack);
      document.body.removeChild(homeAnchor);
      document.body.appendChild(secondTemplate);
      goBack.addEventListener("click", () => {
        document.body.removeChild(divContainer);
        firstTemplate();
      });
    }

    function firstTemplate() {
      document.body.appendChild(homeAnchor);
    }
  });

// import info from "./info.json" assert { type: "json" };
// const defaultTemplate = document.createDocumentFragment();
// const homeAnchor = document.createElement("a");
// homeAnchor.id = "home";
// const container = document.createElement("section");
// const imageContainer = document.createElement("div");
// imageContainer.classList = "image-container";
// container.appendChild(imageContainer);
// homeAnchor.appendChild(container);
// createArticles();
// defaultTemplate.appendChild(homeAnchor);
// document.body.appendChild(defaultTemplate);

// function createArticles() {
//   for (let i = 0; i < info.length; i++) {
//     const anchor = document.createElement("a");
//     anchor.href = `#article${info[i].id}`;
//     const content = document.createElement("div");
//     anchor.appendChild(content);
//     content.className = "content";
//     content.id = `article ${info[i].id}`;
//     const image = document.createElement("div");
//     image.className = "image";
//     const numberImage = document.createElement("h3");
//     image.appendChild(numberImage);
//     content.appendChild(image);
//     image.style.backgroundImage = "url(" + info[i].img + ")";
//     const article = document.createElement("article");
//     content.appendChild(article);
//     const title = document.createElement("h2");
//     title.id = "title";
//     title.textContent = info[i].title;
//     article.appendChild(title);
//     const text = document.createElement("p");
//     text.id = "text";
//     text.textContent = info[i].text;
//     article.appendChild(text);
//     imageContainer.appendChild(anchor);
//     content.addEventListener("click", (event) => {
//       return otherTemplate(info[i]);
//     });
//   }
// }

// function otherTemplate(obj) {
//   const secondTemplate = document.createDocumentFragment();
//   const divContainer = document.createElement("div");
//   divContainer.id = `article${obj.id}`;
//   divContainer.classList = "second-template-container";
//   secondTemplate.appendChild(divContainer);
//   const title = document.createElement("h2");
//   divContainer.appendChild(title);
//   title.textContent = obj.title;
//   const imageDiv = document.createElement("div");
//   divContainer.appendChild(imageDiv);
//   const image = document.createElement("img");
//   image.src = obj.img;
//   image.classList = "article-image";
//   imageDiv.appendChild(image);
//   const text = document.createElement("p");
//   text.textContent = obj.text;
//   divContainer.appendChild(text);
//   const goBack = document.createElement("a");
//   goBack.textContent = "Go back!";
//   goBack.href = "#home";
//   divContainer.appendChild(goBack);
//   document.body.removeChild(homeAnchor);
//   document.body.appendChild(secondTemplate);
//   goBack.addEventListener("click", () => {
//     document.body.removeChild(divContainer);
//     firstTemplate();
//   });
// }

// function firstTemplate() {
//   document.body.appendChild(homeAnchor);
// }
