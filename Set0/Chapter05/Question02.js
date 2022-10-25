const building = [
  [
    //First floor
    [
      //Office 101
      { type: "person", name: "Alice" },
      { type: "equipment", name: "Alice's Computer", belongsTo: "Alice" },
    ],
    [
      //Office 102
      { type: "person", name: "Fred" },
      { type: "equipment", name: "Fred's Computer", belongsTo: "Fred" },
    ],
  ],
  [
    //Second floor
    [
      //Office 201
      { type: "person", name: "Jerry" },
      { type: "equipment", name: "Jerry's Computer", belongsTo: "Jerry" },
    ],
    [
      //Office 202
      { type: "person", name: "Sarah" },
      { type: "equipment", name: "Sarah's Computer", belongsTo: "Sarah" },
    ],
  ],
  [
    //Third floor
    [
      //Office 301
      { type: "person", name: "James" },
      { type: "equipment", name: "James's Computer", belongsTo: "James" },
    ],
    [
      //Office 302
      { type: "person", name: "Erika" },
      { type: "equipment", name: "Erika's Computer", belongsTo: "Erika" },
    ],
  ],
  [
    //Fourth floor
    [
      //Office 401
      { type: "equipment", name: "Copy Machine", belongsTo: "Everyone" },
    ],
    [
      //Office 402
      { type: "person", name: "Taylor" },
      { type: "person", name: "Gaga" },
      { type: "person", name: "Lana" },
      { type: "person", name: "Adele" },
    ],
  ],
];

const search = function () {
  const memory = new Map();
  return function (searchParameter) {
    if (memory.has(searchParameter)) {
      return memory.get(searchParameter);
    } else {
      for (let floor = 0; floor < building.length; floor++) {
        for (let office = 0; office < building[floor].length; office++) {
          for (let subject = 0; subject < building[floor][office].length; subject++) {
            if (building[floor][office][subject].name === searchParameter) {
              memory.set(searchParameter, `Floor ${[floor + 1]} Office ${floor + 1}0${office + 1}`);
              return memory.get(searchParameter);
            }
          }
        }
      }
    }
  };
};

const lookingFor = search();
console.log(lookingFor("Alice"));
console.log(lookingFor("Alice"));
lookingFor("Jerry");
lookingFor("Erika");
console.log(lookingFor("Erika"));
console.log(lookingFor("Sarah's Computer"));
console.log(lookingFor("Copy Machine"));
console.log(lookingFor("Lana"));
console.log(lookingFor("Adele"));
