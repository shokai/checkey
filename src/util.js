export function uniq (arr) {
  if (!(arr instanceof Array)) throw new Error('argument must be an Array')
  const result = []
  for (let i of arr) {
    if (result.indexOf(i) > -1) continue
    result.push(i)
  }
  return result
}
