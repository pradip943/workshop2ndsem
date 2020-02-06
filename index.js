var express  = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors());      
app.use(express.static("root"));
let data =fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);
// json.push({"title":"pradip","desc":"rahul"});
// fs.writeFileSync("./posts.json",JSON.stringify(json,null,2));
app.use(express.json())

//GET method api
app.get("/post",(req,res)=>{
// data.push({"title":"ram","desc":"ahir"})  
	 res.send(data);
	// res.send(req.params)
	// res.send(req.query);
})
//post method api
app.post("/post",(req,res)=>{
	res.send(req.body);

    json.push({"title":"ram","desc":"ahir"});
    fs.writeFileSync("./posts.json",stringify(json,null,2));


})





                                       



app.listen(3000,()=>{console.log("listening on port 3000")});
