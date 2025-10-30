import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import ContentListToDo from "./Content";
import { useThemeContext } from "../../context";
import { DarkMode, LightMode } from "@mui/icons-material";
import useToDo from "./hooks/useTodo";
import { useForm } from "react-hook-form";
import type { ITarefa } from "./Interface";
import Formulario from "./Components/Formulario";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchemaTarefa from "./validations/ValidationSchemaTarefa";

const ToDoList = () => {
  const form = useForm({
    resolver: yupResolver(validationSchemaTarefa),
  });

  const {
    listaTarefas,
    toggleCheckbox,
    deleteTarefa,
    contadorDeTarefasPendentes,
  } = useToDo({form});

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
        
        <Formulario form={form} />

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
