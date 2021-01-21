import DatabaseOffline from '../../../components/Accounts.ts'
const Formatado = DatabaseOffline;
export const config = {
    api: {
        externalResolver: true,
    },
}
export default async (req, res) => {
    if (req.query.type === 'individual') {
        var inicio = req.query.limit * 20;
        if (req.query.limit == null) {
            var inicio = 1 * 20;
        }
        if (req.query.limit == 0) {
            var limite2 = 0
        } else {
            var limite2 = inicio - 20
        }

        const query = Formatado.slice(limite2, inicio);
        console.log('0')
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
        } else {
            (async () => {
                res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
                res.status(200).json([query]);
                res.end();
            })()
        }
    } else if (req.query.type === 'home') {
        const query = Formatado.slice(0, 5);
      if (query[0] == null) {
        res.status(200).json({
            result: 'end'
        });
        res.end();
    } else {
                console.log('2')
                res.setHeader('Cache-Control', 's-maxage=400, stale-while-revalidate')
                res.status(200).json(query);
                res.end();
    }} else {
        res.status(405);
        res.end();
    }

};
