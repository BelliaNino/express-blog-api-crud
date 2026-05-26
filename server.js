import express from 'express';
import postsRoutes from './routers/routes.js';

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(express.json());
app.use('/posts' , postsRoutes)


//http://localhost:3000

app.get('/', (request, response) => {
    response
        .type('html')
        .send('<h1>Express blog api crud</h1>')
})


app.listen(port, (error) => {
    if (error) {
        console.error('Il server ha riscontrato un problema');
    } else {
        console.log(`Server in ascolto porta ${port}`);
    }
});