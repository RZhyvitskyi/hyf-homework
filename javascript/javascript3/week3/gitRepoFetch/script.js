const usersList = document.getElementById('users-list');

// Created list items in pure JS style
const createUserItem = (user) => {
  const userItem = document.createElement('li');
  const userName = document.createElement('h2');
  const repoList = document.createElement('ul');

  userName.innerHTML = user.items[0].owner.login;
  userItem.classList.add('git-users__item');

  userItem.appendChild(userName);
  userItem.appendChild(repoList);

  user.items.forEach((item) => {
    const repoItem = document.createElement('li');
    const repoTitle = document.createElement('span');
    const repoLink = document.createElement('a');

    repoTitle.innerHTML = item.name;
    repoLink.href = item.html_url;
    repoLink.innerHTML = item.html_url;
    repoLink.target = '_blank';

    repoItem.appendChild(repoTitle);
    repoItem.appendChild(repoLink);
    repoList.appendChild(repoItem);
  });

  return userItem;
};

const getList = async (userNameOne, userNameTwo, userNameThree) => {
  try {
    const urlUseOne = `https://api.github.com/search/repositories?q=user:${userNameOne}`;
    const urlUseTwo = `https://api.github.com/search/repositories?q=user:${userNameTwo}`;
    const urlUseThree = `https://api.github.com/search/repositories?q=user:${userNameThree}`;

    const apiRequestAll = await Promise.all([
      fetch(urlUseOne),
      fetch(urlUseTwo),
      fetch(urlUseThree),
    ]);

    if (apiRequestAll[0].status === 403) {
      throw {
        status: 403,
        message: `Please do not refresh so frequently`,
      };
    }

    const usersData = await Promise.all(
      apiRequestAll.map(async (data) => await data.json())
    );

    return usersData;
  } catch (error) {
    return error;
  }
};

const renderList = async () => {
  try {
    const usersData = await getList('RZhyvitskyi', 'Lokesh-sw', 'Mahlunette');

    console.log(usersData);

    if (usersData.status === 403) {
      throw usersData.message;
    }

    const usersListFragment = document.createDocumentFragment();

    usersData.forEach((user) =>
      usersListFragment.appendChild(createUserItem(user))
    );

    usersList.appendChild(usersListFragment);
  } catch (error) {
    const errorItem = document.createElement('li');
    errorItem.innerHTML = `${error}`;
    usersList.appendChild(errorItem);
  }
};

window.addEventListener('load', renderList);
