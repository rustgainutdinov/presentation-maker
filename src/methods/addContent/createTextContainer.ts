import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import TextContainer from "../../model/slide/content/TextContainer";
import getDefaultContent from "../addContent/getParamsOfContent/getDefaultContent"
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";
import generateUuid from "../generateUuid";

function createTextContainer(editor: Editor): Editor {

    const TextContainer: TextContainer = {
        ...getDefaultContent(ContentType.TextContainer),
        ...getDefaultTextContainer()
    };
    const uuid = generateUuid();
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [uuid]: TextContainer
            }
        }
    };
}

export default createTextContainer;
