// initialize an empty array representing the current line

var ourDeliLine = [];
var number = 1;

// create a function takeANumber, returning a person's position in line

function takeANumber(ourDeliLine) {
  ourDeliLine.push(number);
  number++;
  let greeting = `Welcome, You are number ${number - 1}`;
  return greeting;
}

function endOfDay(ourDeliLine) {
  number = 1;
  return "Day Complete";
}


// create a function nowServing, returning the first person in line then removing them from the line

function nowServing(ourDeliLine) {
  if (ourDeliLine.length !== 0) {
    let serveAndRemove = ourDeliLine.shift(); // returns the first person and removes them
    return `Currently serving ${serveAndRemove}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}


// create a function currentLine, returning the current line as a string

function currentLine(ourDeliLine) {
  if (ourDeliLine.length !== 0) {
    let tempArray = [];                           // storing values from the for loop into this array
    for (let i = 0; i < ourDeliLine.length; i++) {
      tempArray.push(`${i + 1}. ${ourDeliLine[i]}`);
    }
    
    return `The line is currently: ${tempArray.join(', ')}`;   // uses the temp array to join each person with the proper syntax (a comma and space)
    
  }
  else {
    return "The line is currently empty.";
  }
}