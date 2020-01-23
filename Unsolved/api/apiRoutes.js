//load data 

let tableData = require("../data/tables");

//route to data folder 

module.exports = function (app) {
    app.get("/api/tables"), function(req, res){
        res.json(tableData);
    };
    
    app.post("/api/tables", function(req, res){
        res.json(tableData);
    });

    app.post("/app/clear", function (req, res) {
        tableData.length = 0;
        res.json({ok: true});
        
    });
}

