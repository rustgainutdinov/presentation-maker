import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import TextContainer from "../../Model/Slide/Content/TextContainer";
import getDefaultContent from "../AddContent/GetParamsOfContent/getDefaultContent"
import {getDefaultTextContainer} from "./GetParamsOfContent/getDefaultTextContainer";
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
