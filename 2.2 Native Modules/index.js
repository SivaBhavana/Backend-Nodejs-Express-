const fs=require("fs");
// fs.writeFile("mess.txt", "hello from Node Js...." ,(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.readFile('mess.txt',"utf8",(err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }); 

fs.readFile('mess.txt',"UTF-8",(err, data) => {
      if (err) throw err;
       console.log(data);
     });  

