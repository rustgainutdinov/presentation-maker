import Presentation from "./Presentation";
import Content from "./Slide/Content/Content";
import Slide from "./Slide/Slide";
type Editor = {
	currentPresentation: Presentation;
	currentSlide: Slide;
	currentContent: Content;
}

export default Editor
