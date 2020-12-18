import ContentType from "../../const/ContentType";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../methods/addContent/getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import instanceOfRectangle from "../../methods/addContent/instanceOfRectangle";
import updateRectangleBorder from "../../methods/updateContent/updateRectangleBorder";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import Rectangle from "../../model/slide/content/shape/Rectangle";

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
