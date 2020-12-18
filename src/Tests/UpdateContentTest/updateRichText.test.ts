import ContentType from "../../const/ContentType";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import getDefaultTextContainer from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../methods/addContent/instanceOfText";
import { updateRichTextColor, updateRichTextFont, updateRichTextValue } from "../../methods/updateContent/updateRichText";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import TextContainer from "../../model/slide/content/TextContainer";

function checkInstance(content: Content | undefined) {
    if (instanceOfTextContainer(content)) {
        return true;
    } else {
        return false
    }
}

let editor = new Editor();
const textContainer: TextContainer = Object.assign(getDefaultShape(ContentType.TextContainer),
    Object.assign(getDefaultTextContainer()));

editor.currentContent = textContainer;

describe('updateRichTextColorTest', () => {
    test('checkNewRichTextColor', () => {
        const newEditor = updateRichTextColor(editor, "red");
        if (!instanceOfTextContainer(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.richText.color).toBe("red");
        expect(checkInstance(newEditor?.currentContent)).toBe(true);
    })
});

describe('updateRichTextFontTest', () => {
    let editor = new Editor();
    const TextContainer: TextContainer = Object.assign(getDefaultShape(ContentType.TextContainer),
        Object.assign(getDefaultTextContainer()));

    editor.currentContent = TextContainer;

    test('checkNewRichTextFont', () => {
        const newEditor = updateRichTextFont(editor, 20);
        if (!instanceOfTextContainer(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.richText.font).toBe(20);
        expect(checkInstance(newEditor?.currentContent)).toBe(true);
    });
});

describe('updateRichTextValueTest', () => {
    let editor = new Editor();
    const TextContainer: TextContainer = Object.assign(getDefaultShape(ContentType.TextContainer),
        Object.assign(getDefaultTextContainer()));

    editor.currentContent = TextContainer;

    test('checkNewRichTextValue', () => {
        const newEditor = updateRichTextValue(editor, "newText");
        if (!instanceOfTextContainer(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.richText.value).toBe("newText");
        expect(checkInstance(newEditor?.currentContent)).toBe(true);
    });
});
