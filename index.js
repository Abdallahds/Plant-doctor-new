const express = require("express")

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"))
app.listen(3000,()=>{
    console.log("the servier is on using port 3000")
})


app.get("/",(req,res)=>{
    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);
    console.log(timeString);
    
    res.render(__dirname+"/index.ejs", {time:timeString})
})