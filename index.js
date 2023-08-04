import express from "express";
import axios from "axios";

const app=express();
const port =3000;
const apiKey="fbaPS1WaHIYpY6kJPU5FVPgK8MlCjA8Yb6iYZAtS";

app.use(express.static("public"));
var answer;
app.get("/",async(req,res)=>{
    const result=await axios.get('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia',{
        headers: {
            'X-RapidAPI-Key': '56a813537dmshefe366a947c0696p10bbaejsn13f13d0319eb',
            'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
          }
    });

    const da={
        category:result.data[0].category,
        question:result.data[0].question,
    };
    answer=result.data[0].answer;
    res.render("index.ejs",da);
});



app.listen(port,()=>{
    console.log(`the server is running on ${port}.`)
})