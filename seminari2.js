let jsonData;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    jsonData = json;
    console.log(jsonData);

    const result1 = jsonData.filter(json1 => json1.id < 10);
    console.log(result1);

    const totalAges = result1.reduce((total, result1) => total + result1.id, 0);
    console.log(totalAges);

    const titleAndBody = result1.map(result1 => ({
      fullInfo: `${result1.title} ${result1.body}`
    }));
    console.log(titleAndBody);
  })
  .catch(error => console.error('Error fetching data:', error));

