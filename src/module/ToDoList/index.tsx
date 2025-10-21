import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import type { ITarefa } from "./Interface";
import ContentListToDo from "./Content";
import { useThemeContext } from "../../context";
import { DarkMode, LightMode } from "@mui/icons-material";
import useToDo from "./hooks";

const ToDoList = () => {
  const {
    descTarefa,
    setDescTarefa,
    listaTarefas,
    addTarefa,
    toggleCheckbox,
    deleteTarefa,
    contadorDeTarefasPendentes,
  } = useToDo();

  const { mode, toggleTheme } = useThemeContext();

  return (
    <Card sx={{ minWidth: 345, padding: 12, maxHeight: 600, overflow: "auto" }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title="Minhas tarefas"
        subheader="Organize suas tarefas diárias"
        action={
          <IconButton onClick={toggleTheme}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {contadorDeTarefasPendentes} tarefas pendentes
        </Typography>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-addtask">
            Adicionar tarefa
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-addtask"
            value={descTarefa}
            onKeyDown={(e) =>
              e.key === "Enter" ? addTarefa() : null
            }
            onChange={(e) => setDescTarefa(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={addTarefa} edge="end">
                  <AddCircleOutlineIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Adicionar tarefa"
          />
        </FormControl>
        <ContentListToDo
          listaTarefas={listaTarefas}
          handleClickCheckbox={toggleCheckbox}
          handleClickDelete={deleteTarefa}
        />
      </CardContent>
    </Card>
  );
};

export default ToDoList;
