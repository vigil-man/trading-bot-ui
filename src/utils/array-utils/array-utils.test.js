import { mergeSortedArrays } from './array-utils'

const candles = [
  { closeTimestamp: 10, closePrice: 1 },
  { closeTimestamp: 20, closePrice: 2 },
  { closeTimestamp: 30, closePrice: 3 }
]
const records = [
  { timestamp: 5, data: 'somedata1' },
  { timestamp: 15, data: 'somedata2' },
  { timestamp: 30, data: 'somedata3' },
  { timestamp: 40, data: 'somedata4' }
]

test('Should sort by key and merge objects with equal key during arrays merging',
  () => {
    const expectedResult = [
      { timestamp: 5, data: 'somedata1' },
      { closeTimestamp: 10, closePrice: 1 },
      { timestamp: 15, data: 'somedata2' },
      { closeTimestamp: 20, closePrice: 2 },
      { closeTimestamp: 30, closePrice: 3, timestamp: 30, data: 'somedata3' },
      { timestamp: 40, data: 'somedata4' }
    ]
    expect(mergeSortedArrays(candles, records, 'closeTimestamp', 'timestamp'))
      .toStrictEqual(expectedResult)
  }
)

test('Should return another array if one empty',
  () => {
    expect(mergeSortedArrays(candles, [], 'closeTimestamp', 'timestamp'))
      .toStrictEqual(candles)
    expect(mergeSortedArrays([], records, 'closeTimestamp', 'timestamp'))
      .toStrictEqual(records)
  }
)

test('Should return empty array if both empty',
  () => {
    expect(mergeSortedArrays([], [], 'closeTimestamp', 'timestamp'))
      .toStrictEqual([])
  }
)
