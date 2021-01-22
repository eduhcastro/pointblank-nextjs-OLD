import DatabaseOfflineClan from '../../../components/DataBase/Clan.ts'
async function Mapeando(ss){
    var resultado = await ss.map(function(item){
    var Win = item.vitorias
    var Total = item.partidas
    var WD = Total != 0 ? Math.round((Win * 100) / Total, 1) : 0;
    var Ordernado = {clan_id: item.clan_id, clan_rank: item.clan_rank, clan_name: item.clan_name, clanexp: item.clan_exp,clan_name: item.clan_name, ratewin: `${WD}`}
    return Ordernado
   })
   return resultado
};

function Fake(xx){
    let ClanData2 = xx;
    if (ClanData2 == null){
        res.status(200).json({
            result: 'end'
        });
        res.end();
        return
    }
    ClanData2.sort(function (x, y) {
        return y.clan_exp - x.clan_exp;
    });
    return ClanData2
}

export default async (req, res) => {
    const teste = Fake(DatabaseOfflineClan)
    var ClanData = await Mapeando(DatabaseOfflineClan);
    res.status(200).json(ClanData.slice(0, 4));
    res.end();
    return
}