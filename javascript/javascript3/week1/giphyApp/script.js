const gifNameInput = document.getElementById('gif-name');
const gifNumberInput = document.getElementById('gifs-number');
const searchBtn = document.getElementById('search-btn');
const gifList = document.getElementById('gif-list');

const gifTemplate = (gifUrl, gifTitle) => {
  return `<li class="gif__item">
    <img src="${gifUrl}" alt="${gifTitle}" class="gif__img" />
  </li>`;
};

const renderGifList = (gifList, output) => {
  gifList.forEach((gif) => {
    const gifItem = gifTemplate(gif.images.downsized.url, gif.title);
    output.insertAdjacentHTML('afterbegin', gifItem);
  });
};

const gifNumberEventHandler = (gifData, gifList) => {
  const newGifLimit = gifNumberInput.value;

  if (/^[0-9]+$/.test(newGifLimit)) {
    gifList.innerHTML = '';

    const newGifArray = gifData.data.slice(-newGifLimit);

    renderGifList(newGifArray, gifList);
  } else {
    return;
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
