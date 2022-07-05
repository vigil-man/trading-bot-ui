import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import SortableTable from '../../../common/SortableTable'
import { columns } from './columns'

const TradesTable = () => {
  const { state } = useLocation()

  const data = useMemo(
    () => state || [],
    [state]
  )

  const getSortType = () => 'basic'

  return (
    <SortableTable
      data={data}
      columns={columns}
      getSortType={getSortType}
    />
  )
}

export default TradesTable
