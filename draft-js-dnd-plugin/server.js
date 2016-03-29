import path from 'path';
import multer from 'multer';
import fs from 'fs';

/* Use like this with express

 app.post('/upload', require('draft-js-dnd-plugin/server')({
    folder: './publicTemplate/images'
 }));

 */

module.exports = function upload(options){
    // Simple upload endpoint
    var storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, options.folder);
        },
        filename: function (req, file, callback) {
            callback(null, file.originalname);
            //callback(null, file.fieldname + '-' + Date.now());
        }
    });
    var upload = multer({
        storage : storage,
        limits: {
            fields: 10,
            files: 3,
            fileSize: 1000000
        }
    }).array('files', 3);

    return [upload, function(req, res) {
        var file = req.files;
        setTimeout(function(){
            req.files.forEach(function(file){
                fs.unlink(file.path, function(err) {});
            })
        }, 1*60000);
        res.json({
            success: true,
            files: file.map(function(file){
                return {
                    encoding: file.encoding,
                    filename: file.filename,
                    mimetype: file.mimetype,
                    originalname: file.originalname,
                    size: file.originalname,
                    url: '/'+file.originalname
                }
            })
        });
    }];
}