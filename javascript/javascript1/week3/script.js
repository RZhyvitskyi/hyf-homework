// Item array removal =================================================================================

const names = [
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

removeName(nameToRemove, names);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there?? ========================================================================

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const getTravelTime = ({ speed, destinationDistance }) => {
  const totalTime = (destinationDistance / speed) * 60;
  const hours = Math.floor(totalTime / 60);
  const minutes = Math.floor(totalTime % 60);

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
    const partOfLife =
      Math.round(((totalTimeWatched * 100) / myLifeInMinutes) * 10000) / 10000;

    console.log(`${item.title} took ${partOfLife}% of my life`);

    return prev + partOfLife;
  }, 0);

  console.log(`In total that is ${totalTimeTook}% of my life`);
};

getLostTImeOnSeries(seriesDurations, myLifeDurationYears);

//  Step 3: Smart-ease - Back to the basics! -----------------------------------------------------------

// NOnoN0nOYes (Note taking app) ================================================================

// Save a note
const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note
const getNote = (id) => {
  if (id === undefined) {
    return 'Please enter an id number';
  } else if (typeof id !== 'number') {
    return 'The id must be a number';
  }

  const yourNote = notes.find((item) => id === item.id);

  if (yourNote === undefined) {
    return "You don't have that note";
  }

  return yourNote;
};

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

const logOutNotesFormatted = () => {
  notes.map((item) => {
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
const date = new Date().toLocaleDateString('en-EU', {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const addActivity = (date, activity, duration) => {
  activities.push({ date, activity, duration });
};

addActivity(date, 'Youtube', 30);
addActivity(date, 'Facebook', 45);
// addActivity(date, 'Instagram', 30);

// Show my status
const showStatus = (activitiesList) => {
  const totalTime = activitiesList.reduce(
    (acc, activity) => acc + activity.duration,
    0
  );

  if (totalTime === 0) {
    console.log('Add some activities before calling showStatus');
    return;
  } else if (totalTime >= userTimeLimit) {
    console.log('You have reached your limit, no more smartphoning for you!');
    return;
  }

  console.log(
    `You have added ${activitiesList.length} activities. They amount to ${totalTime} min. of usage`
  );
};

showStatus(activities);

const mostUsedApp = (activitiesList) => {
  const maxTimeApp = activitiesList.sort((a, b) => a.duration - b.duration)[
    activitiesList.length - 1
  ];

  console.log(
    `You have spent most of the time in ${JSON.stringify(maxTimeApp)}`
  );
};

mostUsedApp(activities);
