import path from 'path';
import fs from 'fs';

export default function loadFilesFromDisk(filePath, regexToMatch) {

  /*
  return new Promise((resolve, reject) => {
    fs.readFile();
  });
  */

  if (!fs.existsSync()) {

  }

}

function fromDir(startPath,filter,callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

fromDir('../LiteScript',/\.html$/,function(filename){
    console.log('-- found: ',filename);
});
