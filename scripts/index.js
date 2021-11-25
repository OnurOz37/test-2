const csvFilePath="fichier_csv.csv"
const csv=require('csvtojson')
var fs = require('fs');
var jsonObj; 

// async function jsonFunction()
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);
    var data = {}
    data.table = []
    
    data.table.push(jsonObj)
        fs.writeFile ("JSON/input.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );

        })