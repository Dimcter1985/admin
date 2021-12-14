import React from 'react'
import { DatagridBodyProps } from 'react-admin'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const InfoTable = ({ record }: DatagridBodyProps) => {
  const createTable = (elem) => {
    const rows: string[][] = Object.entries(elem)
    const arr: React.ReactElement[] = []

    rows.forEach((row) => {
      if (row[0] !== 'appointments' && row[0] !== 'loyaltyCards') {
        arr.push(
          <TableRow key={row[0]}>
            <>
              <TableCell>
                {
                  row[0].replace(/([A-Z])/g, ' $1').trim().replace(/^[a-z]/, (u) => u.toUpperCase())
                }
              </TableCell>
              <TableCell>
                {
                  row[0] === 'avatar'
                    ? <img src={row[1]} width='200px' alt='avatar' />
                    : <span>{row[1]}</span>
                }
              </TableCell>
            </>
          </TableRow>,
        )
      }
    })
    return arr
  }

  return (
    <TableContainer component={Paper}>
      <Table size='medium' aria-label='a dense table'>
        <TableBody>
          {
            createTable(record)
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InfoTable
