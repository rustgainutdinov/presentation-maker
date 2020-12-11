import ContentType from "../../Const/ContentType";
import createRectangle from "../../Methods/AddContent/CreateRectangle";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/GetParamsOfContent/getDefaultRectangleSize";
import instanceOfRectangle from "../../Methods/AddContent/instanceOfRectangle";
import Editor from "../../Model/Editor";

describe('createRectangleTest', () => {
    const editor = new Editor();
    const rectangleType = ContentType.Rectangle;
    const newEditor = createRectangle(editor);

    test('addContentToEditor', () => {
        expect(newEditor.currentContent.type).toBe(rectangleType);
        expect(checkInstance()).toBe(true)

        if (!instanceOfRectangle(newEditor.currentContent)) {
            return;
        }

        expect(newEditor.currentContent.bottomRightCoordinate).toStrictEqual(getDefaultPosition());
        expect(newEditor.currentContent.rectangleSize).toStrictEqual(getDefaultRectangleSize());
    });

    function checkInstance() {
        if (instanceOfRectangle(newEditor.currentContent)) {
            return true;
        } else {
            return false
        }
    }
})