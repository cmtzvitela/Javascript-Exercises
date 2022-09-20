fetch("./info.json")
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    console.log(location);
    const template1 = document.getElementById("template-1");
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
        content.addEventListener("click", () => {
          return otherTemplate(info[i]);
        });
      }
    }

    function otherTemplate(obj) {
      const template2 = document.getElementById("template-2");
      const divContainer = document.createElement("div");
      divContainer.id = `article${obj.id}`;
      divContainer.classList = "second-template-container";
      template2.appendChild(divContainer);
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
      document.body.appendChild(template2);
      template1.style.display = "none";
      template2.style.display = "block";
      goBack.addEventListener("click", () => {
        const removeDiv = document.getElementById(`article${obj.id}`);
        template2.removeChild(removeDiv);
        template1.style.display = "block";
        firstTemplate();
      });
    }

    function firstTemplate() {
      document.body.appendChild(template1);
    }
  });
