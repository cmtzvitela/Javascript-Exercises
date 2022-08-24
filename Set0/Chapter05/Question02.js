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
function lookForEmployee(employee) {
  if (memory.includes(employee)) {
    return console.log("You already know where that person is");
  }
  for (let floor = 0; floor < building.length; floor++) {
    for (let office = 0; office < building[floor].length; office++) {
      if (building[floor][office][0].name == employee) {
        let address = building[floor][office][0].name;
        console.log("🚀 ~ file: Question02.js ~ line 52 ~ lookForEmployee ~ address", address);
        memory.push(address);
        console.log(`${employee} was found in floor number ${[floor + 1]} in office ${floor + 1}0${office + 1}`);
        console.log(memory);
      }
    }
  }
  console.log(memory);
}

function lookForEquipment(equipment) {
  if (memory.includes(equipment)) {
    return console.log("You already know where that equipment is");
  }
  for (let floor = 0; floor < building.length; floor++) {
    for (let office = 0; office < building[floor].length; office++) {
      if (building[floor][office][1].name == equipment) {
        let address = building[floor][office][1].name;
        console.log("🚀 ~ file: Question02.js ~ line 52 ~ lookForequipment ~ address", address);
        memory.push(address);
        console.log(`${equipment} was found in floor number ${[floor + 1]} in office ${floor + 1}0${office + 1}`);
        console.log(memory);
      }
    }
  }
  console.log(memory);
}

lookForEmployee("Alice");
lookForEmployee("Jerry");
lookForEmployee("Erika");
lookForEmployee("Erika");
lookForEquipment("Sarah's Computer");
lookForEquipment("Sarah's Computer");
console.log(memory);
