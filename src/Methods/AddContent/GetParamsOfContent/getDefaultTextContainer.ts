import RichText from "../../../Model/Slide/Content/Components/RichText";
import TextContainer from "../../../Model/Slide/Content/TextContainer";
import getDefaultContent from "./getDefaultContent";
import contentType from "../../../Const/ContentType";

function getDefaultTextContainer(): TextContainer {
    return {
        ...getDefaultContent(contentType.TextContainer),
        width: 100,
        richText: getDefaultRichText()
    };
}

function getDefaultRichText(): RichText {
    return {
        color: '#ffffff',
        font: 12,
        value: ''
    }
}

export default getDefaultTextContainer;
