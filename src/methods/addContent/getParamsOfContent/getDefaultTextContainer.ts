import RichText from "../../../model/slide/content/components/RichText";
import TextContainer from "../../../model/slide/content/TextContainer";
import getDefaultContent from "./getDefaultContent";
import contentType from "../../../const/ContentType";

function getDefaultTextContainer(): TextContainer {
	return {
		...getDefaultContent(contentType.TextContainer),
		width: 100,
		richText: getDefaultRichText(),
		textContainer: undefined
	};
}

function getDefaultRichText(): RichText {
	return {
		color: '#ffffff',
		font: 12,
		value: 'new Text'
	}
}

export {
	getDefaultTextContainer,
	getDefaultRichText
}
