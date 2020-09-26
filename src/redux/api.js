const todoApis = {
  getAll: () =>
    fetch('http://www.mocky.io/v2/5cb66f093200005b00cd4498').then((resp) =>
      resp.json(),
    ),
};

export {todoApis};
