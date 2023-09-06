import { ExtendedTr } from './TransactionRaw.styled';
import { Td } from './TransactionRaw.styled';

import PropTypes from 'prop-types';

export const TableRow = ({ type, amount, currency, index }) => {
  return (
    <ExtendedTr idx={index}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ExtendedTr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

