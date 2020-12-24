import Editor from "../../model/Editor";
import generateUuid from "../generateUuid";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import {Slide} from "../../model/slide/Slide";
import Circle from "../../model/slide/content/shape/Circle";
import getDefaultBorder from "./getParamsOfContent/getDefaultBorder";
import BorderType from "../../const/BorderType";

export default function (): Editor {
	const uuid = generateUuid();
	const content: Circle = {
		position: getDefaultPosition(),
		layer: 1,
		type: 3,
		uuid: uuid,
		radius: 50,
		border: getDefaultBorder(),
		background: '#FF0000',
		circle: undefined
	};
	const slide: Slide = {
		slideId: 1,
		background: "#fff",
		animation: 1,
		contentList: {
			[generateUuid()]: {
				position: {
					x: 150,
					y: 150
				},
				layer: 1,
				type: 3,
				uuid: uuid,
				radius: 70,
				border: {
					width: 5,
					color: '#000000',
					type: BorderType.SOLID,
				},
				background: '#0000FF',
				circle: undefined
			},
			[uuid]: content,
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
