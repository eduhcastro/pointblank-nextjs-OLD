import React, { Component } from 'react'

class Load extends Component {
    state = {}
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
    async componentDidMount() {
    const res = await fetch('/api/ranking/individual')
    const json = await res.json()
    const result = await json
    await this.setStateAsync(result)
    }
    render() {
       if(this.state.length != 0){
        const resultado = this.state
        Executar(resultado)
      }
      return (
      <tr style={{display : 'none'}}></tr>
      );
    }
  }

  const CloseDiv = (e) =>  {
    $('.layer_popup').fadeOut();
}


export {Load,CloseDiv}


function NovoNumero(Nmb){
  if(Nmb == null){
    return 0
  }
  return new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(Nmb)
}

function Executar(Objetos){
  var player = {
  };
  /**
   *
   * @param {string} player_name
   * @param {number} rank
   * @param {number} exp
   */
  
  
  player.renderPrize = function (player_name, rank, exp, id) {
    if(player_name.length > 0){
  
    var tpl = "";
    tpl += '<tr>';
    tpl +=   '<td class="rank">'+id+'';
    tpl +=      '<p class="rank_same"></p>';
    tpl +=    '</td>';
    tpl +=      '<td class="nick">';
    tpl +=        '<a href="#!" onClick="UserDetail(\''+player_name+'\')">';
    tpl +=          ''+player_name+'</a>';
    tpl +=       '</td>';
    tpl +=     '<td class="rank_class">';
    tpl +=       '<img src="/Front/Rank/icon/'+rank+'.png">'+NameRank(parseInt(rank))+'</td>';
    tpl +=         '<td class="gray">'+NovoNumero(exp)+'</td>';
    tpl +=      '</tr>';
  
  
    $("#rankinglist").append(tpl);
  }
  };
  /**
   * @param {Array} items
   */
  player.rank = function (items) {
    var id = 1
    items.map(function(item){
      player.renderPrize(
        item.player_name,
        item.rank,
        item.exp,
        id++
    );
  })};
  if (Objetos[0] === undefined || Objetos[0].length == 0) {
  }else{
    player.rank((Objetos[0]));
  }
}




