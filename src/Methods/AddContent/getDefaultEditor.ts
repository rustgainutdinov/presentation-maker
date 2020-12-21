import Editor from "../../model/Editor";
import generateUuid from "../generateUuid";
import TextContainer from "../../model/slide/content/TextContainer";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import {getDefaultRichText} from "./getParamsOfContent/getDefaultTextContainer";
import Slide from "../../model/slide/Slide";

export default function (): Editor {
	const uuid = generateUuid();
	const content: TextContainer = {
		position: getDefaultPosition(),
		layer: 1,
		type: 3,
		uuid: uuid,
		richText: getDefaultRichText(),
		width: 100,
		textContainer: undefined
	};
	const slide: Slide = {
		slideId: 1,
		background: "#fff",
		animation: 1,
		contentList: {
			[uuid]: content
		}
	};
	return {
		currentPresentation: {
			name: "newPresentation",
			date: new Date(),
			author: "newAuthor",
			sliderList: [slide]
		},
		currentContent: content,
		currentSlide: slide
	}
}
