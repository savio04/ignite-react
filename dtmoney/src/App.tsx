import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from './components/NewTransactionModal'

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
      <NewTransactionModal isOpen = {isOpen} onCloseModal = {handleCloseModal} />
      <GlobalStyle />
    </>
  );
}
