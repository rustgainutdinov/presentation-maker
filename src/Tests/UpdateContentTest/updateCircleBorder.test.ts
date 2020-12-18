import ContentType from "../../const/ContentType";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import instanceOfCircle from "../../methods/addContent/instanceOfCircle";
import updateCircleBorder from "../../methods/updateContent/updateCircleBorder";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import Circle from "../../model/slide/content/shape/Circle";

describe('updateCircleBorderTest', () => {
    let editor = new Editor();
    const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
        radius: 100
    });
    editor.currentContent = circle;
    const newEditor = updateCircleBorder(editor, 2, "red", 1);

    test('checkNewBorder', () => {
        if (!instanceOfCircle(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.border.color).toBe("red");
        expect(newEditor?.currentContent.border.width).toBe(2);
        expect(newEditor?.currentContent.border.type).toBe(1);

        expect(checkInstance(newEditor?.currentContent)).toBe(true)
    });

    function checkInstance(content: Content | undefined) {
        if (instanceOfCircle(content)) {
            return true;
        } else {
            return false
        }
    }
})
