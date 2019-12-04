import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.send('hello');
});

app.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기중입니다!');
});