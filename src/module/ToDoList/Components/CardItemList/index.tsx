import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import type { ITarefa } from '../../Interface';

interface ICardItemListProps {
    tarefa: ITarefa
}

const CardItemList = (props: ICardItemListProps) => {
    const { tarefa } = props;

    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {tarefa.descricao}
                </Typography>            
            </CardContent>
        </Card>
    );
};

export default CardItemList;
