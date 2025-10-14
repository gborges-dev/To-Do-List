import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import type { ITarefa } from "./Interface";
import ContentListToDo from "./Content";

const ToDoList = () => {
  const [tarefa, setTarefa] = useState<string>("");
  const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([]);
  
  const handleClickAdicionarTarefa = () => {
    setListaTarefas(prevListaTarefas => [...prevListaTarefas, { descricao: tarefa, concluida: false, id: (listaTarefas.length + 1).toString() }])
    setTarefa("")
  };

  const handleClickCheckbox = (params: any) => {
    setListaTarefas(prevListaTarefas => prevListaTarefas.map(tarefa => tarefa.id === params.target.id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa))
  };

  const handleClickDelete = (params: any) => {
    setListaTarefas(prevListaTarefas => prevListaTarefas.filter(tarefa => tarefa.id !== params.target.id))
  };

  return (
    <Card sx={{ minWidth: 345, padding: 12, maxHeight: 600, overflow: "auto" }}>
      <CardHeader sx={{ textAlign: "center" }} 
        title="Minhas tarefas" 
        subheader="Organize suas tarefas diárias"
        />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-addtask">
            Adicionar tarefa
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-addtask"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickAdicionarTarefa} edge="end">
                  <AddCircleOutlineIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Adicionar tarefa"
          />
        </FormControl>
        <ContentListToDo listaTarefas={listaTarefas} handleClickCheckbox={handleClickCheckbox} handleClickDelete={handleClickDelete} />
      </CardContent>
    </Card>
  );
};

export default ToDoList;
