import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => {
        return res.json();
      })
      .then((data: NegociacoesDoDia[]) =>
        data.map((dadosDeHoje) => {
          return new Negociacao(
            new Date(),
            dadosDeHoje.vezes,
            dadosDeHoje.montante
          );
        })
      );
  }
}
