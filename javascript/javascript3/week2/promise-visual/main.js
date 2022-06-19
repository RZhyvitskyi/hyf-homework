const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

// This function is working correct for redBox only, and I have no idea why.
// That's why I had to change line 47 and 48 in move-element.js to make all working correctly.
const getBoxMoveCoords = (boxToMove, targetBox) => {
  const realCoords = boxToMove.getBoundingClientRect();

  return {
    x: targetBox.x - realCoords.left,
    y: targetBox.y - realCoords.top,
  };
};

const redBoxMoveCoords = getBoxMoveCoords(redBox, { x: 20, y: 300 });
const blueBoxMoveCoords = getBoxMoveCoords(blueBox, { x: 400, y: 300 });
const greenBoxMoveCoords = getBoxMoveCoords(greenBox, { x: 400, y: 20 });

const translateOneByOne = async () => {
  await moveElement(redBox, redBoxMoveCoords);
  console.log('Red box was successfully moved');

  await moveElement(blueBox, blueBoxMoveCoords);
  console.log('Red box was successfully moved');

  await moveElement(greenBox, greenBoxMoveCoords);
  console.log('Red box was successfully moved');
};

const translateAllAtOnce = async () => {
  const promiseArray = [
    moveElement(redBox, redBoxMoveCoords),
    moveElement(blueBox, blueBoxMoveCoords),
    moveElement(greenBox, greenBoxMoveCoords),
  ];

  await Promise.all(promiseArray);
  console.log('All boxes were successfully moved');
};

// translateOneByOne();
translateAllAtOnce();
