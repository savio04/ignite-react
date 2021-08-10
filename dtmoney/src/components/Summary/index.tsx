import { Container } from "./styles";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { useTransaction } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransaction();
  const totalDeposit = transactions.reduce((acumalator, transaction) => {
    if (transaction.type === "deposit") {
      acumalator += transaction.amount;

      return acumalator;
    }

    return acumalator;
  }, 0);

  const totalWithDraw = transactions.reduce((acumalator, transaction) => {
    if (transaction.type === "withdraw") {
      return (acumalator += transaction.amount);
    }

    return acumalator;
  }, 0);

  const total = totalDeposit - totalWithDraw;
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalDeposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          -{"   "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalWithDraw)}
        </strong>
      </div>
      <div className="hilgth-backgorund">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
