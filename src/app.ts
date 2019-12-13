import  express, { Application } from "express";

const app: Application = express();
      app.get('/', (request, response)=>{
          response.send('<h1>Hey express and typescript goot to see you togoether</h1>')
      })

      app.listen('2711',()=>{ console.log('Listing to port 2711'); })

      //npm run dev
      //npm run build
      //npm run start