import Content from "./Content"
import RichText from "./Components/RichText";

type TextContainer = Content & {
	width: string,
	background: string,
	richText: RichText,
}

export default TextContainer
