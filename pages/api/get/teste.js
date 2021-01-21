const Connection = require( 'database-js' ).Connection;

export default async (req, res) => {
( async () => {
    const connection = new Connection( 'json:///Accounts.json' );
    try {
        const statement = await connection.prepareStatement("SELECT * WHERE username = ?");
        const rows = await statement.query('alice');
        console.log(rows);
    } catch (error) {
        console.log(error);
    } finally {
        await connection.close();
    }
} )();
res.status(200).json({
    success: false,
    data: {},
    message: 'Not Found'
});
res.end();
return
}