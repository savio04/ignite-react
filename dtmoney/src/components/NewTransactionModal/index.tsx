import { Container } from "./styles";
import Modal from "react-modal";

interface INewTransactionModal {
  isOpen: boolean;
  onCloseModal(): void;
}

export function NewTransactionModal({
  isOpen,
  onCloseModal,
}: INewTransactionModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
