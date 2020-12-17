import ContentType from "../../Const/ContentType";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/GetParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import instanceOfRectangle from "../../Methods/AddContent/instanceOfRectangle";
import updateRectangleBorder from "../../Methods/UpdateContent/updateRectangleBorder";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content"
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";

describe('updateRectangleBorderTest', () => {
    let editor = new Editor();
    const rectangle: Rectangle = Object.assign(getDefaultShape(ContentType.Rectangle), {
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize()
    });
    editor.currentContent = rectangle;
    const newEditor = updateRectangleBorder(editor, 2, "red", 1)

    test('checkNewBorder', () => {
        if (!instanceOfRectangle(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.border.color).toBe("red");
        expect(newEditor?.currentContent.border.width).toBe(2);
        expect(newEditor?.currentContent.border.type).toBe(1);

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