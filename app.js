
// load node modules
const express = require("express") 

// instantiate express
const app = express() 

// port 
const port = 3060 



// so we can use the views folder and ejs files
app.set("view engine", "ejs")

// middleware to post data to webpage
app.use(express.urlencoded({extended:true}))

// so we can serve css files or browser related js 
app.use(express.static("public"))

// to do list items 
let items = [] 


// get home page in route 
app.get("/", (req,res)=>{

    let today= new Date() 

    

    let options ={
        weekday:"long", 
        day:"numeric", 
        month:"long"
    }

    let  day = today.toLocaleDateString("en-US", options)
  
    // pass current date to home page 
    // our H1 
    res.render("index", {Day:day, items})

   
})

// so we can add items to do list 
app.post("/", (req,res)=>{
    let item = req.body.newItem

    items.push(item)
    console.log(item)

    res.redirect("/")
 })




// boilerplate error handling for establishing server 
app.listen(process.env.PORT || port , (e)=>{
    if(e){
        console.log("error establishing the server")
    }
    else{
        console.log("server is running on port " + port)
    }
})
