import React, { Component } from 'react'
import Link from 'next/link'
import Patch from './DataBase/Patch.ts'
import News from './DataBase/News.ts'
import Tournaments from './DataBase/Tournaments.ts'
import Slider from "react-slick";



class AllNews extends Component {
    render() {
          const items = []
          var IdUser = 0
          const array3 = Patch.concat(News).slice(0, 4);
          array3.sort(function (x, y) {
            return  new Date(y.date) -  new Date(x.date);
          })
          array3.map(function(item){
            IdUser++
            if(IdUser == 1){
                items.push(<ul key={IdUser} className="special"><li className="thumb"><p className="bul"><img src="/Front/Commom/bul_thumb_news.png"/></p><p><a href="/Noticias"><img src={item.img}/></a></p></li><li className="cont"><p className="title"><a href="/Noticias">{item.title}</a></p><p className="txt"><a href="/Noticias">Patch Notices</a></p><p className="date">{item.date}</p></li></ul>) 
            }
            if(IdUser > 1){
            items.push(<ul key={IdUser+1} className="list"><li><a href="/Noticias">{item.title}</a><span>{item.date}</span></li></ul>)
            }
          })
          return (<>
          {items}
      </>
           )
    }
}

class Tournament extends Component{
  render(){
    Tournaments.sort(function (x, y) {
      return y.id - x.id;
    })
    const items = []
    const query = Tournaments.slice(0, 1)
    query.map(function(item){
      items.push(<ul key="1"><li className="thumb"><Link href={"/News/Tournaments/"+item.id}><a><img src={item.img}/></a></Link></li><li className="cont"><p className="title"><Link href={"/News/Tournaments/"+item.id}>{item.title}</Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"/News/Tournaments/"+item.id}>A Beast Tournament for all!</Link></p></li></ul>)
    })
    return(<>
    {items}
    </>)
  }
}


class SimpleSlider extends Component{
  render(){
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const items = []
  var KeyFor = 0
  const slides = Patch.concat(News,Tournaments).slice(0, 5);
  slides.sort(function (x, y) {
    return  new Date(y.date) -  new Date(x.date);
  })
  slides.map(function(item){
    if(item.imgbanner != null){
      KeyFor++
      items.push(<div key={KeyFor} className="item">
      <Link href="/News/News"><a><img src={item.imgbanner} alt={item.title}/></a></Link>
    </div>)
    }
})
  return (
    <Slider {...settings}>
      {items}
    </Slider>
  );
  }
}

function TOURMENT(obj){
  const teste = Tournaments.map(function(item){
    if(item.id == obj){
      return (item.content)
    }
  })
  return (<div className="text-container" dangerouslySetInnerHTML={{ __html: teste }} />)
}

function PATCH(obj){
  const teste = Patch.map(function(item){
    if(item.id == obj){
      return (item.content)
    }
  })
  return (<div className="text-container" dangerouslySetInnerHTML={{ __html: teste }} />)
}


class TournamentsList extends Component{
  render(){
    Tournaments.sort(function (x, y) {
      return  new Date(y.date) -  new Date(x.date);
    })
    const items = []
    const query = Tournaments.slice(0, 20)
    query.map(function(item){
      items.push(<li className="thumb"><dl><dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd><dd><p className="tit"><Link href={"Patch/"+item.id}><a>{item.title}</a></Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"Patch/"+item.id}><a>Dear Point Blank Players,Our maintenance took place on 12.01.2021, which started at 04:30 and was completed at 08:43, thank you for your patience and understanding during the maintenance period.The maintenance covere..</a></Link></p></dd></dl></li>)
    })
    return(<>
    {items}
    </>)
  }
}
class PatchList extends Component{
  render(){
    Patch.sort(function (x, y) {
      return  new Date(y.date) -  new Date(x.date);
    })
    const items = []
    const query = Patch.slice(0, 20)
    query.map(function(item){
      items.push(<li key={item.id} className="thumb"><dl><dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd><dd><p className="tit"><Link href={"/News/Patch/"+item.id}><a>{item.title}</a></Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"/News/Patch/"+item.id}><a>Dear Point Blank Players,Our maintenance took place on 12.01.2021, which started at 04:30 and was completed at 08:43, thank you for your patience and understanding during the maintenance period.The maintenance covere..</a></Link></p></dd></dl></li>)
    })
    return(<>
    {items}
    </>)
  }
}
  class NewsList extends Component{
    render(){
      News.sort(function (x, y) {
        return  new Date(y.date) -  new Date(x.date);
      })
      const items = []
      const query = News.slice(0, 20)
      query.map(function(item){
        items.push(<li key={item.id} className="thumb">
        <dl>
           <dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd>
           <dd>
            <p className="tit"><img src="/Front/Commom/bul_txt_news.png" alt="news"/><Link href={"/News/Notice/"+item.id}><a>{item.title}</a></Link></p>
            <p className="date">{item.date}</p>
              <p className="txt"><Link href={"/News/Notice/"+item.id}><a>
                 PBAC Rule Set
                 1.1. All teams participating in the tournament are considered to have accepted all the rules.
                 1.2. The tournament is limited to 64 teams. The first 64 teams registered will be entitled to play.
                 1.3. It is the responsibility of th..</a></Link>
              </p>
           </dd>
        </dl>
        </li>)
      })
      return(<>
      {items}
      </>)
    }
  }
export {AllNews,Tournament,SimpleSlider,TOURMENT,TournamentsList,PatchList,NewsList,PATCH}
