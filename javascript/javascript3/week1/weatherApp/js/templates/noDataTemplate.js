const noDataTemplate = (noDataMessage) => {
  return `<div class="weather-wrapper">
    <p class="error">${noDataMessage}</p>
  </div>`;
};

export default noDataTemplate;
