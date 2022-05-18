import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { useSortBy, useTable } from 'react-table'

const SortableTable = ({ data, columns, getSortType, selectable, onRowClick }) => {
  const tableInstance = useTable({ columns, data }, useSortBy)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  const tableHeader = headerGroups.map((headerGroup, index) =>
    <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
      {
        headerGroup.headers.map((column, index) => {
          column.sortType = getSortType(column)
          return (
            <TableHeaderCell key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
            </TableHeaderCell>
          )
        }
        )
      }
    </TableRow>
  )

  const tableBody = rows.map((row, index) => {
    prepareRow(row)
    return (
      <TableRow key={index} {...row.getRowProps()} {...(onRowClick && { onClick: () => onRowClick(row) })}>
        {
          row.cells.map((cell, index) =>
            <TableCell key={index} {...cell.getCellProps()}>
              {cell.render('Cell')}
            </TableCell>
          )
        }
      </TableRow>
    )
  })

  return (
    <Table celled {...getTableProps} selectable={selectable}>
      <TableHeader>
        {tableHeader}
      </TableHeader>
      <TableBody {...getTableBodyProps()}>
        {tableBody}
      </TableBody>
    </Table>
  )
}

export default SortableTable
