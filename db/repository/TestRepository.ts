import { RepositoryService } from "../../services/RepositoryService";
import ProjectModel from "../models/test";
export class TestRepository extends RepositoryService {
    constructor() {
        super("test", ProjectModel );
    }
}
