import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {PageGet} from '../../components/Componente.RankModules'
import {Load} from '../../components/Componente.Load'

export default function Individual() {
  return (
    <>
  <MyHeader/>
    <div id="layer_reg"></div>
    <div id="wrap">
      <div className="GNB">
        <div className="gnb_cont">
      <p className="logo"><Link href="/"><a><img src="/Front/imgs/logo_gnb_pb.webp"/></a></Link></p>
      <script type="text/javascript" src="/Base/js/select_design.js"></script>
      <MyMenu/>
   </div>
   <p className="gnb_bg"></p>
</div>
<div className="substance">
		<InfoLeft/>
        <div className="contents">
        <div className="sub_title">Individual Ranking</div>
        	<div className="sub_contents_pnone">
				<div className="sub_tab_many_line">
					<ul className="sub_tab_many sub_tab_four <!--sub_tab_three-->">
                        <li className="last_on"><a href="#!" className="btn">XP</a></li>
                        <li className="first"><a href="#!" className="btn">KILL/DEATH</a></li>
                        <li className="basic"><a href="#!" className="btn">HEADSHOT</a></li>
					</ul>
                    </div>
                    <div className="cont_p30">
                    <span style={{fontWeight: "bold"}}>Season :</span>
                                            <table className="bbs_list_rank">
                                                <colgroup>
							<col style={{width:"114px"}}/>
							<col style={{width:"238px"}}/>
							<col style={{width:"218px"}}/>
							<col style={{width:"100px"}}/>
                            </colgroup>
                            <thead>
							<tr>
								<th>Ranking</th>
                                <th>Character</th>
                                <th>Rank</th>
                                <th className="last">XP</th>
							</tr>
                            </thead>
                            <tbody id="rankinglist">
                            <Load/>
                            </tbody>
                        </table>
                        <ul className="bbs_paging">
										<li className="first"><a href="#!"><span>First</span></a></li>
					<li className="prev"><a href="#!"><span>Preview</span></a></li>
					<li className="string here" data-target="1"><a data-targeta="1" href="#!" onClick={PageGet}>1</a></li>
					<li className="string" data-target="2"><a data-targeta="2" href="#!" onClick={PageGet}>2</a></li>
          <li className="string" data-target="3"><a data-targeta="3" href="#!" onClick={PageGet}>3</a></li>
          <li className="string" data-target="4"><a data-targeta="4" href="#!" onClick={PageGet}>4</a></li>
          <li className="string" data-target="5"><a data-targeta="5" href="#!" onClick={PageGet}>5</a></li>
          <li className="string" data-target="6"><a data-targeta="6" href="#!" onClick={PageGet}>6</a></li>
          <li className="string" data-target="7"><a data-targeta="7" href="#!" onClick={PageGet}>7</a></li>
          <li className="string" data-target="8"><a data-targeta="8" href="#!" onClick={PageGet}>8</a></li>
          <li className="string" data-target="9"><a data-targeta="9" href="#!" onClick={PageGet}>9</a></li>
          <li className="string" data-target="10"><a data-targeta="10" href="#!" onClick={PageGet}>10</a></li>
					<li className="next"><a href="#!"><span>Next</span></a></li>
					<li className="last"><a id="lastpage" href="#!"><span>Last</span></a></li>
					</ul>
                        </div>
                        <div className="bbs_search">
                
                </div>
                </div>    
      </div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
