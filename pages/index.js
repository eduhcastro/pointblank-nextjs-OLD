import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../components/Componente.HeaderModules'
export default function Home() {
  return (
    <>
<MyHeader/>
<div id="layer_reg"></div>
<div id="wrap">
   <div className="GNB">
      <div className="gnb_cont">
         <p className="logo">
            <Link href="/">
            <a><img src="/Front/Commom/logo_gnb_pb.png"/></a></Link>
         </p>
         <script type="text/javascript" src="/Base/js/select_design.js"></script>
         <MyMenu/>
      </div>
      <p className="gnb_bg"></p>
   </div>
   <div className="substance">
      <InfoLeft/>
      <div className="contents">
         <div className="main_banner">
            <div className="main_slide">
               <div className="item">
                  <Link  href="https://pb.tamgame.com/news/eventnote/view.do?page=1&evttype=0&idx=1508">
                  <a target='_blank'><img src="/Front/Announcers/katilim_rb_TR.jpg" alt="Ödülleri İle Dolu Dolu Katılım Etkinliği"/></a></Link>
               </div>
            </div>
            <div className="main_news">
               <div className="news">
                  <p className="main_tit">
                     <Link  href="/news/notice/list.do">
                     <a style={{textTransform: "uppercase"}}>Haberler</a></Link>
                     <span className="more">
                        <Link  href="/news/notice/list.do">
                        <a><img src="/Front/Bottons/btn_tit_more.png"/></a></Link>
                     </span>
                  </p>
                  <ul className="special">
                     <li className="thumb">
                        <p className="bul"><img src="/Front/Commom/bul_thumb_news.png"/></p>
                        <p>
                           <Link href="/Noticias">
                           <a><img src="/Front/Announcers/ViewImagedo0.jpg"/></a></Link>
                        </p>
                     </li>
                     <li className="cont">
                        <p className="title">
                           <Link href="/Noticias">
                           <a>Aralık Ayı Kredi Kartı İle Ödeme Etkinliği</a></Link>
                        </p>
                        <p className="txt">
                           <Link href="/Noticias">
                           <a>16.12.2020-04.01.2021 tarihleri arasında Kredi Kartı ile yükleme yapan herkes birbirinden güzel kasaların sahibi oluyor!</a></Link>
                        </p>
                        <p className="date">16 Aralık, 2020</p>
                     </li>
                  </ul>
                  <ul className="list">
                     <li>
                        <Link href="/Noticias">
                        <a>Point Blank Advanced Cup Kayıtları Başladı!</a></Link><span>14 Aralık, 2020</span>
                     </li>
                     <li>
                        <Link href="/Noticias">
                        <a>Aralık Ayı İlk Kez Ödeme Etkinliği</a></Link><span>01 Aralık, 2020</span>
                     </li>
                     <li>
                        <Link href="/Noticias">
                        <a>Aralık Ayı E-Pin ile Yükle Kazan Etkinliği</a></Link><span>01 Aralık, 2020</span>
                     </li>
                  </ul>
               </div>
               <div className="esports">
                  <p className="main_tit">
                     <Link href="http://esports.tamgame.com">
                     <a target="_blank">TURNUVA HABERLERİ</a></Link>
                     <span className="more">
                        <Link href="/Noticias">
                        <a><img src="/Front/Bottons/btn_tit_more.png"/></a></Link>
                     </span>
                  </p>
                  <ul>
                     <li className="thumb">
                        <Link href="https://esports.tamgame.com/html/Notice/NoticeView.php?noticeIDX=999">
                        <a><img src="/Front/Announcers/ViewImagedo3.jpg"/></a></Link>
                     </li>
                     <li className="cont">
                        <p className="title">
                           <Link href="https://esports.tamgame.com/html/Notice/NoticeView.php?noticeIDX=999">
                           <a>PBAC Kural Paketi</a></Link>
                        </p>
                        <p className="date">15 Aralık, 2020</p>
                        <p className="txt">
                           <Link href="https://esports.tamgame.com/html/Notice/NoticeView.php?noticeIDX=999">
                           <a>Point Blank Advanced Cup Kural Paketi</a></Link>
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="main_event">
               <div className="fix">
                  <a href="https://www.tamgame.com/premiumcafe/info.do" target="_blank">
                  <img src="/Front/Announcers/banner_fix.jpg" />
                  </a>
               </div>
            </div>
         </div>
         <div className="left_banner"><a href="https://pb.tamgame.com/news/notice/view.do?page=1&idx=2477"><img src="/Front/Announcers/ViewImagedo1.jpg" alt="Point Blank Advanced Cup Kayıtları Başladı!"/></a></div>
         <div className="quick_menu">
            <img src="/Front/Commom/quick_tit.jpg"/>
            <ul>
               <li><a href="/Noticias"><img src="/Front/Commom/quick_charge.png"/></a></li>
               <li><a href="/guide/start/interface.do"><img src="/Front/Commom/quick_guide.png"/></a></li>
               <li><a href="/Noticias"><img src="/Front/Commom/quick_support.png"/></a></li>
               <li><a href="http://esports.tamgame.com"><img src="/Front/Commom/quick_tournament.png" /></a></li>
            </ul>
         </div>
      </div>
      <MyFooter/>
   </div>
</div>
</>
  )
}
