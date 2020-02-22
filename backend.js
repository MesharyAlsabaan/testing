var connection = require('tedious').Connection;
// if you want to request from the server update -insert
var Request = require('tedious').Request;
// وش نوع اللي مسجله في الجدول
var TYPES= require('tedious').TYPES;



var config ={
    userName:"DB_A558DF_sudokuvs_admin",
    Password:'Mm121212',
    server:'sql5052.site4now.net'

};

var myconnect = new connection(config);

myconnect.on('connect',function (err) {

    console.log("erverything is good ");
//    insertdata();
});

/*function insertdata() {
    request = new Request("INSERT into [DB_A558DF_sudokuvs].[dbo].[s] (firstname,lastname)VALUES(@firstname,@lastname);", function (err) {
        if (err) {
            console.log(err);
        }

    });

    request.addParameter('firstname', TYPES.NVarChar, 'meshary');
    request.addParameter('lastname', TYPES.NVarChar, 'alsabaan');

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log("null");
            } else {
                console.log("Item is inserted" + column.value);
            }

        });

    });

    myconnect.execSql(request);


}

*/

