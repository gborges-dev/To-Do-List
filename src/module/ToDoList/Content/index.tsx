import { List, Stack } from "@mui/material";
import type { IListProps } from "../Interface";
import CardItemList from "../Components/CardItemList";

const ContentListToDo = (props: IListProps) => {
    const { listaTarefas, handleClickCheckbox, handleClickDelete } = props;

    return (
        <Stack>
            {listaTarefas.map((tarefa) => (
                <CardItemList key={tarefa.id} tarefa={tarefa} />
              ))}
        </Stack>
    );
};

export default ContentListToDo;