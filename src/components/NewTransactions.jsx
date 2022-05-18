import { useState } from "react";

import { Box, Button, styled, TextField, Typography } from "@mui/material"

const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    & > h4, & > div, & > button{
        margin-top:30px;
    }
    
`


export const NewTransactions = ({ setTransactions }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const addTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount,
        }
        setTransactions(prevState => [transaction, ...prevState]);
    }


    return (
        <Container>
            <Typography variant="h4">New Transaction</Typography>
            <TextField id="filled-basic" label="Enter Expense" variant="outlined" onChange={(e) => setText(e.target.value)} />
            <TextField id="filled-basic" label="Enter Amount" variant="outlined" onChange={(e) => setAmount(e.target.value)} />
            <Button variant="contained" onClick={() => addTransaction()}>Contained</Button>
        </Container>
    )

}