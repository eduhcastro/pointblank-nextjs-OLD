import db from '../DatabaseLow.js';

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
        const query = db.get('AccountsPLayers').value().slice(limite2, inicio)
        console.log('0')
        if (query[0] == null) {
            res.status(200).json({
                result: 'end'
            });
            res.end();
        } else {
            (async () => {
                res.status(200).json([query]);
                res.end();
            })()
        }
    } else if (req.query.type === 'home') {
      const query = db.get('AccountsPLayers').value().slice(0, 5)
      if (query[0] == null) {
        res.status(200).json({
            result: 'end'
        });
        res.end();
    } else {
                console.log('2')
                res.status(200).json(query);
                res.end();
    }} else {
        res.status(405);
        res.end();
    }

};
