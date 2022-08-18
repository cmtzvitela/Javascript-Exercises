const str1 = `tabcopeir`;
console.log(str1.match(/.abc/));

const str2 = "345aaab!!1111qq";
console.log(str2.match(/a+b?!!1{4}/));

const str3 = "qertyfffa.b9856";
console.log(str3.match(/.{3}a\.b/));

const str4 = "anniversary";
console.log(str4.match(/\w/));

const str5 = "New Year's Eve";
console.log(str5.match(/\s/));

const str6 = "Sarah's birthday is on May 4th";
console.log(str6.match(/\d/));

const str7 = "#guilty";
console.log(str7.match(/./));

const str8 = "elephant";
console.log(str8.match(/[abc]/));

const str9 = "abcdefghijklmnopqrstuvwxyz";
console.log(str9.match(/(abc)/));

const str10 = "ilike_muffin$@yahoo.com";
console.log(str10.match(/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/));

const str11 = "(0_O)";
console.log(str11.match(/\([0oOn]{1}(_|\s)[0oOn]{1}\)/));
