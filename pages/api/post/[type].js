import DatabaseTs from '../../../components/DataBase/Accounts.ts'
export const config = {
    api: {
        externalResolver: true,
    },
}
export default async (req, res) => {
    if (req.method === 'POST') {
        if (req.query.type === 'user') {
            const User = req.body.nickname
            async function GetPlayer(Name) {
                var XXX = DatabaseTs.map(function(item) {
                    if (item.player_name.includes(Name)) {
                        if (item.player_name === null || item.player_name === '' || item.player_name === undefined) {} else {
                            var user = {
                                player_name: item.player_name,
                                rank: item.rank,
                                exp: item.exp,
                                fights: item.fights,
                                fights_win: item.fights_win,
                                fights_lost: item.fights_lost
                            }
                        }
                    }
                    return user
                })
                async function Ordernando(Elemento) {
                    var array = []
                    var Elementos = Elemento
                    var Limite = Elemento.length
                    for (var i = 0; i < Limite; i++) {
                        if (Elementos[i] === null || Elementos[i] === '' || Elementos[i] === undefined) {} else {
                            array.push(XXX[i])
                        }
                    }
                    return array
                }
                const RetornoPositivo = await Ordernando(XXX)
                return [RetornoPositivo]
            }
            const resultado = await GetPlayer(User)
            res.status(200).json(resultado)
            res.end()
            return
        }
    } else {
        res.status(200).json({
            result: false
        })
        res.end()
    }
}