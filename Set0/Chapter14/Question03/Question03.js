fetch("./info.json")
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    console.log(location);
    const template1 = document.getElementById("template-1");
    const template2 = document.getElementById("template-2");
    const homeAnchor = document.createElement("a");
    homeAnchor.id = "home";
    const container = document.createElement("section");
    const imageContainer = document.createElement("div");
    imageContainer.classList = "image-container";
    container.appendChild(imageContainer);
    homeAnchor.appendChild(container);
    createArticles();
    template1.appendChild(homeAnchor);
    template1.style.display = "block";
    checkURL(location);
    function checkURL(location) {
      if (location.hash === "" || location.hash === "#home") {
        return;
      } else {
        for (let i = 0; i < info.length; i++) {
          if (location.hash === `#article${info[i].id}`) {
            return otherTemplate(info[i]);
          }
        }
      }
    }
    function createArticles() {
      for (let i = 0; i < info.length; i++) {
        const clonedTemplate = template1.content.cloneNode(true);
        const anchor = clonedTemplate.getElementById("anchor");
        anchor.href = `#article${info[i].id}`;
        const content = clonedTemplate.getElementById("content");
        anchor.appendChild(content);
        content.className = "content";
        content.id = `article ${info[i].id}`;
        const image = clonedTemplate.getElementById("image");
        image.className = "image";
        const numberImage = document.createElement("h3");
        image.appendChild(numberImage);
        content.appendChild(image);
        image.style.backgroundImage = "url(" + info[i].img + ")";
        const article = clonedTemplate.getElementById("article");
        content.appendChild(article);
        const title = clonedTemplate.getElementById("title");
        title.id = "text";
        title.textContent = info[i].title;
        article.appendChild(title);
        const text = clonedTemplate.getElementById("text");
        text.id = "text";
        text.textContent = info[i].text;
        article.appendChild(text);
        imageContainer.appendChild(anchor);
        content.addEventListener("click", () => {
          return otherTemplate(info[i]);
        });
      }
    }

    function otherTemplate(obj) {
      const clonedTemplate = template2.content.cloneNode(true);
      const divContainer = clonedTemplate.getElementById("second-container");
      divContainer.id = `article${obj.id}`;
      const title2 = clonedTemplate.getElementById("title-2");
      title2.textContent = obj.title;
      const imageDiv = clonedTemplate.getElementById("image-div");
      const image = clonedTemplate.getElementById("image2");
      image.src = obj.img;
      image.classList = "article-image";
      const text = clonedTemplate.getElementById("text2");
      text.textContent = obj.text;
      const goBack = clonedTemplate.getElementById("go-back");
      goBack.textContent = "Go back!";
      goBack.href = "#home";
      document.body.appendChild(clonedTemplate);
      template1.style.display = "none";
      template2.style.display = "block";
      goBack.addEventListener("click", () => {
        const removeDiv = document.getElementById(`article${obj.id}`);
        document.body.removeChild(removeDiv);
        template1.style.display = "block";
        firstTemplate();
      });
    }

    function firstTemplate() {
      document.body.appendChild(template1);
    }
  });
