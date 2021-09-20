import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectUserId } from "../../app/reducer/userSlice"
import { dbFireStore } from "../../config/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const BothFirst = () => {

    const userId = useSelector(selectUserId)
    const [loading, setLoading] = useState(false)
    
    /** section A */
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [born, setBorn] = useState('')
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [tel, setTel] = useState("")
    const [line, setLine] = useState("")

    /** section B */
    const [agentSchool, setAgentSchool] = useState('')

    /** section C */
    const [family, setFamily] = useState('')

    /** section D */
    //const [child, setChild] = useState('')

    /** section E */
    const [vaccineStatus, setVaccineStatus] = useState("")
    const [vaccine_1, setVaccine_1] = useState("")
    const [dateVaccine_1, setDateVaccine_1] = useState("")
    const [received1, setReceived1] = useState(false)
    const [vaccine_2, setVaccine_2] = useState(null)
    const [dateVaccine_2, setDateVaccine_2] = useState(null)
    const [received2, setReceived2] = useState(false)
    const [vaccine_3, setVaccine_3] = useState(null)
    const [dateVaccine_3, setDateVaccine_3] = useState(null)
    const [received3, setReceived3] = useState(false)

    /** State onChange User Section A */
    const onChangeFirstName = (e) => setFirstName(e.target.value)
    const onChangeLastName = (e) => setLastName(e.target.value)
    const onChangeAge = (e) => setAge(e.target.value)
    const onChangeGender = (e) => setGender(e.target.value)
    const onChangeTel = (e) => setTel(e.target.value)
    //const onChangeBorn = (e) => setBorn(e.target.value)
    const onChangeLine = (e) => setLine(e.target.value)

    /** State onChange Both section B */
    const onChangeAgentSchool = (e) => setAgentSchool(e.target.value)

    /** State onChange User Section C */
    const onChangeFamily = (e) => setFamily(e.target.value)

    /** State onChange User Section D */
    //const onChangeChild = (e) => setChild(e.target.value)

    /** State onChange User Section E */
    const onChangeVaccineStatus = (e) => setVaccineStatus(e.target.value)
    const onChangeVaccine_1 = (e) => setVaccine_1(e.target.value)
    const onChangeDateVaccine_1 = (e) => setDateVaccine_1(e.target.value)
    const onChangeReceived1 = (e) => setReceived1(e.target.checked)
    const onChangeVaccine_2 = (e) => setVaccine_2(e.target.value)
    const onChangeDateVaccine_2 = (e) => setDateVaccine_2(e.target.value)
    const onChangeReceived2 = (e) => setReceived2(e.target.checked)
    const onChangeVaccine_3 = (e) => setVaccine_3(e.target.value)
    const onChangeDateVaccine_3 = (e) => setDateVaccine_3(e.target.value)
    const onChangeReceived3 = (e) => setReceived3(e.target.checked)

    // const data = {
    //     primary: true,
    //     firstname: firstName,
    //     lastname: lastName,
    //     birthday: born,
    //     age: age,
    //     gender: gender,
    //     tel: tel,
    //     line: line,
    //     agentSchool: agentSchool,
    //     family: family,
    //     //child: child,
    //     vaccinestatus: vaccineStatus,
    //     vaccine_brand_1: vaccine_1,
    //     dateVaccine_1: dateVaccine_1,
    //     vaccine_receive1: received1,
    //     vaccine_brand_2: vaccine_2,
    //     dateVaccine_2: dateVaccine_2,
    //     vaccine_receive2: received2,
    //     vaccine_brand_3: vaccine_3,
    //     dateVaccine_3: dateVaccine_3,
    //     vaccine_receive3: received3,
    //     type: propsType,
    //     createby: userId,
    //     timestamp: serverTimestamp(),
    // }

    const addFirstUser = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            // const docRefParent = await addDoc(collection(dbFireStore, "parent"), {
            //     primary: true,
            //     firstname: firstName,
            //     lastname: lastName,
            //     birthday: born,
            //     age: age,
            //     gender: gender,
            //     tel: tel,
            //     line: line,
            //     //agentSchool: agentSchool,
            //     family: family,
            //     //child: child,
            //     vaccinestatus: vaccineStatus,
            //     vaccine_brand_1: vaccine_1,
            //     dateVaccine_1: dateVaccine_1,
            //     vaccine_receive1: received1,
            //     vaccine_brand_2: vaccine_2,
            //     dateVaccine_2: dateVaccine_2,
            //     vaccine_receive2: received2,
            //     vaccine_brand_3: vaccine_3,
            //     dateVaccine_3: dateVaccine_3,
            //     vaccine_receive3: received3,
            //     type: 'parent',
            //     createby: userId,
            //     created_timestamp: serverTimestamp(),
            // })
            // const docRefStaff = await addDoc(collection(dbFireStore, "staff"), {
            //     primary: true,
            //     firstname: firstName,
            //     lastname: lastName,
            //     birthday: born,
            //     age: age,
            //     gender: gender,
            //     tel: tel,
            //     line: line,
            //     agentSchool: agentSchool,
            //     family: family,
            //     //child: child,
            //     vaccinestatus: vaccineStatus,
            //     vaccine_brand_1: vaccine_1,
            //     dateVaccine_1: dateVaccine_1,
            //     vaccine_receive1: received1,
            //     vaccine_brand_2: vaccine_2,
            //     dateVaccine_2: dateVaccine_2,
            //     vaccine_receive2: received2,
            //     vaccine_brand_3: vaccine_3,
            //     dateVaccine_3: dateVaccine_3,
            //     vaccine_receive3: received3,
            //     type: 'staff',
            //     createby: userId,
            //     created_timestamp: serverTimestamp(),
            // })
            const docRefBoth = await addDoc(collection(dbFireStore, "both"), {
                primary: true,
                firstname: firstName,
                lastname: lastName,
                birthday: born,
                age: age,
                gender: gender,
                tel: tel,
                line: line,
                agentSchool: agentSchool,
                family: family,
                vaccinestatus: vaccineStatus,
                vaccine_brand_1: vaccine_1,
                dateVaccine_1: dateVaccine_1,
                vaccine_receive1: received1,
                vaccine_brand_2: vaccine_2,
                dateVaccine_2: dateVaccine_2,
                vaccine_receive2: received2,
                vaccine_brand_3: vaccine_3,
                dateVaccine_3: dateVaccine_3,
                vaccine_receive3: received3,
                type: 'both',
                createby: userId,
                created_timestamp: serverTimestamp(),
            })
            //setPropsType('');
            setLoading(false)
            // console.log("Document written Parent with ID: ", docRefParent.id)
            // console.log("Document written Staff with ID: ", docRefStaff.id)
            console.log("Document written Staff with ID: ", docRefBoth.id)
            //return <Redirect to="/account" />
            window.location.href = '/account'
        } catch (e) {
            console.error("Error adding document: ", e)
            console.log("Error adding document: ", e)
        }
    }

    switch (vaccineStatus) {
        case 'ได้รับวัคซีน':
            document.querySelector('.section-e').classList.remove('d-none')
            break;
        case 'อยู่ระหว่างรอการจัดสรรวัคซีน' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'รอวัคซีนทางเลือก' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'ปัญหาด้านสุขภาพ' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'ข้อจำกัดด้านอายุ' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'ข้อจำกัดด้านเชื้อชาติ/สัญชาติ' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'ไม่ประสงค์รับวัคซีน' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        case 'none' :
            document.querySelector('.section-e').classList.add('d-none')
            break;
        default:
            break;
    }

    const onChangeBorn = (event) => {
        setBorn(event.target.value)
        let today = new Date();
        let birthDate = new Date(event.target.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        //console.log('age: ' + age);
        setAge(age)
    }

    return (
        <>
            <div className="container pt-3">
                <h2 className="text-center">แบบฟอร์มสำหรับครู บุคลากรที่เป็นผู้ปกครอง</h2>
                <div className="form-personal-data my-4">
                    
                    <form onSubmit={addFirstUser}>

                        <div className="section-a">
                            <h5 className="mx-2 mb-3">ข้อมูลส่วนตัว</h5>
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="input-firstname" className="form-label mx-2">ชื่อ <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="ชื่อ" id="input-firstname" onChange={onChangeFirstName} required/>
                                    
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="input-lastname" className="form-label mx-2">นามสกุล <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="นามสกุล" id="input-lastname" onChange={onChangeLastName} required/>
                                </div>
                                <div className="col-sm-5 mb-3">
                                    <label htmlFor="input-date" className="form-label mx-2">วัน-เดือน-ปี เกิด <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="date" className="form-control" placeholder="วัน-เดือน-ปี เกิด" id="input-date" onChange={onChangeBorn} required/>
                                </div>
                                <div className="col-sm-3 mb-3">
                                    <label htmlFor="input-age" className="form-label mx-2">อายุ (ปี) <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="number" className="form-control" placeholder="อายุ" id="input-age" onChange={onChangeAge} value={age} required disabled/>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <label htmlFor="select-gender" className="form-label mx-2">เพศ <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="select-gender" className="form-select" onChange={onChangeGender} >
                                            <option value="">เลือกเพศ</option>
                                            <option value="ชาย">ชาย</option>
                                            <option value="หญิง">หญิง</option>
                                        </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="input-tel" className="form-label mx-2">เบอร์โทรศัพท์ <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="09XXXXXXXX" id="input-tel" onChange={onChangeTel} required />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="input-lineid" className="form-label mx-2">LINE ID</label>
                                    <input type="text" className="form-control" placeholder="LINE ID" id="input-lineid" onChange={onChangeLine} />
                                </div>
                            </div>
                        </div>
                            
                        <hr />

                        <div className="section-b">
                            {/* <h5 className="mx-2 my-3">ข้อมูลครอบครัว</h5> */}
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="agency-school" className="form-label mx-2">หน่วยงาน / ช่วงชั้น <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="agency-school" className="form-select" onChange={onChangeAgentSchool} required>
                                        <option value="">เลือกหน่วยงาน / ช่วงชั้น</option>
                                        <option value="ช่วงชั้นอนุบาล">ช่วงชั้นอนุบาล</option>
                                        <option value="ช่วงชั้น 1">ช่วงชั้น 1</option>
                                        <option value="ช่วงชั้น 2">ช่วงชั้น 2</option>
                                        <option value="ช่วงชั้นมัธยม">ช่วงชั้นมัธยม</option>
                                        <option value="ส่วนการศึกษาพิเศษ">ส่วนการศึกษาพิเศษ</option>
                                        <option value="บริหาร (ส่วนกลาง)">บริหาร (ส่วนกลาง)</option>
                                        <option value="แผนกศูนย์ประสานงานกลาง">แผนกศูนย์ประสานงานกลาง</option>
                                        <option value="แผนกธุรการกลาง">แผนกธุรการกลาง</option>
                                        <option value="ส่วนเทคโนโลยีสารสนเทศ">ส่วนเทคโนโลยีสารสนเทศ</option>
                                        <option value="ส่วนสื่อสารนิเทศ">ส่วนสื่อสารนิเทศ</option>
                                        <option value="แผนกห้องสมุด">แผนกห้องสมุด</option>
                                        <option value="แผนกแม่บ้าน">แผนกแม่บ้าน</option>
                                        <option value="แผนกอาหารและโภชนการ">แผนกอาหารและโภชนการ</option>
                                        <option value="แผนกสนับสนุนและพัฒนากิจกรรมพิเศษ">แผนกสนับสนุนและพัฒนากิจกรรมพิเศษ</option>
                                        <option value="ส่วนสื่อสารองค์กร">ส่วนสื่อสารองค์กร</option>
                                        <option value="ส่วนบัญชีการเงิน">ส่วนบัญชีการเงิน</option>
                                        <option value="ส่วนบุคคล">ส่วนบุคคล</option>
                                        <option value="แผนกอาคารสถานที่ฯ">แผนกอาคารสถานที่ฯ</option>
                                        <option value="ฝ่ายสำนักอำนวยการ">ฝ่ายสำนักอำนวยการ</option>
                                        <option value="ฝ่ายวิชาการ">ฝ่ายวิชาการ</option>
                                        <option value="แผนกทะเบียน">แผนกทะเบียน</option>
                                        <option value="แผนกสุขภาวะ">แผนกสุขภาวะ</option>
                                        <option value="แผนกครัว">แผนกครัว</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="section-c">
                            {/* <h5 className="mx-2 my-3">ข้อมูลครอบครัว</h5> */}
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="family-number" className="form-label mx-2"> จำนวนคนในครอบครัว หรือ จำนวนผู้ที่อยู่อาศัยร่วมกัน <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="number" className="form-control w-25" id="family-number" placeholder="0" min={0} onChange={onChangeFamily} required/>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-sm-12">
                                    <label htmlFor="child-number" className="form-label mx-2"> จำนวนบุตร/ธิดา  </label>
                                    <input type="number" className="form-control w-25" id="child-number" placeholder="0" min={0} onChange={onChangeChild}/>
                                </div>
                            </div> */}
                        </div>
                            
                        <hr />

                        <div className="please-check mb-3">
                            <h5 className="mx-2 my-3">ข้อมูลการรับวัคซีน <i style={{color: '#ff0000'}}>*</i></h5>
                            <select className="form-select" onChange={onChangeVaccineStatus} required>
                                <option value="none">เลือกรายการ</option>
                                <option value="ได้รับวัคซีน">ได้รับวัคซีน</option>
                                <option value="อยู่ระหว่างรอการจัดสรรวัคซีน">อยู่ระหว่างรอการจัดสรรวัคซีน</option>
                                <option value="รอวัคซีนทางเลือก">รอวัคซีนทางเลือก</option>
                                <option value="ปัญหาด้านสุขภาพ">ปัญหาด้านสุขภาพ</option>
                                <option value="ข้อจำกัดด้านอายุ">ข้อจำกัดด้านอายุ</option>
                                <option value="ข้อจำกัดด้านเชื้อชาติ/สัญชาติ">ข้อจำกัดด้านเชื้อชาติ/สัญชาติ</option>
                                <option value="ไม่ประสงค์รับวัคซีน">ไม่ประสงค์รับวัคซีน</option>
                            </select>
                        </div>

                        <div className="section-e d-none">
                            <div className="row">

                                <div className="col-sm-6">
                                    <label htmlFor="vaccine_1" className="form-label mx-2">วัคซีนที่ได้รับ เข็มที่ 1 <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="vaccine_1" className="form-select" onChange={onChangeVaccine_1} >
                                        <option value>Pleace select</option>
                                        <option value="Sinovac">Sinovac</option>
                                        <option value="AstraZeneca">AstraZeneca</option>
                                        <option value="Johnson & Johnson">Johnson &amp; Johnson</option>
                                        <option value="Moderna">Moderna</option>
                                        <option value="Sinopharm">Sinopharm</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="date_vaccine_1" className="form-label mx-2">วันที่นัดฉีดวัคซีน <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="date" id="date_vaccine_1" className="form-control" onChange={onChangeDateVaccine_1} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_1" className="form-check-input mx-1" onChange={onChangeReceived1} />
                                    <label htmlFor="checked_vaccine_1" className="form-label">ได้รับแล้ว</label>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="vaccine_2" className="form-label mx-2">วัคซีนที่ได้รับ เข็มที่ 2 <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="vaccine_2" className="form-select" onChange={onChangeVaccine_2} >
                                        <option value>Pleace select</option>
                                        <option value="Sinovac">Sinovac</option>
                                        <option value="AstraZeneca">AstraZeneca</option>
                                        <option value="Johnson & Johnson">Johnson &amp; Johnson</option>
                                        <option value="Moderna">Moderna</option>
                                        <option value="Sinopharm">Sinopharm</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="date_vaccine_2" className="form-label mx-2">วันที่นัดฉีดวัคซีน <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="date" id="date_vaccine_2" className="form-control" onChange={onChangeDateVaccine_2} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_2" className="form-check-input mx-1" onChange={onChangeReceived2} />
                                    <label htmlFor="checked_vaccine_2" className="form-label">ได้รับแล้ว</label>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="vaccine_3" className="form-label mx-2">วัคซีนที่ได้รับ เข็มที่ 3 (ถ้ามี)</label>
                                    <select id="vaccine_3" className="form-select" onChange={onChangeVaccine_3} >
                                        <option value>Pleace select</option>
                                        <option value="Sinovac">Sinovac</option>
                                        <option value="AstraZeneca">AstraZeneca</option>
                                        <option value="Johnson & Johnson">Johnson &amp; Johnson</option>
                                        <option value="Moderna">Moderna</option>
                                        <option value="Sinopharm">Sinopharm</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="date_vaccine_3" className="form-label mx-2">วันที่นัดฉีดวัคซีน</label>
                                    <input type="date" id="date_vaccine_3" className="form-control" onChange={onChangeDateVaccine_3} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_3" className="form-check-input mx-1" onChange={onChangeReceived3} />
                                    <label htmlFor="checked_vaccine_3" className="form-label">ได้รับแล้ว</label>
                                </div>

                            </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-center align-items-center">
                                {loading ? <p>Loading...</p> : (
                                    <>
                                        <Link to="/account"><button class="btn btn-warning mx-2">ย้อนกลับ</button></Link>
                                        <button class="btn btn-primary mx-2">บันทึก</button>
                                    </>
                                )}
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default BothFirst
