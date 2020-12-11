import getNewEditor from "../../Methods/AddContent/getNewEditor";
import Editor from "../../Model/Editor";

describe('getNewEdiitorTest', () => {
    const editor = new Editor();
    const newEditor = getNewEditor(editor);

    test('getNewEditor', () => {
        expect(newEditor).toStrictEqual(editor);
    });
})