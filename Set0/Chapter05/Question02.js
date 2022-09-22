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
];

const search = function () {
  const memory = new Map();
  return function (searchParameter) {
    if (memory.has(searchParameter)) {
      return memory.get(searchParameter);
    } else {
      for (let floor = 0; floor < building.length; floor++) {
        for (let office = 0; office < building[floor].length; office++) {
          if (building[floor][office][0].name === searchParameter) {
            memory.set(searchParameter, `Floor ${[floor + 1]} Office ${floor + 1}0${office + 1}`);
            return memory.get(searchParameter);
          } else if (building[floor][office][1].name == searchParameter) {
            memory.set(searchParameter, `Floor ${[floor + 1]} Office ${floor + 1}0${office + 1}`);
            return memory.get(searchParameter);
          }
        }
      }
    }
  };
};

const lookForPerson = search();
const lookForObject = search();
console.log(lookForPerson("Alice"));
console.log(lookForPerson("Alice"));
lookForPerson("Jerry");
lookForPerson("Erika");
console.log(lookForPerson("Erika"));
console.log(lookForObject("Sarah's Computer"));
