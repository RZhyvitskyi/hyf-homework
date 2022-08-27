const noDataTemplate = (noDataMessage) => {
  return `<div class="weather__wrapper">
    <p class="error">${noDataMessage}</p>
  </div>`;
};

export default noDataTemplate;
