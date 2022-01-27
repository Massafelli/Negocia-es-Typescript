import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => {
            return res.json();
        })
            .then((data) => data.map((dadosDeHoje) => {
            return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
        }));
    }
}
//# sourceMappingURL=negociacoes-service.js.map