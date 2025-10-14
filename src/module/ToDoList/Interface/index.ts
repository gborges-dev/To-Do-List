export interface ITarefa {
    descricao: string;
    concluida: boolean;
    id: string;
}

export interface IListProps {
    listaTarefas: ITarefa[];
    handleClickCheckbox: any;
    handleClickDelete: any;
}

