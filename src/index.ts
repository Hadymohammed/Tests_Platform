import express,{Response,Request} from 'express'
import { Application } from 'express-serve-static-core'
import bodyParser from 'body-parser';

const port=8080;
const app:Application=express();
const address=`0.0.0.0.${port}`;

app.use(bodyParser.json());
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log(`Server is running in ${address}`);
})
