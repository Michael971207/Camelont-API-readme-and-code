const apiUrl = "http://localhost:5000/customers";

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
