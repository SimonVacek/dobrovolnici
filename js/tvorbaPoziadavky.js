let createButton = document.querySelector('#createRequest');

createButton.addEventListener('click', (event) => {
    let requestTitle = document.querySelector('#requestTitle').value;
    let requestDescription = document.querySelector('#requestDescription').value;
    const request = document.createElement('li');

    let template = `<h3>${requestTitle}</h3> <p>${requestDescription}</p>`;

    const data = fs.readFileSync('../json/posts.json');

    /*
    let jsonData = JSON.parse(fs.readFileSync("../json/posts.json")); 

    jsonData.posts.append(template); 
     
    fs.writeFileSync("data.json", JSON.stringify(jsonData));*/
    
});
/*
const fs = require('fs');

fs.readFile('../json/posts.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.text = 'Hello, World!';

    const updatedJson = JSON.stringify(jsonData, null, 2);

    fs.writeFile('../json/data.json', updatedJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Text added to JSON file successfully.');
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
}); */