import Content from "./Content"
import RichText from "./Components/RichText";

type TextContainer = Content & {
	width: number,
	richText: RichText,
	textContainer: undefined
}

export default TextContainer
