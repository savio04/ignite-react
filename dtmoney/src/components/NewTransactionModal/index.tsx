import { Container, TransactionTypeContainer, TypeButton } from "./styles";
import Modal from "react-modal";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import closeImage from "../../assets/Vector.svg";
import { FormEvent, useContext, useState } from "react";
import { transactionContext } from "../../TransactionContext";

interface INewTransactionModal {
  isOpen: boolean;
  onCloseModal(): void;
}

export function NewTransactionModal({
  isOpen,
  onCloseModal,
}: INewTransactionModal) {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const { createTransaction } = useContext(transactionContext);

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    await createTransaction({
      title,
      type,
      amount: value,
      category,
    });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("");
    onCloseModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onCloseModal}
        className="react-modal-close"
      >
        <img src={closeImage} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro de transação</h2>
        <input
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
