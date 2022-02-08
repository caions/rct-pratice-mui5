import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from './styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: '#FFFFFF',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = (
  nome: string,
  clienteStatus: boolean,
  municipios: string,
  uf: string,
  porteDeMercado: string,
  matrizFilial: string,
  cnae: string,
  situacao: 'ATIVA' | 'INATIVA' | 'BAIXADA'
) => {
  return {
    nome,
    clienteStatus,
    municipios,
    uf,
    porteDeMercado,
    matrizFilial,
    cnae,
    situacao,
  };
};
const rows = [
  createData(
    'SoftPlan Planejamentos e Sistemas LTDA CNPJ: 12875558000104 SOFTPLAN PLANEJAMENTO E SISTEMAS S/A',
    true,
    'Fortaleza',
    'CE',
    'Grande',
    'Matriz',
    'Desenvolvimento de programa de computador sob encomenda',
    'ATIVA'
  ),
  createData(
    'SoftPlan Planejamentos e Sistemas LTDA CNPJ: 12875558000104 SOFTPLAN PLANEJAMENTO E SISTEMAS S/A',
    true,
    'Fortaleza',
    'CE',
    'Grande',
    'Matriz',
    'Desenvolvimento de programa de computador sob encomenda',
    'ATIVA'
  ),
  createData(
    'SoftPlan Planejamentos e Sistemas LTDA CNPJ: 12875558000104 SOFTPLAN PLANEJAMENTO E SISTEMAS S/A',
    true,
    'Fortaleza',
    'CE',
    'Grande',
    'Matriz',
    'Desenvolvimento de programa de computador sob encomenda',
    'ATIVA'
  ),
];

export const DenseTable = () => {
  return (
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Razão Social CNPJ e Nome Fantasia</StyledTableCell>
          <StyledTableCell align="right">Status Cliente</StyledTableCell>
          <StyledTableCell align="right">Município</StyledTableCell>
          <StyledTableCell align="right">UF</StyledTableCell>
          <StyledTableCell align="right">Porte de Mercado</StyledTableCell>
          <StyledTableCell align="right">Matriz/Filial</StyledTableCell>
          <StyledTableCell align="right">CNAE</StyledTableCell>
          <StyledTableCell align="right">Situação</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow
            key={row.nome}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
              {row.nome}
            </StyledTableCell>
            <StyledTableCell align="right">{row.clienteStatus}</StyledTableCell>
            <StyledTableCell align="right">{row.municipios}</StyledTableCell>
            <StyledTableCell align="right">{row.uf}</StyledTableCell>
            <StyledTableCell align="right">
              {row.porteDeMercado}
            </StyledTableCell>
            <StyledTableCell align="right">{row.matrizFilial}</StyledTableCell>
            <StyledTableCell align="right">{row.cnae}</StyledTableCell>
            <StyledTableCell align="right">{row.situacao}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};
