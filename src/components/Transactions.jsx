import { Box, Divider, List, Typography } from "@mui/material"
import { Transaction } from "./Transaction"




export const Transactions = ({ transactions, setTransactions }) => {
    return (
        <Box>
            <Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>{
                transactions.map(transaction => (
                    <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions} />
                ))
            }
            </List>
        </Box>
    )
}