import { useContext } from "react";
import { transactionContext } from "../../TransactionContext";
import { Container } from "./styles";


export function TransactionTable() {
  const {transactions} = useContext(transactionContext)

  return (
    <Container>
      <table>
        {/* Header da tabela */}
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        {/* Corpo da tabela */}
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td> {transaction.title} </td>
              <td className={transaction.type}>
                {/* Formatando valores em reais */}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td> {transaction.category} </td>
              <td>
                {/* Formatando datas */}
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
