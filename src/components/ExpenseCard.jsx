import { Card, CardContent, Typography, Box, styled } from "@mui/material"


const Container = styled(Box)`
    Display:flex;
    & > div{
        flex:1;
        padding: 10px;
    }
`

const ExpenseCard = ({ transactions }) => {

    const amount = transactions.map(transaction => transaction.amount);
    const income = (amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <Container>

            <Card>
                <CardContent style={{ color: 'green' }}>
                    <Typography >Income</Typography>
                    <Typography >৳{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent style={{ color: 'red' }}>
                    <Typography >Expense</Typography>
                    <Typography>৳{expense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenseCard;