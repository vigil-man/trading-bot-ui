import { mergeSortedArrays } from './array-utils'

const candles = [
  { closeTimestamp: '2022-10-10T22:00:00Z', closePrice: 1 },
  { closeTimestamp: '2022-10-20T22:00:00Z', closePrice: 2 },
  { closeTimestamp: '2022-10-30T22:00:00Z', closePrice: 3 }
]
const records = [
  { timestamp: '2022-10-05T22:00:00Z', data: 'somedata1' },
  { timestamp: '2022-10-15T22:00:00Z', data: 'somedata2' },
  { timestamp: '2022-10-30T22:00:00Z', data: 'somedata3' },
  { timestamp: '2022-11-01T22:00:00Z', data: 'somedata4' }
]

test('Should sort by key and merge objects with equal key during arrays merging',
  () => {
    const expectedResult = [
      { timestamp: '2022-10-05T22:00:00Z', data: 'somedata1' },
      { closeTimestamp: '2022-10-10T22:00:00Z', closePrice: 1 },
      { timestamp: '2022-10-15T22:00:00Z', data: 'somedata2' },
      { closeTimestamp: '2022-10-20T22:00:00Z', closePrice: 2 },
      { closeTimestamp: '2022-10-30T22:00:00Z', closePrice: 3, timestamp: '2022-10-30T22:00:00Z', data: 'somedata3' },
      { timestamp: '2022-11-01T22:00:00Z', data: 'somedata4' }
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
