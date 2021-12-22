const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bloodpool:1234567890@cluster0.s2ltg.mongodb.net/myDatabase?retryWrites=true&w=majority");
var db = mongoose.connection;




exports.find = (req, res) => {
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
    var searchlist = new mongoose.model("users2", searchSchema)





    var bg = req.body;
    console.log(bg);
    
    var searchfind = async (res,req) => {
        


        var search = await searchlist.find({ bloodgroup: "ab-"}
            
           
        );
        console.log(search);
    }
    searchfind()


}











var onefunction = async () => {
    var container = await searchlist.findOne({$or:[{ "mobilenumber" : `${mobilenumber}` },{"aadharno": aadharno},{"username": `${username}`}]});
    console.log(container);
    try {
        if (container == null) {
            createdoc();

        }
        else {
            res.send("already registered")
            console.log("already registerd")
        }
    } catch (err) {
        console.log(err)
    }

}
