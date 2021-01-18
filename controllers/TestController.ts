import {TestRepository} from "../db/repository/TestRepository";

export class TestController {

    constructor(private readonly testRepository: TestRepository) {

    }

    async findById(req: any, res: any) {
        const result = await this.testRepository.findOne({_id: req.params.id}).catch((err: any) => {
        });
        res.json(result || 'not found');
    }

    async getAll(req: any, res: any) {
        const result = await this.testRepository.find({}).catch((err: any) => {
        });
        res.json(result || 'not found');
    }

    async create(req: any, res: any) {
        const saved = await this.testRepository.save(req.body).then((result: any) => {
            return result;
        }).catch((err: any) => {
            res.status(400);
            return err;
        });

        res.send(saved)
    }

    async update(req: any, res: any) {
        const result = await this.testRepository.update({
            _id: req.params.id
        }, req.body).catch((err: any) => {
            res.status(404);
            return err;
        });
        res.send({
            message: result?.nModified + " modified.",
        })
    }

    async deleteById(req: any, res: any) {
        this.testRepository.remove({_id: req.params.id}).then((result: any) => {
            return result;
        }).catch((err: any) => {
            res.status(400);
            return err;
        });

        res.send({
            message: 'deleted. ' + req.params.id
        });
    }

}
