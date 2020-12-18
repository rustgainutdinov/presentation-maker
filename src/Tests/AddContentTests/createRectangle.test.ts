import ContentType from "../../const/ContentType";
import createRectangle from "../../methods/addContent/createRectangle";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../methods/addContent/getParamsOfContent/getDefaultRectangleSize";
import instanceOfRectangle from "../../methods/addContent/instanceOfRectangle";
import Editor from "../../model/Editor";

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
