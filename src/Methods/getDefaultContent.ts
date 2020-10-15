function getDefaultContent(contentType: number): Content {
	return {
		position: getDefaultPosition(),
		layer: 0,
		type: contentType
	}
}
