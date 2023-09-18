interface Material {
  // 생략
}

interface Painter {
  finish(): boolean
  ownMaterials: Material[]
  paint(painting: string, materials: Material[]): boolean
}

function paintPainting(painter: Painter, painting: string): boolean {
  // painter. -> 자동완성 지원
  return true
}

export { paintPainting }
