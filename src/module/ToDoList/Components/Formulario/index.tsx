import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import type { UseFormReturn } from 'react-hook-form';
import useToDo from '../../hooks/useTodo';
import { Add } from '@mui/icons-material';

interface IFormularioProps {
    form: UseFormReturn<any>   
}

const Formulario = (props: IFormularioProps) => {
    const { form } = props;
    const { register } = form;
    const { addTarefa } = useToDo({form});

    return (
        <Stack direction="row" spacing={2} alignItems="center" >
            <TextField
                {...register("descricao")}
                label="Descrição"
                variant="outlined"
                fullWidth
                required
            />
            <Autocomplete
                {...register("urgencia")}
                sx={{ width: 300 }}
                options={[
                    { label: "Baixa", value: 1 },
                    { label: "Média", value: 2 },
                    { label: "Alta", value: 3 },
                ]}
                renderInput={(params) => (
                    <TextField {...params} label="Urgência" required />
                )}
            />
            <Button variant="contained" onClick={addTarefa} size='large'><Add /></Button>
        </Stack>
    );
};

export default Formulario;