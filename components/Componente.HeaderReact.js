import React, { Component } from 'react'
import DatabaseTs from './DataBase/Accounts.ts'
import DatabaseClan from './DataBase/Clan.ts'
import FuncoesWebsite from './Componente.Funcoes'
import {PageGet} from './Componente.RankModules'

DatabaseClan.sort(function (x, y) {
  return y.clan_exp - x.clan_exp;
})


function CalculatePages(Obj){
      const count = Obj.length
      return Math.ceil(count / 20);
}

class PaginacaoUsers extends Component{
  render() {
    const Paginas = CalculatePages(DatabaseTs)
    const Items = []
    for(var i = 1; i < 21; i++){
      if(i == 1){
        Items.push(<li key={i} className="string here" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }else{
      Items.push(<li key={i} className="string" data-target={i}><a data-targeta={i} href="#!" onClick={PageGet}>{i}</a></li>)
      }
    }
    return (<ul className="bbs_paging">
										<li className="first" data-target="1"><a data-targeta="1" href="#!" onClick={PageGet}><span>First</span></a></li>
          {Items}
					<li className="last" data-target={Paginas}><a data-targeta={Paginas} id="lastpage" href="#!" onClick={PageGet}><span>Last</span></a></li>
					</ul>)
      }
}


class SecundList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(1, 5);
    query.map(function(item){
      IdUser++
      items.push(<p key={IdUser}><span className={new FuncoesWebsite().SortingClasses(IdUser)}>{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {new FuncoesWebsite().NewNumber(item.exp)}</span></p>) 
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
      items.push(<p key={IdUser}><span className={new FuncoesWebsite().SortingClasses(IdUser)}>{item.clan_name}</span><span className="exp">{new FuncoesWebsite().NewNumber(item.clan_exp)}</span></p>) 
    })
    return (<>
    {items}
</>
     )
  }
}

class Individual extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const query = DatabaseTs.slice(0, 1);
    const items = []
    query.map(function(item){
      items.push(<p key="1"><span className="nick">{item.player_name}</span><span className="exp"><img src={'/Front/Rank/icon/'+item.rank+'.png'}/> {new FuncoesWebsite().NewNumber(item.exp)}</span></p>) 
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



class ExpList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.exp - x.exp;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(0, 20);
    query.map(function(item){
      IdUser++
     items.push(<tr key={IdUser}>
      <td className="rank">
         {IdUser}
         <p className="rank_same"></p>
      </td>
      <td className="nick">
         <a href="#!" onClick={ () => UserDetail(item.player_name)}>
         {item.player_name}</a>
      </td>
      <td className="rank_class">
         <img src={'/Front/Rank/icon/'+item.rank+'.png'}/>{new FuncoesWebsite().NameRanking(parseInt(item.rank))}
      </td>
      <td className="gray">{new FuncoesWebsite().NewNumber(item.exp)}</td>
   </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}

class MatchList extends Component {
  render() {
    DatabaseTs.sort(function (x, y) {
      return y.fights - x.fights;
    })
    const items = []
    var IdUser = 0
    const query = DatabaseTs.slice(0, 20);
    query.map(function(item){
      IdUser++
     items.push(<tr key={IdUser}>
      <td className="rank">
         {IdUser}
         <p className="rank_same"></p>
      </td>
      <td className="nick">
         <a href="#!" onClick={ () => UserDetail(item.player_name)}>
         {item.player_name}</a>
      </td>
      <td className="rank_class">
         <img src={'/Front/Rank/icon/'+item.rank+'.png'}/>{new FuncoesWebsite().NameRanking(parseInt(item.rank))}
      </td>
      <td className="gray">{item.fights} ({item.fights_win} / {item.fights_lost})</td>
   </tr>)
    })
    return (<>
    {items}
</>
     )
  }
}

export {Individual, SecundList, IndividualClan, SecundListClan, ExpList, MatchList, PaginacaoUsers}

