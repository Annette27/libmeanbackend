const multer = require("multer")

const diskStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
            },
    filename:  (req,file,cb)=>{
            // const mimeType = file.mimetype.split('/');
            // const fileType = mimeType[1];

            const fileName = file.originalname;
            // console.log(mimeType,fileType,filename)
        //    console.log(fileName)

            cb(null,fileName)
        }  
});
// const fileFilter = (req,file,cb)=>{
//     const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
//     allowedMimeTypes.includes(file.mimeType) ? cb(null,true) : cb(null,false)
// }
const storage = multer({storage:diskStorage})

module.exports = storage;
