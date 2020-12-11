import ContentType from "../../Const/ContentType";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/GetParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import instanceOfRectangle from "../../Methods/AddContent/instanceOfRectangle";
import updateRectangleSize from "../../Methods/UpdateContent/updateRectangleSize";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content"
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";

describe('updateRectangleSizeTest', () => {
    let editor = new Editor();
    const rectangle: Rectangle = Object.assign(getDefaultShape(ContentType.Rectangle), {
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize()
    });

    editor.currentContent = rectangle;
    const newEditor = updateRectangleSize(editor, 200, 200)

    test('checkNewSize', () => {
        if (!instanceOfRectangle(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.rectangleSize).toStrictEqual({
            width: 200,
            height: 200
        });

        expect(checkInstance(newEditor?.currentContent)).toBe(true)
    });

    function checkInstance(content: Content | undefined) {
        if (instanceOfRectangle(content)) {
            return true;
        } else {
            return false
        }
    }
})