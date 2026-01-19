const { default: mongoose } = require("mongoose")

exports.dbconfig = () => {
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("Database Connecteddd")
    }).catch((err) =>{
        console.log(err.message)
    })
}