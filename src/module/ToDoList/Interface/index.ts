export interface ITarefa {
    descricao: string;
    urgencia: number;
    concluida: boolean;
    id: string;
}

export interface IListProps {
    listaTarefas: ITarefa[];
    handleClickCheckbox: any;
    handleClickDelete: any;
}

