import express, { Request, Response } from 'express';

const port = 3001;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello Futuro Cientista!' });
});

app.get('/teachers', (req: Request, res: Response) => {
    const teachers = [
        {
            id: 1,
            name: "Lucas Labre"
        },
        {
            id: 2,
            name: "Matheus"
        }
    ];
    res.send(teachers);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}`);
});