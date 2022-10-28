import express,{Response,Request} from 'express'
import { Application } from 'express-serve-static-core'
import bodyParser from 'body-parser';


const app:Application=express();
const address="0.0.0.0.8000";

app.use(bodyParser.json());
app.get('./',(req:Request,res:Response)=>{
    res.send("Hello");
})

app.listen(8000,()=>{
    console.log(`Server is running in ${address}`);
})
