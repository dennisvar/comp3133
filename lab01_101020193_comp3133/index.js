const csv = require('csv-parser')
const fs = require('fs');
const countries = [];

function deleteFile(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlink(filePath);
            console.log(`Deleted ${filePath}`);
        }
    } catch (error) {
      console.error(`Got an error trying to delete the file: ${error.message}`);
    }
  }

deleteFile('canada.txt');
deleteFile('usa.txt');

fs.createReadStream('input_countries.csv')
	.pipe(csv())
	.on('data', (data) => countries.push(data))
	.on('end', () => { 
		parseFile(countries);
	});

function parseFile(data) {
    let canada = [], usa = [];
	for(let i = 0; i < data.length; i++) {
		let entry = '';
		if(data[i].country === 'Canada') {
			entry = data[i].country + ', ' + data[i].year + ', ' + data[i].population;
			canada.push(entry);

            let canadatxt = fs.createWriteStream('canada.txt');
            canadatxt.on('error', function(err) {} );
            canada.forEach(value => canadatxt.write(`${value}\n`));
            canadatxt.on('finish', () => {
                canadatxt.end();
            });
		}
		else if(data[i].country === 'United States') {
		 	entry = data[i].country + ', ' + data[i].year + ', ' + data[i].population;
			usa.push(entry);

            let usatxt = fs.createWriteStream('usa.txt');
            usatxt.on('error', function(err) {} );
            usa.forEach(value => usatxt.write(`${value}\n`));
            usatxt.on('finish', () => {
                usatxt.end();
            });
		}
	}
}