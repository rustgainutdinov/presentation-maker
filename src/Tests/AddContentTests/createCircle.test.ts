import ContentType from "../../Const/ContentType";
import createCircle from "../../Methods/AddContent/createCircle";
import instanceOfCircle from "../../Methods/AddContent/instanceOfCircle";
import Editor from "../../Model/Editor";

describe('createCircleTest', () => {
    const editor = new Editor();
    const circleType = ContentType.CIRCLE;
    const newEditor = createCircle(editor);

    test('addContentToEditor', () => {
        expect(newEditor.currentContent.type).toBe(circleType);
        expect(checkInstance()).toBe(true)

        if (!instanceOfCircle(newEditor.currentContent)) {
            return;
        }

        expect(newEditor.currentContent.radius).toBe(100);
    });

    function checkInstance() {
        if (instanceOfCircle(newEditor.currentContent)) {
            return true;
        } else {
            return false
        }
    }
})