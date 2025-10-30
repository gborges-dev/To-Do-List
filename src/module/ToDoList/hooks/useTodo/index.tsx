import { useState, useMemo } from "react";
import type { ITarefa } from "../../Interface";
import type { UseFormReturn } from 'react-hook-form';

interface IUseToDoProps {
  form: UseFormReturn<any>;
}

const useToDo = (props: IUseToDoProps) => {
  const { form } = props;
  const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([]);
  const descTarefa = form.watch("descricao");
  const urgenciaTarefa = form.watch("urgencia");

  const addTarefa = () => {
    descTarefa
      ? setListaTarefas((prevListaTarefas) => [
          ...prevListaTarefas,
          { descricao: descTarefa, urgencia: urgenciaTarefa, concluida: false, id: crypto.randomUUID() },
        ])
      : null;
    
      form.reset();
  };

  const toggleCheckbox = (params: any) => {
    setListaTarefas((prevListaTarefas) =>
      prevListaTarefas.map((tarefa) =>
        tarefa.id === params.target.id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const deleteTarefa = (codigoTarefa: string) => {
    setListaTarefas((prevListaTarefas) =>
      prevListaTarefas.filter((tarefa) => tarefa.id !== codigoTarefa)
    );
  };

  const contadorDeTarefasPendentes = useMemo(
    () => listaTarefas.filter((tarefa) => !tarefa.concluida).length,
    [listaTarefas]
  );

  return {
    listaTarefas,
    addTarefa,
    toggleCheckbox,
    deleteTarefa,
    contadorDeTarefasPendentes,
  };
};

export default useToDo;
