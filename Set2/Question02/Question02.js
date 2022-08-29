//A
const str1 = `September 29, 1972`;
const str2 = `may 65, 8951`;
const str3 = `May 65, 8951`;
// console.log(str1.match(/[A-Z]{1}[a-zA-Z]+\s[0-9]{2}\,\s[0-9]{4}/));
// console.log(str2.match(/[A-Z]{1}[a-zA-Z]+\s[0-9]{2}\,\s[0-9]{4}/));
// console.log(str3.match(/[A-Z]{1}[a-zA-Z]+\s[0-9]{2}\,\s[0-9]{4}/));
console.log(
  str1.match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2}\,\s[0-9]{4}/
  )
);
console.log(
  str2.match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2}\,\s[0-9]{4}/
  )
);
console.log(
  str3.match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2}\,\s[0-9]{4}/
  )
);

//B
const str4 = `A52`;
const str5 = `4095867z`;
console.log(str4.match(/(?<=\d)([a-zA-Z])|([a-zA-Z])(?=\d)/));
console.log(str5.match(/(?<=\d)([a-zA-Z])|([a-zA-Z])(?=\d)/));

//C
const str6 = `helloword.txt`;
const str7 = `myNewApp.java`;
console.log(str6.match(/([a-zA-Z]+)\.(java|cpp|txt){1}/));
console.log(str7.match(/([a-zA-Z]+)\.(java|cpp|txt){1}/));

//D
const str8 = `abcba`;
const str9 = `12321`;
const str10 = `_a1a_`;
console.log(str8.match(/(?=.{5})(.)(.)(.)\2\1/));
console.log(str9.match(/(?=.{5})(.)(.)(.)\2\1/));
console.log(str10.match(/(?=.{5})(.)(.)(.)\2\1/));

//E
const str11 = `Bee zapp Crow Eagle Zorro  mouse Ape  you`;
console.log(str11.match(/\b[b-yB-Y]+\b/g));

//F
const str12 = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
console.log(str12.match(/(<(\w+?)>(.+?)<\/(\w+?)>)/g));
//Alternatively if you want the other set
const str13 = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
console.log(str13.replace(/(<(\w+?)>(.+?)<\/(\w+?)>)/g, ""));
