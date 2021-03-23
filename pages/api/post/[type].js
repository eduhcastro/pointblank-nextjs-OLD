import DatabaseTs from '../../../components/DataBase/Accounts.ts'

function DeuTudoErradoPass(MatrixFalsa) {
    if (MatrixFalsa.length <= 61) {
        var IDs = new Object();
        IDs['status'] = false
        IDs['code'] = 203
        return IDs
    }
    const S = MatrixFalsa.split('{"UserDetail":[{"user":"')
    if (S[1] === undefined) {
        var IDs = new Object();
        IDs['status'] = false
        IDs['code'] = 201
        return IDs
    }
    const Usuario = S[1].split('","rank":') // USUARIO[0]
    const Rank = Usuario[1].split(',"Exp":') // RANK[0]
    const Exp = Rank[1].split(',"Nick":"') // EXP 0 
    const Nick = Exp[1].split('"}]')
    var IDs = new Object();
    IDs['Usuario'] = Usuario[0]
    IDs['Rank'] = Rank[0]
    IDs['Exp'] = Exp[0]
    IDs['Nick'] = Nick[0]
    IDs['status'] = true
    IDs['code'] = 0
    return IDs;
}

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
                                fights_lost: item.fights_lost,
                                headshots_count: item.headshots_count,
                                kills_count: item.kills_count
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
        if (req.query.type === 'login') {

            async function LoginApi(user, pass, token) {
                const Forumalario = new URLSearchParams();
                Forumalario.append('usuario', user);
                Forumalario.append('senha', pass);
                Forumalario.append('chave', token);
                const Api = await fetch('https://arsenical-road.000webhostapp.com', {
                    method: 'POST',
                    body: Forumalario
                })
                const Resultado = await Api.text()
                return Resultado
            }
            try{
            const Teori = await LoginApi(req.body.usuario, req.body.senha, 'asdasdasds')
            if (Teori.length > 300) {
                res.status(200).json({
                    UserDetail: [{
                        user: null
                    }],
                    Resultado: [{
                        result: false,
                        code: 203
                    }]
                })
                res.end()
            } else {
                const Final = JSON.parse(Teori)
                res.status(200).json(Final)
                res.end()
            }
          } catch (e){
            res.status(200).json({
              UserDetail: [{
                  user: null
              }],
              Resultado: [{
                  result: false,
                  code: 204
              }]
          })
          res.end()
          }

            /**
             *  ABAIXO FAZER O SISTEMA DE LOGIN DO SITE
             * @param {string} UserLogged
             * @param {number} UserRank
             * @param {number} UserEXP
             * ESSE RESULTADO VOLTARAR PARA O USUARIO EM INSTANTES,SEM REDIRECIONAMENTO SE FOR FALSE 
             *                  RESPOSTA AO CLIENTE BASEADA VALOR DO CODE                         */
        }
        if (req.query.type === 'newpassword') {
            async function NewPass(pass, id) {
                const Forumalario = new URLSearchParams();
                Forumalario.append('newpass', pass);
                Forumalario.append('id', id);
                const Api = await fetch('https://www.fpd-pb.com/Web/NewPassword.php', {
                    method: 'POST',
                    body: Forumalario
                })
                const Resultado = await Api.text()
                return Resultado
            }
            const Final = DeuTudoErradoPass(await NewPass(req.body.newpassword, req.body.id))

            res.status(200).json(Final)
            res.end()
        }

        if (req.query.type === 'security') {
            async function NewPass(pass, id) {
                const Forumalario = new URLSearchParams();
                Forumalario.append('newpass', pass);
                Forumalario.append('id', id);
                const Api = await fetch('https://www.fpd-pb.com/Web/NewSecurity.php', {
                    method: 'POST',
                    body: Forumalario
                })
                const Resultado = await Api.text()
                return Resultado
            }
            const Final = DeuTudoErradoPass(await NewPass(req.body.newpassword, req.body.id))
            res.status(200).json(Final)
            res.end()
        }

        if (req.query.type === 'code') {
            async function Code(code, id, method) {
                const Forumalario = new URLSearchParams();
                Forumalario.append('code', code);
                Forumalario.append('user', id);
                Forumalario.append('method', method);
                const Api = await fetch('https://arsenical-road.000webhostapp.com/code.php', {
                    method: 'POST',
                    body: Forumalario
                })
                const Resultado = await Api.text()
                return Resultado
            }
            try{
              const Alavonte = await Code(req.body.code, req.body.id, req.body.method)
              if (Alavonte.length > 300) {
                res.status(200).json({
                  status: false,
                  code: 203
              })
              res.end() 
              } else {
                const Finall = JSON.parse(Alavonte)
                  res.status(200).json(Finall)
                  res.end()
              }
            } catch (e){
              res.status(200).json({
                status: false,
                code: 204
            })
            res.end() 
            }
           

            //const Final = DeuTudoErradoPass(await NewPass(req.body.newpassword,req.body.id))

        }


    } else {
        res.status(200).json({
            result: false
        })
        res.end()
    }
}