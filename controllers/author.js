const authordata = require('../models/author')
const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://userone:userone@libraryfiles.o5pxy.mongodb.net/LIBRARYAPPNEW?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});
mongoose.connect('mongodb://localhost:27017/LIBRARYAPPNEW')

exports.getAuthors=(req,res)=>{
    const authors = authordata.find();
    // console.log(books)
    res.status(200).json({authors})
}
exports.getAuthor= (req,res)=>{
    // console.log(req.body)
    const author = 
     authordata.findOne({_id: req.body})

    // console.log(books)
    res.status(200).json({author})
}

exports.postAuthor =  (req,res)=>{
    // console.log(req);
    const {name} = req.body;
    const {countryname} =req.body;
    const {genre} = req.body;
    const image = 'http://localhost:3000/images/'+req.file.filename;
    const author = new authordata({
        name,
        countryname,
        genre,
        image
    })
    const createdAuthor =  author.save();
    res.status(201).json({
        author:{
            ...createdAuthor._doc
        }
    })
}

exports.putAuthor =  (req,res)=>{
 
    
   const { id} = req.body
    const {name} = req.body;
    const {countryname} =req.body;
    const {genre} = req.body;
    const image = 'http://localhost:3000/images/'+req.file.filename;
    console.log(name,countryname)
      authordata.findByIdAndUpdate({"_id":id},{$set:{ "name":name,
      "countryname":countryname,
      "genre":genre,
     
      "image":image}})
      .then(()=>{
        res.send();
      })
      .catch(()=>{
      
      })
      
      
}
