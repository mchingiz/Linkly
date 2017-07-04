const routes = require('express').Router();
const api = require('./api/routes.js');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/collectionPhotos');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname.substr(file.originalname.lastIndexOf('.')+1));
    }
});
const upload = multer({
        storage: storage,
        fileFilter: require('./utils/fileFilter.js'),
        limits: {
            fileSize: 2*1024*1024,
        }
    });

routes.use('/api',api);

// Test route
routes.post('/test',upload.single('photo'),function(req,res){
    console.log('test');
    if(!req.file){
        res.sendStatus(400);
    }else{
        res.send('Done');
    }
});

routes.get('/',function(req,res){
    res.send('website homepage');
});


module.exports = routes;