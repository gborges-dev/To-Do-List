import { useState, useMemo } from "react";
import type { ITarefa } from "../Interface";

const useToDo = () => {
    const [descTarefa, setDescTarefa] = useState<string>("");
    const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([]);

    const addTarefa = () => {
        descTarefa ? setListaTarefas(prevListaTarefas => [...prevListaTarefas, { descricao: descTarefa, concluida: false, id:crypto.randomUUID() }]) : null;
        setDescTarefa("")
    };

    const toggleCheckbox = (params: any) => {
        setListaTarefas(prevListaTarefas => prevListaTarefas.map(tarefa => tarefa.id === params.target.id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa))
    };

    const deleteTarefa = (codigoTarefa: string) => {
        setListaTarefas(prevListaTarefas => prevListaTarefas.filter(tarefa => tarefa.id !== codigoTarefa))
    };
    
    const contadorDeTarefasPendentes = useMemo(() => listaTarefas.filter(tarefa => !tarefa.concluida).length, [listaTarefas]);

    return {descTarefa, setDescTarefa, listaTarefas, setListaTarefas, addTarefa, toggleCheckbox, deleteTarefa, contadorDeTarefasPendentes}
}

export default useToDo