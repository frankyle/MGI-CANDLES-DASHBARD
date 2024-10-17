import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const tradeData = [
  {
    tradeNo: '1.',
    date: '20/06/24',
    risk: 10.00,
    gain: 2.0,
    gainTsh: 5000.0,
    increasePercentage: '20%',
    newBalance: 12.00,
    done: '✔',
    income: 2,
    currency: 'GBPJPY',
    riskedPips: '30pips',
    gainedPips: '20pips',
    timeToTakeTrade: '1700hrs'
  },
  {
    tradeNo: '2',
    date: '23/06/24',
    risk: 12.00,
    gain: 2.4,
    gainTsh: 6000.0,
    increasePercentage: '20%',
    newBalance: 14.40,
    done: '',
    income: 0,
    currency: '',
    riskedPips: '',
    gainedPips: '',
    timeToTakeTrade: ''
  }
];

const TradeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Trade No.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>RISK ($)</TableCell>
            <TableCell>GAIN ($)</TableCell>
            <TableCell>GAIN (Tsh)</TableCell>
            <TableCell>INCREASE PERCENTAGE</TableCell>
            <TableCell>NEW BALANCE</TableCell>
            <TableCell>DONE</TableCell>
            <TableCell>INCOME</TableCell>
            <TableCell>CURRENCY</TableCell>
            <TableCell>RISKED PIPS</TableCell>
            <TableCell>GAINED PIPS</TableCell>
            <TableCell>Time to Take a Trade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tradeData.map((trade, index) => (
            <TableRow key={index}>
              <TableCell>{trade.tradeNo}</TableCell>
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.risk}</TableCell>
              <TableCell>{trade.gain}</TableCell>
              <TableCell>{trade.gainTsh}</TableCell>
              <TableCell>{trade.increasePercentage}</TableCell>
              <TableCell>{trade.newBalance}</TableCell>
              <TableCell>{trade.done}</TableCell>
              <TableCell>{trade.income}</TableCell>
              <TableCell>{trade.currency}</TableCell>
              <TableCell>{trade.riskedPips}</TableCell>
              <TableCell>{trade.gainedPips}</TableCell>
              <TableCell>{trade.timeToTakeTrade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradeTable;
