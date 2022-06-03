// Item array removal =================================================================================

const namesArray = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';

const removeName = (name, nameArray) => {
  const indexOfNameToRemove = nameArray.indexOf(name);

  nameArray.splice(indexOfNameToRemove, 1);
};

removeName(nameToRemove, namesArray);

console.log(namesArray); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there?? ========================================================================

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const getTravelTime = ({ speed, destinationDistance }) => {
  const totalTimeInMinutes = (destinationDistance / speed) * 60;
  const hours = Math.floor(totalTimeInMinutes / 60);
  const minutes = Math.floor(totalTimeInMinutes % 60);

  return `${hours} hours and ${minutes} minutes`;
};

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life ====================================================================
const myLifeDurationYears = 80;
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const getLostTImeOnSeries = (seriesList, myLifeDuration) => {
  const myLifeInMinutes = myLifeDuration * 365 * 24 * 60;

  const totalTimeTook = seriesList.reduce((prev, item) => {
    const totalTimeWatched =
      item.days * 24 * 60 + item.hours * 60 + item.minutes;
    const partOfLife = (totalTimeWatched * 100) / myLifeInMinutes;

    console.log(`${item.title} took ${partOfLife.toFixed(3)}% of my life`);

    return prev + partOfLife;
  }, 0);

  console.log(`In total that is ${totalTimeTook.toFixed(3)}% of my life`);
};

getLostTImeOnSeries(seriesDurations, myLifeDurationYears);

//  Step 3: Smart-ease - Back to the basics! -----------------------------------------------------------
// NOnoN0nOYes (Note taking app) ================================================================

// Save a note
const notes = [];

function saveNote(content, id) {
  if (typeof content === 'string' && typeof id === 'number') {
    if (!content || !id) {
      throw new Error(`Content can't be empty and id can't be 0`);
    } else {
      notes.push({ content, id });
    }
  } else {
    throw new Error(
      `Please, make sure that ${content} is a 'string' and ${id} is a 'number'`
    );
  }
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note
const getNote = (id) => {
  if (typeof id !== 'number') {
    return 'The id must be a number';
  }

  const yourNote = notes.find((item) => id === item.id);

  if (!yourNote) {
    return "You don't have that note";
  }

  return yourNote;
};

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

const logOutNotesFormatted = () => {
  notes.forEach((item) => {
    console.log(
      `The note with id: ${item.id}, has the following note text: ${item.content}`
    );
  });
};

logOutNotesFormatted();

// Unique feature 'Delete note'

const deleteNote = (id) => {
  const indexOfNote = notes.findIndex((item) => id === item.id);
  notes.splice(indexOfNote, 1);
};

deleteNote(2);

// CactusIO-interactive (Smart phone usage app) ==========================================================

// Adding an activity
const activities = [];
const userTimeLimit = 80;
const date = new Date();
const formattedDate = `${date.getDay()}/${date.getMonth()}-${date.getFullYear()}`;

const addActivity = (currentDate, activity, duration) => {
  if (
    !currentDate ||
    typeof activity !== 'string' ||
    !activity ||
    typeof duration !== 'number'
  ) {
    throw new Error(
      `Please make sure you have entered date(string), activity(string), and duration (number)`
    );
  }

  const totalTimeSpentInApps = activities.reduce(
    (acc, activity) => acc + activity.duration,
    0
  );

  if (totalTimeSpentInApps >= userTimeLimit) {
    throw new Error(
      'You have reached your limit, no more smartphoning for you!'
    );
  } else {
    activities.push({ currentDate, activity, duration });
  }
};

addActivity(formattedDate, 'Youtube', 30);
addActivity(formattedDate, 'Facebook', 45);

// Show my status
const showStatus = (activitiesList) => {
  const totalTimeSpentInApps = activitiesList.reduce(
    (acc, activity) => acc + activity.duration,
    0
  );

  if (!totalTimeSpentInApps) {
    throw new Error('Add some activities before calling showStatus');
    return;
  } else if (totalTimeSpentInApps >= userTimeLimit) {
    console.log('You have reached your limit, no more smartphoning for you!');
    return;
  }

  console.log(
    `You have added ${activitiesList.length} activities. They amount to ${totalTimeSpentInApps} min. of usage`
  );
};

showStatus(activities);

const mostUsedApp = (activitiesList) => {
  if (!activitiesList.length) {
    throw new Error('Add some activities to know what is the most used app');
  } else {
    const maxTimeApp = activitiesList.sort((a, b) => a.duration - b.duration)[
      activitiesList.length - 1
    ];

    console.log(`You have spent most of the time in ${maxTimeApp.activity}`);
  }
};

mostUsedApp(activities);
