import { Negociacao } from "../models/negociacao.js";
export class NegocicoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8000/dados')
            .then(res => {
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.statusText}`);
            }
            return res.json();
        })
            .then((dados) => {
            const negociacoesDeHoje = dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
            return negociacoesDeHoje;
        });
    }
}
