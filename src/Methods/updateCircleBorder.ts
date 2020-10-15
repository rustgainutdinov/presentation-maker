function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!instanceOfCircle(editor.currentContent)) {
		return;
	}
	const circle: Circle = editor.currentContent;
	circle.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
}
