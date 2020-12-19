import Editor from "../../../Model/Editor";
import TextContainer from "../../../Model/Slide/Content/TextContainer";
import Slide from "../../../Model/Slide/Slide";
import generateUuid from "../../generateUuid";
import getDefaultPosition from "./getDefaultPosition";
import getDefaultPresentation from "./getDefaultPresentation";
import { getDefaultRichText } from "./getDefaultTextContainer";

function getDefaultEditor(): Editor {
    const uuid = generateUuid();

    const firstContent: TextContainer = {
        position: getDefaultPosition(),
        layer: 1,
        type: 3,
        uuid: uuid,
        richText: getDefaultRichText(),
        width: 100,
        textContainer: undefined
    };
    const presentation = getDefaultPresentation();

    const slide: Slide = {
        slideId: 1,
        background: "#fff",
        animation: 1,
        contentList: {
            [uuid]: firstContent
        }
    };
    const editor: Editor = {
        currentPresentation: presentation,
        currentSlide: slide,
        currentContent: firstContent
    };
    return editor
}

export default getDefaultEditor