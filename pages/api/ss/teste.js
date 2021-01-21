import consta from '../../../components/Accounts.ts'
export default async (req, res) => {
    console.log(consta[0].name)
    res.status(200).json({
        success: false,
        data: {Name: consta[0].name},
        message: 'Not Found'
    });
    res.end();
    return
}