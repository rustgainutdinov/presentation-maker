import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import TextContainer from "../../Model/Slide/Content/TextContainer";
import getDefaultContent from "../AddContent/GetParamsOfContent/getDefaultContent"
import getDefaultTextContainer from "./GetParamsOfContent/getDefaultTextContainer";
import addContentToEditor from "./addContentToEditor";

function createTextContainer(editor: Editor): Editor {

    const TextContainer: TextContainer = Object.assign(getDefaultContent(ContentType.TextContainer),
        Object.assign(getDefaultTextContainer())
    );
    return addContentToEditor(editor, TextContainer);
}

export default createTextContainer;