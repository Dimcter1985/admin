import React from 'react'

import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

import capitalize from 'lodash/capitalize'

const makeCustomerStatus = (transactionStatus: string) => {
  switch (transactionStatus) {
    case 'done':
    case 'held':
      return 'Settled'
    default:
      return capitalize(transactionStatus)
  }
}
const makeEscrowStatus = (transactionStatus: string) => {
  switch (transactionStatus) {
    case 'done':
      return 'Released'
    default:
      return 'Held'
  }
}

interface IProps {
  transactions: IPaymentTransaction[];
  selectedIds: number[];
  onTransactionToggle: (serviceId: number) => void;
  onAllToggle: () => void;
}

const TransactionsTable: React.FC <IProps> = ({
  transactions,
  onTransactionToggle,
  selectedIds,
  onAllToggle,
}) => (
  <TableContainer component={Paper}>
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell padding='checkbox'>
            <Checkbox
              size='small'
              onChange={onAllToggle}
              checked={selectedIds.length > (transactions.length / 2)}
            />
          </TableCell>
          <TableCell align='left'>Customer Status</TableCell>
          <TableCell align='left'>Escrow Status</TableCell>
          <TableCell align='left'>Type</TableCell>
          {/* <TableCell align='left'>Authorized Amount</TableCell> */}
          <TableCell align='left'>Settled Amount</TableCell>
          <TableCell align='left'>Service Fee</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell padding='checkbox'>
                  <Checkbox
                    size='small'
                    checked={selectedIds.includes(transaction.id)}
                    onChange={() => onTransactionToggle(transaction.id)}
                  />
                </TableCell>
                <TableCell>{makeCustomerStatus(transaction.status)}</TableCell>
                <TableCell>{makeEscrowStatus(transaction.status)}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                {/* <TableCell>{transaction.authorized_amount || '-'}</TableCell> */}
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.serviceFeeAmount}</TableCell>
              </TableRow>
            ))
          }
      </TableBody>
    </Table>
  </TableContainer>)

export default TransactionsTable
