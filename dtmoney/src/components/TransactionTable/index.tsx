import { Container } from "./styles";

export function TransactionTable(){
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