var fs = require('fs')

fs.readdir('./www', function (error, files) {
    if (error) { 
        return console.log('directory is not found')
    }

    console.log(files)
})
 