export interface Tarefa{
  id: number,
  nome: string,
  descricao: string,
  responsavel: string,
  dataInicio?:string,
  dataConclusao?:string,
  situacao: string
}
