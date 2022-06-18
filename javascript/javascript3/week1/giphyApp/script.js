const gifNameInput = document.getElementById('gif-name');
const gifNumberInput = document.getElementById('gifs-number');
const searchBtn = document.getElementById('search-btn');
const gifList = document.getElementById('gif-list');

const gifTemplate = (gifUrl, gifTitle) => {
  const listItem = document.createElement('li');
  const listImg = document.createElement('img');

  listItem.className = 'gif__item';
  listImg.className = 'gif__img';
  listImg.src = gifUrl;
  listImg.alt = gifTitle;

  listItem.appendChild(listImg);

  return listItem;
};

const renderGifList = (gifList, output) => {
  const listFragment = document.createDocumentFragment();

  gifList.forEach((gif) => {
    const gifItem = gifTemplate(gif.images.downsized.url, gif.title);
    listFragment.appendChild(gifItem);
  });

  output.appendChild(listFragment);
};

const gifNumberEventHandler = (gifData, gifList) => {
  const newGifLimit = gifNumberInput.value;

  if (/^[0-9]+$/.test(newGifLimit)) {
    gifList.innerHTML = '';

    const newGifArray = gifData.data.slice(0, newGifLimit);

    renderGifList(newGifArray, gifList);
  } else {
    if (!newGifLimit) {
      gifList.innerHTML = '';
      renderGifList(gifData.data, gifList);
    } else {
      return;
    }
  }
};

searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  gifList.innerHTML = '';

  const gifName = gifNameInput.value;
  const apiLimit = gifNumberInput.value;
  const apiKey = 'T6hvvqbjUzckfDTQKRzmaA68TzxoR63K';
  let apiUrl;

  if (gifName) {
    apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${
      apiLimit || 10
    }&q=${gifName}`;
  } else {
    apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${
      apiLimit || 10
    }`;
  }

  const apiRequest = await fetch(apiUrl);
  const apiData = await apiRequest.json();

  renderGifList(apiData.data, gifList);

  gifNumberInput.addEventListener('keyup', () => {
    gifNumberEventHandler(apiData, gifList);
  });
});
