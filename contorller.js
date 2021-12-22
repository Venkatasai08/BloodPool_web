var express = require("express");
var router = express().Router;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
mongoose.connect(process.env.MONGO_URL);
var db = mongoose.connection;
mongoose.set('debug', true);



var searchSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    mobilenumber:String,
    bloodgroup: String,
    age: Number,
    photo: String,
    aadharno: Number
})
var searchlist = new mongoose.model("users2", searchSchema)

exports.store = (req, res) => {

    var { username, password, name, email, mobilenumber, bloodgroup, age, photo, aadharno } = req.body;

    var createdoc = async () => {
        try {
            var data = new searchlist({
                "username": username,
                "password": password,
                "name": name,
                "email": email,
                "mobilenumber": mobilenumber,
                "bloodgroup": bloodgroup,
                "age": age,
                "photo": photo,
                "aadharno": aadharno

            })
            var waste = await await await searchlist.create(data);
            await res.send(waste) ;

        }
        catch (err) {
            console.log(err)

        }
    }
    var onefunction = async () => {
        var container = await searchlist.findOne({$or:[{ "mobilenumber" : `${mobilenumber}` },{"username": `${username}`},{"aadharno": aadharno}]});
        // console.log(container);
        try {
            if (container == null) {
                createdoc();

            }
            else {
                res.send(`already registered may be with this \n mobile number ="${mobilenumber}" \n or\n with this\n username "${username}"\n or\n with this\n aadharno "${aadharno}"`)
                console.log("already registerd")
            }
        } catch (err) {
            console.log(err)
        }

    }
    onefunction();



}



exports.find = (req, res) => {

    var bg = req.body.bloodgroup;

    console.log(bg);
    var searchfind = async () => {
        try {
            var search = await searchlist.find({ "bloodgroup": `${bg}` })
                .select({ name: 1 })
                .select({ age: 1 })
                .select({ bloodgroup: 1 });
            res.send(search);
            console.log(search);

        }
        catch (err) {
            console.log(err)
        }

    }
    searchfind();
}






exports.findind = (req, res) => {
    var alldetails = async () => {
        try {
            var id = req.params.id;
            var loginalldata = await searchlist.findOne({ "_id": `${id}` });
            res.send(loginalldata);
        }
        catch (err) {
            console.log(err);
        }
    }
    alldetails();


}






exports.login = (req, res) => {
    var { username, password } = req.body;
    console.log(username);
    console.log(password);
    var logindoc = async () => {
        try {
            var logindata = await searchlist.findOne({ $and: [{ "username": `${username}` }, { "password": `${password}` }] });
            if (logindata == null) {
                res.send("in correct credentials")
            }
            else {
                console.log(logindata);
                res.send(logindata);
            }


        } catch (err) {
            console(err);
        }
    }
    logindoc()
}





exports.findbybg = (req, res) => {

    var bgget = req.params.bg;

    console.log(bgget);
    var searchparamsfind = async () => {
        try {
            var search = await searchlist.find({ "bloodgroup": `${bgget}` })
                .select({ name: 1 })
                .select({ age: 1 })
                .select({ bloodgroup: 1 });
            res.send(search);
            console.log(search);

        }
        catch (err) {
            console.log(err)
        }

    }
    searchparamsfind();
}




exports.findall = (req, res) => {

    var bg = req.body.bloodgroup;

    console.log(bg);
    var searchallfind = async () => {
        try {
            var search = await searchlist.find();
            res.send(search);
            console.log(search);

        }
        catch (err) {
            console.log(err)
        }

    }
    searchallfind();
}
