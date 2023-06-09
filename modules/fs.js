const fs = require('fs')
const path = require('path')

const fileOps = async () => {
    try{
        const data = await fs.readFile(path.join(__dirname, 'templates', 'new.txt'), 'utf-8');
        console.log(data);
        await fs.writeFile(path.join(__dirname, 'templates', 'promiseWrite.txt'), data);
        await fs.writeFile(path.join(__dirname, 'templates', 'promiseWrite.txt'), '\n\nNice too meet you!');
        await fs.writeFile(path.join(__dirname, 'templates', 'promiseWrite.txt'), path.join(__dirname, 'templates', 'promiseComplete.txt'));

        const newData = await fs.readFile(path.join(__dirname, 'templates', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);

    } catch (err){
        console.error(err);
    }
}


// mkdir
// fs.mkdir(path.join(__dirname, 'templates'), err =>{
//     if (err) throw new Error()
//     console.log('Folder was created successfully');
// })

// writeFile and append and rename
// fs.writeFile(path.join(__dirname, 'templates', 'text.txt'), 'Create new text file', err =>{
//     if (err) throw new Error()
//     console.log('File was created successfully');

//     fs.appendFile(path.join(__dirname, 'templates', 'text.txt'), ' and append new text', err =>{
//         if (err) throw new Error()
//         console.log('File was changed successfilly');
        
//         fs.rename(path.join(__dirname, 'templates', 'text.txt'), path.join(__dirname, 'templates', 'text.txt'), err => {
//             if (err) throw new Error()

//             console.log('Rename completed!');
//         })

//         fs.appendFile(path.join(__dirname, 'templates', 'text.txt'), '\n\nYes it is', err => {
//             if (err) throw new Error()
//             console.log('Append completed');
//         })

//         fs.readFile(path.join(__dirname, 'templates', 'text.tx'), 'utf-8', (err, data) => {
//             if (err) throw new Error()
//             console.log(data); 
//         })
//     })
// })