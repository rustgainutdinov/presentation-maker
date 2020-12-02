function addContentToEditor(editor: Editor, content: Content): string {
	const uuid: string = generateUuid();
	editor.currentContent = content;
	editor.currentSlide.contentList[uuid] = content;
	return uuid;
}
