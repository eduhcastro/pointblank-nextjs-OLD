import React, { Component } from 'react'
import DatabaseTs from './DataBase/Accounts.ts'
import DatabaseClan from './DataBase/Clan.ts'
DatabaseClan.sort(function (x, y) {
  return y.clan_exp - x.clan_exp;
})
DatabaseTs.sort(function (x, y) {
  return y.exp - x.exp;
})
function NovoNumero(Nmb){
  if(Nmb == null){
    return 0
  }
  return new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(Nmb)
}

class SecundList extends Component {
  render() {
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(1, 5);
    query.map(function(item){
      IdUser++
      items.push(<p key={IdUser}><span className={OrdernandoClasse(IdUser)}>{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {NovoNumero(item.exp)}</span></p>) 
    })
    return (<>
    {items}
</>
     )
  }
}


class SecundListClan extends Component {
  render() {
    const items = []
    var IdUser = 0
    const query = DatabaseClan.slice(1, 5);
    query.map(function(item){
      IdUser++
      items.push(<p key={IdUser}><span className={OrdernandoClasse(IdUser)}>{item.clan_name}</span><span className="exp">{NovoNumero(item.clan_exp)}</span></p>) 
    })
    return (<>
    {items}
</>
     )
  }
}

class Individual extends Component {
  render() {
    const query = DatabaseTs.slice(0, 1);
    const items = []
    query.map(function(item){
      items.push(<p key="1"><span className="nick">{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {NovoNumero(item.exp)}</span></p>) 
    })
    return (
      <>
   {items}
   </>
    );
  }
}

class IndividualClan extends Component {
  render() {
    const query = DatabaseClan.slice(0, 1);
    const items = []
    query.map(function(item){
      items.push( <div key="1" className="champion" id="RankList66"><p className="nick">{item.clan_name}</p><p className="rank">{item.clan_exp}</p></div>) 
    })
    return (
      <>
   {items}
   </>
    );
  }
}


function OrdernandoClasse(Obj){
  switch (Obj){
  case 1:
    return 'nick second'
   case 2:
     return 'nick third'
     case 3:
       return 'nick fourth'
       case 4:
         return 'nick fifth'
  }
}


export {Individual, SecundList, IndividualClan, SecundListClan}

