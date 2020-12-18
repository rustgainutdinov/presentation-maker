import Content from "./Content"
import RichText from "./components/RichText";

type TextContainer = Content & {
	width: number,
	richText: RichText,
	textContainer: undefined
}

export default TextContainer
