import { getAngle, Vec, diffVec } from "@/assets/ts/math/vec"

export const getHvAngle = (innerTopMidpoint: Vec, circleCenter: Vec, mousePos: Vec) => {
  const mouseVec = diffVec(mousePos, circleCenter)
  const angleSize = getAngle(
    diffVec(innerTopMidpoint, circleCenter),
    mouseVec
  )
  if (mouseVec.x >= 0) return angleSize
  return 2 * Math.PI - angleSize
}
