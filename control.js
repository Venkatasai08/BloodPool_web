const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bloodpool:1234567890@cluster0.s2ltg.mongodb.net/myDatabase?retryWrites=true&w=majority");
var db = mongoose.connection;




 exports.find = (req,res) =>{
    var searchSchema = new mongoose.Schema({
        username: String,
        password :String,
        name : String,
        email : String,
        bloodgroup :String,
        age :Number,
        photo :String,
        aadharno :Number
    })
      var searchlist = new mongoose.model("users2", searchSchema)





    
 var bg=req.body;
 console.log(bg);
var searchfind = async () => {

    var search = await searchlist.find({ bloodgroup: bg });
    console.log(search);
}
searchfind()

     
}







































const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bloodpool:1234567890@cluster0.s2ltg.mongodb.net/myDatabase?retryWrites=true&w=majority");
var db = mongoose.connection;

exports.store = (req, res) => {


    var searchSchema = new mongoose.Schema({
        username: String,
        password: String,
        name: String,
        email: String,
        bloodgroup: String,
        age: Number,
        photo: String,
        aadharno: Number
    })
    var searchlist = new mongoose.model("users2", searchSchema);




    var { username, password, name, email, bloodgroup, age, photo, aadharno } = req.body;




    
    var createdoc = async () => {
        try {
            var data = new searchlist({
                "username": username,
                "password": password,
                "name": name,
                "email": email,
                "bloodgroup": bloodgroup,
                "age": age,
                "photo": photo,
                "aadharno": aadharno

            })
            var dataElements = await searchlist.insertOne(data, (err, coll) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log("data stored");
                    res.send("successfully stored")
                }

            })

        }
        catch (err) {
            console.log("error ")
        }
    }

    createdoc();




}









