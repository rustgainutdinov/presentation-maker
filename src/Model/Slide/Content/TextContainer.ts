import Content from "./Content"

type TextContainer = Content & {
	width: string,
	background: string,
	richText: RichText,
}

export default TextContainer