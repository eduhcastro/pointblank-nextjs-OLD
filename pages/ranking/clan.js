import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../styles/IN/Header.js'
export default function Home() {
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
                        <li className="last_on"><a href="javascript:void(0);" onClick="GoRankType('exp')" className="btn">XP</a></li>
                        <li className="first"><a href="javascript:void(0);" onClick="GoRankType('killdeath')" className="btn">KILL/DEATH</a></li>
                        <li className="basic"><a href="javascript:void(0);" onClick="GoRankType('headshot')" className="btn">HEADSHOT</a></li>
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
                                <th>Clan Name</th>
                                <th>title</th>
                                <th>XP</th>
                                <th>W/L</th>
                                <th className="last">Point</th>
							</tr>
                            </thead>
                            <tbody>
                            <tr className="first">
								<td className="rank">1 <p className="rank_same"></p><p></p></td>
								<td className="nick">ROKETLER´</td>
								<td className="master">Yasoman`</td>
                                <td className="red">160624967</td>
                                <td className="red">%69</td>
                                <td className="gray">1000.00</td>
                            </tr>
                            </tbody>
                        </table>
                        <ul className="bbs_paging">
										<li className="first"><a href="javascript:void(0);"><span>First</span></a></li>
					<li className="prev"><a href="javascript:void(0);"><span>Preview</span></a></li>
					<li className="here"><a href="javascript:void(0);">1</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(2)">2</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(3)">3</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(4)">4</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(5)">5</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(6)">6</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(7)">7</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(8)">8</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(9)">9</a></li>
					<li><a href="javascript:void(0);" onClick="GoPage(10)">10</a></li>
					<li className="next"><a href="javascript:void(0);" onClick="GoPage(2)"><span>Next</span></a></li>
					<li className="last"><a href="javascript:void(0);" onClick="GoPage(160322)"><span>Last</span></a></li>
					</ul>
                        </div>
                        <div className="bbs_search">
                <form name="iForm">
                	<input type="hidden" id="keyword" name="keyword" value=""/>
                    <p><input type="text" name="nickname" id="nickname" value="Please Enter Clan Name" onFocus="this.style.color='black';" style={{color: "black"}}/></p>
                    <p className="btn_form"><a href="javascript:void(0);" onClick="javascript:GoSearch();" className="btn">CONTROL</a></p>
                </form>
                </div>
                </div>    
      </div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
