const faker = require('faker');

// generate company names

for (let i = 0; i < 1000; i++) {
  let company = faker.company.companyName();
  fs.appendFile('./companies.txt', `\`${company}\`,${'\n'}`, (err) => {
    if (err) console.log(err);
  })
}

// generate images

for (let i = 0; i < 1000; i++) {
  let image = `https://picsum.photos/200/300/?${Math.floor(Math.random() * 100000)}`
  fs.appendFile('./images', `\`${image}\`,${'\n'}`, (err) => {
    if (err) console.log(err);
  })
}