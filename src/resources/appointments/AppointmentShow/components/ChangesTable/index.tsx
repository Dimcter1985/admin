import {
  FunctionField,
  FunctionFieldProps,
} from 'react-admin'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import React from 'react'

type IProps = Omit<FunctionFieldProps, 'render'>

const ChangesTable: React.FC<IProps> = ({ record, ...props }) => {
  const rows: string[][] = Object.entries(record?.auditedChanges)
  return (
    <FunctionField
      {...props}
      render={() => (
        <TableContainer component={Paper}>
          <Table size='medium' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row[0]}>
                  <TableCell>{row[0]}</TableCell>
                  {
                    Array.isArray(row[1]) ? (
                      row[1].map((cell) => (
                        <TableCell key={cell}>{cell}</TableCell>
                      ))
                    ) : (
                      <>
                        <TableCell />
                        <TableCell>{row[1]}</TableCell>
                      </>
                    )
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  )
}

export default ChangesTable
