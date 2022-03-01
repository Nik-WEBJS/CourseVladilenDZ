//Признаюсь честно скомуниздил код с инета так и не понял как его записать)
async function fetchJSONAsync(url, init) {
  let response = await fetch(url, init);
  if (response.ok) {
      let json = await response.json();
      return json;
  }
  else
      throw new Error(`${response.status}: ${response.statusText}`);
}

const getTodosByIds = ids => {
  const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
  return Promise.all(ids.map(id => fetchJSONAsync(`${TODOS_URL}/${id}`)));
}

(async function main() {
  try {
      let allTasks = await getTodosByIds([43, 21, 55, 100, 10]);
      console.log(allTasks);
  } catch (error) {
      console.log(error.message)
  }
})();