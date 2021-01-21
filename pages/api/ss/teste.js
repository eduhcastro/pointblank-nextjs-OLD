import consta from '../../../components/Accounts.ts'
export default async (req, res) => {
    console.log(consta)
    res.status(200).json({
        success: false,
        data: {},
        message: 'Not Found'
    });
    res.end();
    return
}