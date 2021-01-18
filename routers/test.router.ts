import express from "express";
import {TestController} from "../controllers/TestController";
import {TestRepository} from "../db/repository/TestRepository";

const app = express.Router({mergeParams: true});

const projectController = new TestController(new TestRepository());

app.get('/', (req: any, res: any) => {
    res.send('Api is working.')
})

app.post('/test', async (req: any, res: any) => {
    return await projectController.create(req, res);
});

app.get('/test/:id', async (req: any, res: any) => {
    return await projectController.findById(req, res);
});

app.get('/test', async (req: any, res: any) => {
    return await projectController.getAll(req, res);
});

app.put('/test/:id', async (req: any, res: any) => {
    return await projectController.update(req, res);
});

app.delete('/test/:id', async (req: any, res: any) => {
    return await projectController.deleteById(req, res);
});

export default app;
