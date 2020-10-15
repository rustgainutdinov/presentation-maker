function changeCurrentContent(editor: Editor, newSlideId: string) {
	editor.currentContent = editor.currentSlide.contentList[newSlideId];
}
