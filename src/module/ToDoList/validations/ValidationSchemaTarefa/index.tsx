import { object, string, number } from "yup";

const validationSchemaTarefa = object({
    descricao: string().required("Descrição é obrigatória"),
    urgencia: number().required("Urgência é obrigatória"),
});

export default validationSchemaTarefa;