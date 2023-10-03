function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  const names = ["Alice", "Bob", "Carol"];
  const event = "birthday party";
  
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);
  assert.deepEqual(thankYouMessages, [
    "Thank you, Guadalupe, for attending the surprise event.",
    "Thank you, Ollie, for attending the surprise event.",
    "Thank you, Aki, for attending the surprise event."
  ]);
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
