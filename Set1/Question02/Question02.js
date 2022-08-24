let functionCalls = 0;

function limitedFunction(fn, calls) {
  if (functionCalls < calls) {
    while (functionCalls < calls) {
      fn(functionCalls);
      functionCalls++;
    }
    return;
  }
  console.log("You have reached the limit");
}

function numberOfCalls(functionCalls) {
  console.log(`Call number ${functionCalls + 1}`);
}

limitedFunction(numberOfCalls, 4);
limitedFunction();
limitedFunction();
limitedFunction();
