import DatabaseTs from '../../../components/DataBase/Accounts.ts'
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
    const query = await DatabaseTs.filter(function(item){
        return item.player_name == user;         
    })
    if(query === undefined || query === null || query === ''){
        res.status(200).json({
            success: false,
            data: {},
            message: 'Not Found'
        });
        res.end();
        return
    }
    var PExp = query[0].exp
    var PRank = query[0].rank
    res.status(200).json({
        success: true,
        data: {Rank: PRank, Exp: PExp, WinCnt: "0", LoseCnt: "1", WinRate: "0", KillCnt: "2", DeathCnt: "3"},
        message: ''

    });
    res.end();
    return
}

