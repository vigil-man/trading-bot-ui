export const mergeSortedArrays = (array1, array2, array1Key, array2Key) => {
  const result = []
  if (array1.length && array2.length) {
    let arr1i = 0
    let arr2i = 0
    while (arr1i < array1.length || arr2i < array2.length) {
      if (arr1i === array1.length) {
        result.push(...array2.slice(arr2i))
        break
      }
      if (arr2i === array2.length) {
        result.push(...array1.slice(arr1i))
        break
      }
      const array1Timestamp = array1[arr1i][array1Key]
      const array2Timestamp = array2[arr2i][array2Key]
      if (array1Timestamp < array2Timestamp) {
        result.push(array1[arr1i])
        arr1i++
      } else if (array1Timestamp > array2Timestamp) {
        result.push(array2[arr2i])
        arr2i++
      } else {
        const merged = { ...array1[arr1i], ...array2[arr2i] }
        result.push(merged)
        arr1i++
        arr2i++
      }
    }
    return result
  }
  return array1.length ? array1 : array2.length ? array2 : result
}
