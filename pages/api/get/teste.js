import x from '../../../components/Accounts.ts'
export default async (req, res) => {
    x.splice(2)
    res.status(200).json(
        x);
    res.end();
    return
}
// .splice( n ) == LIMITE RESULTADOS
// .length = QUANTIDADE PORRA * CRIAR FUNÇÃO
// const filtrado = await x.filter(function(item){
//     return item.player_name == "Melyssa";         
// }) == FILTRADO




//        SICLADO OFFSET
//export default async (req, res) => {
//    var Formatado = x;
//    var Siclado = Formatado.slice(0, 20);
//
//    res.status(200).json(
//        Siclado);
//    res.end();
//    return
//}
//
//      LIMITE DE DADOS ( 2 )
//export default async (req, res) => {
//    x.splice(2)
//    res.status(200).json(
//        x);
//    res.end();
//    return
//}
//



