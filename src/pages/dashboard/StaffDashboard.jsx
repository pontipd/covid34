import React, { useState, useEffect } from 'react'
import { dbFireStore } from '../../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import CountUp from 'react-countup'
import _ from 'lodash'
import Loading from '../../components/Loading'
import { Pie, Doughnut, Line, Bar, bubble, Bubble } from 'react-chartjs-2';


const StaffDashboard = () => {
    const [staff, setStaff] = useState([])
    console.log(staff)
    const [loading, setLoading] = useState(false)

    const [today, setToday] = useState('')
    function setDate () {
        let d = new Date();
        let ye = new Intl.DateTimeFormat('th', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('th', { month: 'long' }).format(d);
        let da = new Intl.DateTimeFormat('th', { day: 'numeric' }).format(d);
        //console.log(`${da} ${mo} ${ye}`);
        setToday(`${da} ${mo} ${ye}`)
    }

    
    useEffect(() => {
        setLoading(true)
        const fetchStaff = onSnapshot(collection(dbFireStore, "staff"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setStaff(data)
        });
        setLoading(false)
        setDate()
    }, [])
    

            if (loading) {return <Loading />}
        let a = _.filter(staff,{vaccinestatus:"ได้รับวัคซีน"})
        console.log(a)
        let b = _.filter(staff,{vaccinestatus:"อยู่ระหว่างรอการจัดสรรวัคซีน"})
        console.log(b)
        let c = _.filter(staff,{vaccinestatus:"รอวัคซีนทางเลือก"})
        console.log(c)
        let d = _.filter(staff,{vaccinestatus:"ปัญหาด้านสุขภาพ"})
        console.log(d)
        let e = _.filter(staff,{vaccinestatus:"ข้อจำกัดด้านอายุ"})
        console.log(e)
        let f = _.filter(staff,{vaccinestatus:"ข้อจำกัดด้านเชื้อชาติ/สัญชาติ"})
        console.log(f)
        let g = _.filter(staff,{vaccinestatus:"ไม่ประสงค์รับวัคซีน"})
        console.log(g)
        let agee=_.filter(staff,(o)=> o.age >12 )
        console.log(agee)
        let vaccine_receive1 = _.filter(staff,(o)=> o.vaccine_receive1)
        console.log(vaccine_receive1)
        let vaccine_receive2 = _.filter(staff,(o)=> o.vaccine_receive2)
        console.log(vaccine_receive2)
        let vaccine_receive3 = _.filter(staff,(o)=> o.vaccine_receive3)
        console.log(vaccine_receive3)
        let family = _.filter(staff,(o)=> o.family)
        console.log(family)
        let staff1 = _.filter(staff,(o)=> o.staff)
        console.log(staff1)

        const stateBar = {
            labels: ['ได้รับวัคซีนแล้ว',"อยู่ระหว่างรอการจัดสรรวัคซีน","รอวัคซีนทางเลือก","ปัญหาด้านสุขภาพ","ข้อจำกัดด้านอายุ","ข้อจำกัดด้านเชื้อชาติ/สัญชาติ","ไม่ประสงค์รับวัคซีน"],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                backgroundColor: [
                    '#2FDE00',
                    '#6800B4'
                  ],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [a.length, b.length,c.length,d.length,e.length,f.length,g.length]
              }
            ]
        }

    return (
        <> 
        <div className="dashboard">
         <div className="container-sm">
                <div className="dashboard-content">
                      <div className="card-body">
                           <h4 className="card-title text-center">ข้อมูลกลุ่มคุณครู</h4>
                       </div>
        <div class="row">
          <div className="leftcolumn ">
            <div className="card1 text-center">
              <div className="column">
                <div className="menu1 text-center">
                  <div className="me3"><p>จำนวนครูทั้งหมด</p></div>
                    <div className="co">
                          <ul><li><h1><CountUp start={0} end={3298} duration={1} delay={0}>
                                {({ countUpRef }) => (
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                )}
                            </CountUp></h1></li>
                          <li><h7>คน</h7></li>
                          </ul>
                    </div>
                  </div>
                </div>
         <div className="menus text-center">
           <div className="me2"><p>จำนวนคนที่ได้รับวัคซีน</p></div>
            <div className="co51">
            <ul>
              {/* <li>ในครอบครัวทั้งหมด</li> */}
              <li><h1>{a.length}</h1></li>
              <li><h7>คน</h7></li>
            </ul>
           </div>
          </div>

            <div className="menusno text-center">
                <div className="me"><p>จำนวนคนที่ไม่ได้รับวัคซีน</p></div>
                    <div className="co51">
                      <ul>
                        {/* <li>(เกณฑ์อายุ 12 ปี ขึ้นไป)</li> */}
                        <li><h1>{ b.length+c.length+d.length+e.length+f.length+g.length}</h1></li>
                        <li><h7>คน</h7></li>
                      </ul>
                    </div> 
                </div>
            </div>
            <div className="card8">
              <div className="column">
                <div className="menu12 text-center">
                  <div className="me3"><p>จำนวนคนที่ได้รับวัคซีน</p></div>
                    <div className="co">
                      <ul>
                        <li><h1>{a.length}</h1></li>
                        <li><h7>คน</h7></li>
                        </ul>
  </div>
      </div>
    
      
    </div>
    <div className="main2  text-center">
  
<div className="me01"><h5>เข็ม 1</h5></div>
<div className="me011"><h1>{vaccine_receive1.length}</h1></div>
<div className="me11"><p>คน</p></div>

  
</div>

<div className="main21  text-center">
<div className="me01"><h5>เข็ม 2</h5></div>
<div className="me011"><h1>{vaccine_receive2.length}</h1></div>
<div className="me11"><p>คน</p></div>

  
</div>
<div className="main22  text-center">
<div className="me01"><h5>เข็ม 3</h5></div>
<div className="me011"><h1>{vaccine_receive3.length}</h1></div>
<div className="me11"><p>คน</p></div>

  
</div>
    
    </div>
    
  </div>
  <div className="rightcolumn">
    
    {/* <div className="card"  > */}
      
      <div className="menu31  text-center"  > 
      <div className="me3"><p>จำนวนคนที่ยังไม่ได้รับวัคซีน</p></div>
      <div className="co"><ul>
<li><h1>{b.length+c.length+d.length+e.length+f.length+g.length}</h1></li>
<li><h7>คน</h7></li>

  </ul>
  </div></div>
  <div className="rcolumn ">
   
   <div className="menu4">
     
    
    <div className="menu6 text-center">
    <div className="me2"><p>อยู่ระหว่างรอการจัดสรรวัคซีน</p></div></div>
    <div className="main66  text-center">
    <div className="me"><p>{b.length} คน</p></div></div>
    <div className="menu66 text-center">
    <div className="me2"><p>ข้อจำกัดด้านเชื้อชาติ/สัญชาติ</p></div></div>
        <div className="main666  text-center">
            <div className="me"><p>{c.length} คน</p></div></div>

            <div className="menu6 text-center">
    <div className="me2"><p>รอวัคซีนทางเลือก</p></div></div>
    <div className="main66  text-center">
    <div className="me"><p>{d.length} คน</p></div></div>
    <div className="menu66 text-center">
    <div className="me2"><p>ปัญหาด้านสุขภาพคน</p></div></div>
        <div className="main666  text-center">
            <div className="me"><p>{e.length} คน</p></div></div>
            <div className="menu6 text-center">
    <div className="me2"><p>ข้อจำกัดด้านอายุ</p></div></div>
    <div className="main66  text-center">
    <div className="me"><p>{f.length} คน</p></div></div>
    <div className="menu66 text-center">
    <div className="me2"><p>ไม่ประสงค์รับวัคซีน</p></div></div>
        <div className="main666  text-center">
            <div className="me"><p>{g.length} คน</p></div></div>

            <div className="menu0 text-center">
    <div className="me2"><p></p></div></div>
        <div className="main0  text-center">
            <div className="me"><p></p></div></div>
            
            
             </div></div> </div></div></div></div> </div>
             {/* </div>          */}
            
  </>

   
    )
}

export default StaffDashboard
