import {createSchema, Type} from "ts-mongoose";

const testSchema = createSchema({
    name: Type.string({require: true}),
    something: Type.string({require: false}),
});

export default testSchema;
