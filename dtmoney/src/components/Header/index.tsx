import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
  onOpenModalTransaction():void
}

export function Header({onOpenModalTransaction}:HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button type="button" onClick = {onOpenModalTransaction} >Nova transação</button>
      </Content>
    </Container>
  );
}
