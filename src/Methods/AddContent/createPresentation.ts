import Editor from "../../Model/Editor";
import Presentation from "../../Model/Presentation";
import generateUuid from "../generateUuid";
import getDefaultPresentation from "./GetParamsOfContent/getDefaultPresentation";

function createPresentation(editor: Editor): Editor {
    const presentation: Presentation = {
        ...getDefaultPresentation()
    }
    const uuid = generateUuid();
    return {
        ...editor,
        currentPresentation: presentation
    }
}

export default createPresentation