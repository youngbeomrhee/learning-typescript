function paintPainting(painter, painting) {
  return painter.prepare().paint(painting, painter.ownMaterials).finish()
}

paintPainting()

export default paintPainting
