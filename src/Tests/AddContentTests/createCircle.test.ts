import ContentType from "../../Const/ContentType";
import createCircle from "../../Methods/AddContent/CreateCircle";
import instanceOfCircle from "../../Methods/AddContent/instanceOfCircle";
import Editor from "../../Model/Editor";

describe('createCircleTest', () => {
    const editor = new Editor();
    const circleType = ContentType.CIRCLE;

    test('addContentToEditor', () => {
        createCircle(editor);
        expect(editor.currentContent.type).toBe(circleType);
        expect(checkInstance()).toBe(true)

        if (!instanceOfCircle(editor.currentContent)) {
            return;
        }

        expect(editor.currentContent.radius).toBe(100);
    });

    function checkInstance() {
        if (!instanceOfCircle(editor.currentContent)) {
            return false;
        } else {
            return true
        }
    }
})