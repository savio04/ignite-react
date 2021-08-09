import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root')

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Header onOpenModalTransaction = {handleOpenModal} />
      <Dashboard />
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2>Teste</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
