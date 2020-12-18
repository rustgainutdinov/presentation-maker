import getNewEditor from "../../methods/addContent/getNewEditor";
import Editor from "../../model/Editor";

describe('getNewEdiitorTest', () => {
    const editor = new Editor();
    const newEditor = getNewEditor(editor);

    test('getNewEditor', () => {
        expect(newEditor).toStrictEqual(editor);
    });
})
