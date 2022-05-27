let userName;

const toDoList = [];

const userNameIntro = ['Hello', 'my', 'name', 'is'];
const userNameRequest = ['What', 'is', 'my', 'name'];
const userAddToDos = ['Add', 'to', 'my', 'todo'];
const userRemovedFromToDos = ['Remove', 'from', 'my', 'todo'];
const userRequestToDo = ['What', 'is', 'on', 'my', 'todo'];
const userRequestDay = ['What', 'day', 'is', 'it', 'today?'];
const userRequestCalculation = ['What', 'is'];
const userRequestSetTimer = ['Set', 'a', 'timer', 'for', 'minutes'];
const userRequestMood = ['How', 'is', 'your', 'mood', 'today?'];

const findDifferenceBetweenReqAndRes = (request, possibleReq) => {
  return request.filter((item) => !possibleReq.includes(item)).join(' ');
};

const checkForSimilarity = (userRequest, possibleRequest) => {
  return possibleRequest.every((item) => userRequest.includes(item));
};

const getReply = (command) => {
  const userCommand = command.split(' ');

  if (checkForSimilarity(userCommand, userNameIntro)) {
    userName = findDifferenceBetweenReqAndRes(userCommand, userNameIntro);

    if (userName[0] === '' || userName.length === 0) {
      return console.log('Please enter your name');
    } else return console.log(`nice to meet you ${userName}`);
  }

  if (checkForSimilarity(userCommand, userNameRequest)) {
    if (userName === undefined || userName.length === 0 || userName[0] === '') {
      return console.log('User name is not set');
    } else {
      return console.log(`Your name is ${userName}`);
    }
  }

  if (checkForSimilarity(userCommand, userAddToDos)) {
    toDoList.push(findDifferenceBetweenReqAndRes(userCommand, userAddToDos));
    return console.log(`${toDoList[toDoList.length - 1]} added to your todo`);
  }

  if (checkForSimilarity(userCommand, userRemovedFromToDos)) {
    const itemToDelete = findDifferenceBetweenReqAndRes(
      userCommand,
      userRemovedFromToDos
    );

    if (toDoList.includes(itemToDelete)) {
      toDoList.splice(toDoList.indexOf(itemToDelete), 1);
      return console.log(`Removed ${itemToDelete} from your todo`);
    } else {
      return console.log(`${itemToDelete} is not found in your todo list`);
    }
  }

  if (checkForSimilarity(userCommand, userRequestToDo)) {
    return console.log(
      `You have ${toDoList.length} todos - ${toDoList.join(' and ')}`
    );
  }

  if (checkForSimilarity(userCommand, userRequestDay)) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return console.log(today);
  }

  if (checkForSimilarity(userCommand, userRequestCalculation)) {
    const itemToCalculate = findDifferenceBetweenReqAndRes(
      userCommand,
      userRequestCalculation
    );

    return console.log(eval(itemToCalculate));
  }

  if (checkForSimilarity(userCommand, userRequestSetTimer)) {
    const timerNumber = findDifferenceBetweenReqAndRes(
      userCommand,
      userRequestSetTimer
    );

    window.setTimeout(() => {
      console.log('Timer done');
    }, 4000);

    return console.log(`Timer set for ${timerNumber} minutes`);
  }

  if (checkForSimilarity(userCommand, userRequestMood)) {
    const radomNumber = Math.floor(Math.random() * 3 + 1);

    switch (radomNumber) {
      case 1:
        console.log('Good');
        break;
      case 2:
        console.log('Ok');
        break;
      case 3:
        console.log('Bad');
        break;
    }

    return;
  }
};

getReply('Hello my name is Benjamin');
getReply('What is my name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Add cooking to my todo');
getReply('Remove fishing from my todo');
getReply('What is on my todo');
getReply('What day is it today?');
getReply('What is 3 * 3');
getReply('Set a timer for 4 minutes');
getReply('How is your mood today?');
