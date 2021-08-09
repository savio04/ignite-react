import { useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { createServer } from "miragejs";

createServer({
    routes() {
      this.namespace = "api";
  
      this.get("/transaction", () => {
        return [
          {
            id: 1,
            title: "Primeira trnasaciton",
            amount: 400,
            type: "deposit",
            category: "comida",
            createdAt: new Date(),
          },
          {
            id: 2,
            title: "segunda transaction",
            amount: 400,
            type: "deposit",
            category: "comida",
            createdAt: new Date(),
          },
        ];
      });
    },
  });

export function TransactionTable(){
    useEffect(() => {
        api.get('/transaction')
        .then(response => console.log(response.data))
    },[])
    return(
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
                    <tr>
                        <td>Desenvolvimento web site</td>
                        <td className = "deposit">R$ 12000</td>
                        <td>Emprego</td>
                        <td>27/05/2009</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className = "withdraw">- R$ 12000</td>
                        <td>Casa</td>
                        <td>27/05/2009</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}