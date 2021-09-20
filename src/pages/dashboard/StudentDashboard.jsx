import React from "react";
import { dbFireStore } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import CountUp from "react-countup";
import _ from "lodash";
import Loading from "../../components/Loading";
const StudentDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container-sm">
          <div className="dashboard-content1">
            <div className="card-body">
              <h4 className="card-title text-center">ข้อมูลกลุ่มของนักเรียน</h4>
            </div>

            <div className="row">
           <div className="col-md-4">
           <div className="leftcolumn3 ">
                <div className="card1 text-center">
                  <div className="column">
                    <div className="menu1 text-center">
                      <div className="me3">
                        <p>จำนวนนักเรียนทั้งหทด</p>
                      </div>
                      <div className="co">
                        <ul>
                          <li>
                            <h1>
                              <CountUp
                                start={0}
                                end={3298}
                                duration={1}
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <h1>
                                    <span ref={countUpRef} />
                                  </h1>
                                )}
                              </CountUp>
                            </h1>
                          </li>
                          <li>
                            <h7>คน</h7>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="menus text-center">
                    <div className="me2">
                      <p>จำนวนคนที่ได้รับวัคซีน</p>
                    </div>
                    <div className="co51">
                      <ul>
                        {/* <li>ในครอบครัวทั้งหมด</li> */}
                        <li>
                          <h1>66</h1>
                        </li>
                        <li>
                          <h7>คน</h7>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="menusno text-center">
                    <div className="me">
                      <p>จำนวนคนที่ไม่ได้รับวัคซีน</p>
                    </div>
                    <div className="co51">
                      <ul>
                        
                        <li>
                          <h1>66</h1>
                        </li>
                        <li>
                          <h7>คน</h7>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card8">
                  <div className="column">
                    <div className="menu12 text-center">
                      <div className="me3">
                        <p>จำนวนคนที่ได้รับวัคซีน</p>
                      </div>
                      <div className="co">
                        <ul>
                          <li>
                            <h1>55</h1>
                          </li>
                          <li>
                            <h7>คน</h7>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main2  text-center">
                    <div className="me01">
                      <h5>เข็ม 1</h5>
                    </div>
                    <div className="me011">
                      <h1>66</h1>
                    </div>
                    <div className="me11">
                      <p>คน</p>
                    </div>
                  </div>

                  <div className="main21  text-center">
                    <div className="me01">
                      <h5>เข็ม 2</h5>
                    </div>
                    <div className="me011">
                      <h1>66</h1>
                    </div>
                    <div className="me11">
                      <p>คน</p>
                    </div>
                  </div>
                  <div className="main22  text-center">
                    <div className="me01">
                      <h5>เข็ม 3</h5>
                    </div>
                    <div className="me011">
                      <h1>66</h1>
                    </div>
                    <div className="me11">
                      <p>คน</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           <div className="col-md-4">
           <div className="rightcolumn33">
                {/* <div className="card"  > */}
                <div className="menu31  text-center">
                  <div className="me3">
                    <p>จำนวนคนที่ยังไม่ได้รับวัคซีน</p>
                  </div>
                  <div className="co">
                    <ul>
                      <li>
                        <h1>
                          555
                        </h1>
                      </li>
                      <li>
                        <h7>คน</h7>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rcolumn ">
                  <div className="menu4">
                    <div className="menu6 text-center">
                      <div className="me2">
                        <p>อยู่ระหว่างรอการจัดสรรวัคซีน</p>
                      </div>
                    </div>
                    <div className="main66  text-center">
                      <div className="me">
                        <p> คน</p>
                      </div>
                    </div>
                    <div className="menu66 text-center">
                      <div className="me2">
                        <p>ข้อจำกัดด้านเชื้อชาติ/สัญชาติ</p>
                      </div>
                    </div>
                    <div className="main666  text-center">
                      <div className="me">
                        <p>55 คน</p>
                      </div>
                    </div>

                    <div className="menu6 text-center">
                      <div className="me2">
                        <p>รอวัคซีนทางเลือก</p>
                      </div>
                    </div>
                    <div className="main66  text-center">
                      <div className="me">
                        <p>55 คน</p>
                      </div>
                    </div>
                    <div className="menu66 text-center">
                      <div className="me2">
                        <p>ปัญหาด้านสุขภาพคน</p>
                      </div>
                    </div>
                    <div className="main666  text-center">
                      <div className="me">
                        <p>55 คน</p>
                      </div>
                    </div>
                    <div className="menu6 text-center">
                      <div className="me2">
                        <p>ข้อจำกัดด้านอายุ</p>
                      </div>
                    </div>
                    <div className="main66  text-center">
                      <div className="me">
                        <p>55คน</p>
                      </div>
                    </div>
                    <div className="menu66 text-center">
                      <div className="me2">
                        <p>ไม่ประสงค์รับวัคซีน</p>
                      </div>
                    </div>
                    <div className="main666  text-center">
                      <div className="me">
                        <p>55 คน</p>
                      </div>
                    </div>

                    <div className="menu0 text-center">
                      <div className="me2">
                        <p></p>
                      </div>
                    </div>
                    <div className="main0  text-center">
                      <div className="me">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
           </div>
           <div className="col-md-4">
           <div className="table">
           <div className="td">
           <div className="th">
           
           <table >
  <tr>
  <th>ระดับชั้น</th>
    <th bgcolor="#1DB100" >เข็ม 1</th>
    <th bgcolor="#0d5f20ec">เข็ม 2</th>
    <th bgcolor="#05441e">เข็ม 3</th>
    <th bgcolor="#B51700">ไม่รับ</th>
  </tr>
 
  <tr>
    <td>ชั้น 3</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
 <tr>
 <td>ชั้น 4</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
  <td>ชั้น 5</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td >ชั้น 6</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 7</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 8</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 9</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 10</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 11</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td>ชั้น 12</td>
    <td>100</td>
    <td>100</td>
    <td>0</td>
    <td>0</td>
    
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
  </tr>
</table>
  </div>
           </div>
          
           </div>
</div>


            </div>
          
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default StudentDashboard;
