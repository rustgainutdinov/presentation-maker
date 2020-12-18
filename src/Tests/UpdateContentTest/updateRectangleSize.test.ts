import ContentType from "../../const/ContentType";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../methods/addContent/getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import instanceOfRectangle from "../../methods/addContent/instanceOfRectangle";
import updateRectangleSize from "../../methods/updateContent/updateRectangleSize";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import Rectangle from "../../model/slide/content/shape/Rectangle";

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
