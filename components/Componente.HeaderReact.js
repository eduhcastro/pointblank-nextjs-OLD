import React, { Component } from 'react'

function NovoNumero(Nmb){
  if(Nmb == null){
    return 0
  }
  return new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(Nmb)
}

class SecundList extends Component {
  state = {}
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {
    const res = await fetch('/api/ranking/home')
    const json = await res.json()
    await this.setStateAsync({user: json[1].player_name, rank: json[1].rank, exp: json[1].exp, 
      user2: json[2].player_name, rank2: json[2].rank, exp2: json[2].exp,
      user3: json[3].player_name, rank3: json[3].rank, exp3: json[3].exp,
      user4: json[4].player_name, rank4: json[4].rank, exp4: json[4].exp})
  }
  
  render() {
    const userimg = '/Front/Rank/icon/'+this.state.rank+'.png'
    const userimg2 = '/Front/Rank/icon/'+this.state.rank2+'.png'
    const userimg3 = '/Front/Rank/icon/'+this.state.rank3+'.png'
    const userimg4 = '/Front/Rank/icon/'+this.state.rank4+'.png'
    return (<>
    <p>
      <span className="nick second">
      {this.state.user || 'Unknown'}</span>
           <span className="exp">
       <img src={userimg || '/Front/Rank/icon/0.png'}/> {NovoNumero(this.state.exp) || 'Unknown'}
     </span>
     </p>
     <p>
       <span className="nick third">{this.state.user2 || 'Unknown'}</span>
       <span className="exp">
         <img src={userimg2 || '/Front/Rank/icon/0.png'}/> {NovoNumero(this.state.exp2) || 'Unknown'}
		</span>
	</p>
    <p>
      <span className="nick fourth">{this.state.user3 || 'Unknown'}</span>
      <span className="exp">
			<img src={userimg3 || '/Front/Rank/icon/0.png'}/> {NovoNumero(this.state.exp3) || 'Unknown'}
			</span>
		</p>
		<p>
			<span className="nick fifth">{this.state.user4 || 'Unknown'}</span>
			<span className="exp">
				<img src={userimg4 || '/Front/Rank/icon/0.png'}/> {NovoNumero(this.state.exp4) || 'Unknown'}
				</span>
			</p>
</>
     )
  }
}

class Individual extends Component {
  state = {}
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {
    const res = await fetch('http://localhost:3000/api/ranking/home')
    const json = await res.json()
    await this.setStateAsync({user: json[0].player_name, rank: json[0].rank, exp: json[0].exp})
  }
  render() {
    const userimg = '/Front/Rank/icon/'+this.state.rank+'.png'
    return (
      <p>
      <span className="nick second">{this.state.user || 'Unknown'}</span>
      <span className="exp">
          <img src={userimg  || '/Front/Rank/icon/0.png'}/>{NovoNumero(this.state.exp) || 'Unknown'}
      </span>
    </p>
    );
  }
}


export {Individual, SecundList}

