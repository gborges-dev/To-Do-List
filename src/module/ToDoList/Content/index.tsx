import { List, ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import type { IListProps } from "../Interface";

const ContentListToDo = (props: IListProps) => {
    const { listaTarefas, handleClickCheckbox, handleClickDelete } = props;

    return (
        <List sx={{ width: "100%" }}>
          {listaTarefas.map((tarefa, index) => (
            <ListItem key={index}>
              <Checkbox
                id={tarefa.id}
                checked={tarefa.concluida}
                onChange={handleClickCheckbox}
              />
              <ListItemText
                sx={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
                primary={tarefa.descricao}
              />
              <IconButton onClick={handleClickDelete} id={tarefa.id}>
                <Delete color="error" id={tarefa.id}/>
              </IconButton>
            </ListItem>
          ))}
        </List> 
    );
};

export default ContentListToDo;