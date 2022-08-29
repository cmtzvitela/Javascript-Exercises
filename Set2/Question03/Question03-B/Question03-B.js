const paragraph = `The seeds of the cacao tree have an intense bitter taste and must be fermented to develop the flavor. After
      fermentation, the seeds are dried, cleaned, and roasted. The shell is removed to produce cocoa nibs, which are
      then ground to cocoa mass, unadulterated chocolate in rough form. Once the cocoa mass is liquefied by heating, it
      is called chocolate liquor. The liquor may also be cooled and processed into its two components: cocoa solids and
      cocoa butter. Baking chocolate, also called bitter chocolate, contains cocoa solids and cocoa butter in varying
      proportions, without any added sugar. Powdered baking cocoa, which contains more fiber than cocoa butter, can be
      processed with alkali to produce dutch cocoa. Much of the chocolate consumed today is in the form of sweet
      chocolate, a combination of cocoa solids, cocoa butter or added vegetable oils, and
      sugar. Milk chocolate is sweet chocolate that additionally contains milk powder or condensed milk. White chocolate
      contains cocoa butter, sugar, and milk, but no cocoa solids.`;

const text = document.createTextNode(paragraph);
const textContainer = document.getElementById("text");
textContainer.appendChild(text);

function handleClick() {
  const userString = document.getElementById("input-hashtag").value;
  const addHashtags = paragraph.replaceAll(userString, createHashtag(userString));
  let modifiedParagraph = new DOMParser().parseFromString(addHashtags, "text/html");
  let p = document.createElement("p");
  p = modifiedParagraph.body;
  p.style.margin = "0px";
  const textContainer = document.getElementById("text");
  textContainer.removeChild(textContainer.firstChild);
  textContainer.append(p);
}

// function handleClick() {
//   const text = document.getElementById("text").innerText;
//   console.log("🚀 ~ file: Question03-B.js ~ line 3 ~ handleClick ~ text", text);
//   const userString = document.getElementById("input-hashtag").value;
//   console.log("🚀 ~ file: Question03-B.js ~ line 3 ~ userString", userString);
//   const newText = text.replaceAll(userString, createHashtag(userString));
//   console.log("🚀 ~ file: Question03-B.js ~ line 7 ~ handleClick ~ newText", newText);
//   document.getElementById("text").innerText = newText;
// }

// function createHashtag(string) {
//   const hashtag = document.createElement("a");
//   hashtag.text = `#${string}`;
//   hashtag.href = `https://twitter.com/hashtag/${string}`;
//   console.log("🚀 ~ file: Question03-B.js ~ line 15 ~ createHashtag ~ hashtag", hashtag);
//   textContainer.appendChild(hashtag);
// }

function createHashtag(string) {
  const hashtag = `<a href=https://twitter.com/hashtag/${string}>#${string}</a>`;
  // let newHashtag = new DOMParser().parseFromString(hashtag, "text/html");
  //console.log("🚀 ~ file: Question03-B.js ~ line 46 ~ createHashtag ~ newHashtag", newHashtag);
  return hashtag;
}

//console.log(text.replace(userString, `#${userString}`));

//https://twitter.com/hashtag/FinalFantasy
