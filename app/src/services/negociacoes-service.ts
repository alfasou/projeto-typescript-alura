import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegocicoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8000/dados')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.statusText}`);
            }
            return res.json();
        })
        .then((dados: NegociacoesDoDia[]) => {
            const negociacoesDeHoje = dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(), 
                    dadoDeHoje.vezes, 
                    dadoDeHoje.montante
                );
            });
            return negociacoesDeHoje; // Retorna o array de negociações
        });
    }
}