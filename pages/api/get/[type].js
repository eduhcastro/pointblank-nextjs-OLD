import db from '../DatabaseLow.js';
export const config = {
    api: {
        externalResolver: true,
    },
}
export default async (req, res) => {
    const user = req.query.user
    if(user === undefined || user === null || user === ''){
        res.status(200).json({
            success: false,
            data: {},
            message: 'Invalid'
        });
        res.end();
        return
    }
    const query = db.get('AccountsPLayers').find({player_name: user}).value()
    if(query === undefined || query === null || query === ''){
        res.status(200).json({
            success: false,
            data: {},
            message: 'Not Found'
        });
        res.end();
        return
    }
    var PExp = query.exp
    var PRank = query.rank
    res.status(200).json({
        success: true,
        data: {Rank: PRank, Exp: PExp, WinCnt: "0", LoseCnt: "1", WinRate: "0", KillCnt: "2", DeathCnt: "3"},
        message: ''

    });
    res.end();
    return
}
