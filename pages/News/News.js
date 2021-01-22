import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
export default function Patch() {
  return (
    <>

  <MyHeader/>
    <div id="layer_reg">
    </div>
    <div id="wrap">
      <div className="GNB">
        <div className="gnb_cont">
      <p className="logo"><Link href="/"><a><img src="/Front/Commom/logo_gnb_pb.png"/></a></Link></p>
      <script type="text/javascript" src="/Base/js/select_design.js"></script>
      <MyMenu/>
   </div>
   <p className="gnb_bg"></p>
</div>
        <div className="substance">
            <InfoLeft/>
        <div className="contents">
        <div className="sub_title">NEWS</div>
        <div className="sub_contents">
      <ul className="bbs_list_news">
         <li className="thumb">
            <dl>
               <dd className="thumb_img"><img src="/Front/News/2.jpg" alt="Patch Notes, 12.01.2021"/></dd>
               <dd>
                <p className="tit"><img src="/Front/Commom/bul_txt_news.png" alt="news"/><a href="view.do?page=1&amp;idx=2533">PBAC - Rule Set</a></p>
                <p className="date">21 January, 2021</p>
                  <p className="txt"><a href="view.do?page=1&amp;idx=2533">
                     PBAC Rule Set
                     1.1. All teams participating in the tournament are considered to have accepted all the rules.
                     1.2. The tournament is limited to 64 teams. The first 64 teams registered will be entitled to play.
                     1.3. It is the responsibility of th..</a>
                  </p>
               </dd>
            </dl>
         </li>
         </ul>
      <ul className="bbs_paging">
         <li className="first"><a href="/Noticia?id=1"><span>First</span></a></li>
         <li className="prev"><a href="/Noticia?id=1"><span>Preview</span></a></li>
         <li className="here"><a href="/Noticia?id=1">1</a></li>
         <li><a href="/Noticia?id=1">2</a></li>
         <li><a href="/Noticia?id=1">3</a></li>
         <li><a href="/Noticia?id=1">4</a></li>
         <li><a href="/Noticia?id=1">5</a></li>
         <li className="next"><a href="/Noticia?id=1"><span>Next</span></a></li>
         <li className="last"><a href="/Noticia?id=1"><span>Last</span></a></li>
      </ul>
   </div>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
