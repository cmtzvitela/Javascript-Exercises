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

let memory = [];
function search(searchParameter) {
  const inMemory = memory.filter((registered) => registered.includes(searchParameter));
  if (inMemory.length == 0) {
    for (let floor = 0; floor < building.length; floor++) {
      for (let office = 0; office < building[floor].length; office++) {
        if (building[floor][office][0].name == searchParameter) {
          memory.push(
            `${searchParameter} was found in floor number ${[floor + 1]} in office ${floor + 1}0${office + 1}`
          );
        } else if (building[floor][office][1].name == searchParameter) {
          memory.push(
            `${searchParameter} was found in floor number ${[floor + 1]} in office ${floor + 1}0${office + 1}`
          );
        }
      }
    }
  } else {
    memory.forEach((element) => {
      if (element.includes(searchParameter)) {
        console.log(element);
        return element;
      }
    });
  }
}

search("Alice");
search("Jerry");
search("Erika");
console.log(memory);
search("Erika");
search("Sarah's Computer");
console.log(memory);
search("Sarah's Computer");
