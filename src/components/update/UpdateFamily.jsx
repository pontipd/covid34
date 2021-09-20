import React, { useState, useEffect } from 'react'
import { dbFireStore } from '../../config/firebase'
import { getDoc, updateDoc, serverTimestamp, doc } from 'firebase/firestore'

const UpdateFamily = ({docid, funcCloseTap, prpsName, prpsType}) => {
    const [loading, setLoading] = useState(false)

    /** Fetch data for update state on change */
    useEffect( async () => {
        const docRef = doc(dbFireStore, `${prpsType}`, `${docid}`)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data())
            //console.log(docSnap.data().firstname)
            setFirstName(docSnap.data().firstname)
            setLastName(docSnap.data().lastname)
            setBorn(docSnap.data().birthday)
            setAge(docSnap.data().age)
            setGender(docSnap.data().gender)
            setTel(docSnap.data().tel)
            setLine(docSnap.data().line)
            setRelation(docSnap.data().relation)
            setStudent(docSnap.data().student)
            setClassLevel(docSnap.data().classlevel)
            setRoomLevel(docSnap.data().roomlevel)
            setVaccineStatus(docSnap.data().vaccinestatus)
            setVaccine_1(docSnap.data().vaccine_brand_1)
            setDateVaccine_1(docSnap.data().dateVaccine_1)
            setReceived1(docSnap.data().vaccine_receive1)
            setVaccine_2(docSnap.data().vaccine_brand_2)
            setDateVaccine_2(docSnap.data().dateVaccine_2)
            setReceived2(docSnap.data().vaccine_receive2)
            setVaccine_3(docSnap.data().vaccine_brand_3)
            setDateVaccine_3(docSnap.data().dateVaccine_3)
            setReceived3(docSnap.data().vaccine_receive3)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }, [])

    /** section A */
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [born, setBorn] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [tel, setTel] = useState("")
    const [line, setLine] = useState("")

    /** section G-H */
    const [relation, setRelation] = useState(null)
    const onChangeRelation = (e) => setRelation(e.target.value)

    const [student, setStudent] = useState(null)
    const [classLevel, setClassLevel] = useState(null)
    const [roomLevel, setRoomLevel] = useState(null)
    const onChangeStudent = (e) => {
        setStudent(e.target.checked)
        //document.querySelector('.student-pptn-section').classList.toggle('d-none')
    }
    

    const onChangeClassLevel = (e) => setClassLevel(e.target.value)
    const onChangeRoomLevel = (e) => setRoomLevel(e.target.value)

    /** section E */
    const [vaccineStatus, setVaccineStatus] = useState("")
    const [vaccine_1, setVaccine_1] = useState("")
    const [dateVaccine_1, setDateVaccine_1] = useState("")
    const [received1, setReceived1] = useState(false)
    const [vaccine_2, setVaccine_2] = useState("")
    const [dateVaccine_2, setDateVaccine_2] = useState("")
    const [received2, setReceived2] = useState(false)
    const [vaccine_3, setVaccine_3] = useState("")
    const [dateVaccine_3, setDateVaccine_3] = useState("")
    const [received3, setReceived3] = useState(false)

    /** State onChange User Section A */
    const onChangeFirstName = (e) => setFirstName(e.target.value)
    const onChangeLastName = (e) => setLastName(e.target.value)
    const onChangeAge = (e) => setAge(e.target.value)
    const onChangeGender = (e) => setGender(e.target.value)
    const onChangeTel = (e) => setTel(e.target.value)
    //const onChangeBorn = (e) => setBorn(e.target.value)
    const onChangeLine = (e) => setLine(e.target.value)

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

    //console.log(student)
    const sec = document.querySelector('.student-pptn-section')
    switch (student) {
        case false:
            sec.classList.add('d-none')
            break;
        case true:
            sec.classList.remove('d-none')
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

    const updateFamilyUser = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const docRef = await updateDoc(doc(dbFireStore, `${prpsType}`, `${docid}`), {
                //primary: false,
                firstname: firstName,
                lastname: lastName,
                birthday: born,
                age: age,
                gender: gender,
                tel: tel,
                line: line,
                relation: relation,
                student: student,
                classlevel: classLevel,
                roomlevel: roomLevel,
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
                //createby: userId,
                updated_timestamp: serverTimestamp(),
            })
            setLoading(false)
            console.log("Document written with ID: ", docRef)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    return (
        <div className="form-add-family">
            <div className="container pt-3">
                <h2 className="text-center">แบบฟอร์มแก้ไขข้อมูลบุคคลในครอบครัว</h2>
                
                <div className="form-personal-data-add my-4">
                    
                    <div>
                        <button id="bi-x" onClick={funcCloseTap}><i className="bi bi-x" /></button>
                        <div className="section-a">
                            <h5 className="mx-2 mb-3">ข้อมูลส่วนตัว</h5>
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="input-firstname" className="form-label mx-2">ชื่อ <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="ชื่อ" id="input-firstname" onChange={onChangeFirstName} value={firstName} />
                                    
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="input-lastname" className="form-label mx-2">นามสกุล <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="นามสกุล" id="input-lastname" onChange={onChangeLastName} value={lastName} />
                                </div>
                                <div className="col-sm-5 mb-3">
                                    <label htmlFor="input-date" className="form-label mx-2">วัน-เดือน-ปี เกิด <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="date" className="form-control" placeholder="วัน-เดือน-ปี เกิด" id="input-date" onChange={onChangeBorn} value={born} />
                                </div>
                                <div className="col-sm-3 mb-3">
                                    <label htmlFor="input-age" className="form-label mx-2">อายุ (ปี) <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="number" className="form-control" placeholder="อายุ" id="input-age" onChange={onChangeAge} value={age} disabled/>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <label htmlFor="select-gender" className="form-label mx-2">เพศ <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="select-gender" className="form-select" onChange={onChangeGender} value={gender} >
                                            <option value="">เลือกเพศ</option>
                                            <option value="ชาย">ชาย</option>
                                            <option value="หญิง">หญิง</option>
                                        </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="input-tel" className="form-label mx-2">เบอร์โทรศัพท์ <i style={{color: '#ff0000'}}>*</i></label>
                                    <input type="text" className="form-control" placeholder="09XXXXXXXX" id="input-tel" onChange={onChangeTel} value={tel} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="input-lineid" className="form-label mx-2">LINE ID</label>
                                    <input type="text" className="form-control" placeholder="LINE ID" id="input-lineid" onChange={onChangeLine} value={line} />
                                </div>
                            </div>
                        </div>
                            
                        <hr />

                        <div className="section-g">
                            <div className="row">
                                <div className="col-sm-7 mb-1">
                                    <label htmlFor="relation-with-user" className="form-label mx-2">ความเกี่ยวข้องกับ <b>{prpsName}</b> <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="relation-with-user" className="form-select" onChange={onChangeRelation} value={relation} >
                                        <option value="null">เลือกความเกี่ยวข้อง</option>
                                        <option value="พ่อ">พ่อ</option>
                                        <option value="แม่">แม่</option>
                                        <option value="ลูก">ลูก</option>
                                        <option value="พี่">พี่</option>
                                        <option value="น้อง">น้อง</option>
                                        <option value="เครือญาติ">เครือญาติ</option>
                                        <option value="เพื่อน">เพื่อน</option>
                                        <option value="คู่สมรส">คู่สมรส</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="section-h">
                            <div className="row">
                                <div className="col-sm-7 mb-1">
                                    <div className="form-check mx-2">
                                        <input type="checkbox" id="are-you-student" className="form-check-input" onChange={onChangeStudent} checked={student} />
                                        <label htmlFor="are-you-student" className="form-label" >เป็นนักเรียนของโรงเรียนเพลินพัฒนาหรือไม่</label>
                                    </div>
                                    <div className="student-pptn-section row">
                                        <div className="col-sm-6">
                                            <label htmlFor="class-level" className="form-label mx-2">ชั้น</label>
                                            <select id="class-level" className="form-select" onChange={onChangeClassLevel} value={classLevel} >
                                                <option value="null">เลือกระดับชั้น</option>
                                                <option value="เตรียมอนุบาล">เตรียมอนุบาล</option>
                                                <option value="อนุบาล 1">อนุบาล 1</option>
                                                <option value="อนุบาล 2">อนุบาล 2</option>
                                                <option value="อนุบาล 3">อนุบาล 3</option>
                                                <option value="ชั้น 1">ชั้น 1</option>
                                                <option value="ชั้น 2">ชั้น 2</option>
                                                <option value="ชั้น 3">ชั้น 3</option>
                                                <option value="ชั้น 4">ชั้น 4</option>
                                                <option value="ชั้น 5">ชั้น 5</option>
                                                <option value="ชั้น 6">ชั้น 6</option>
                                                <option value="ชั้น 7">ชั้น 7</option>
                                                <option value="ชั้น 8">ชั้น 8</option>
                                                <option value="ชั้น 9">ชั้น 9</option>
                                                <option value="ชั้น 10">ชั้น 10</option>
                                                <option value="ชั้น 11">ชั้น 11</option>
                                                <option value="ชั้น 12">ชั้น 12</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="room-level" className="form-label mx-2">ห้อง</label>
                                            <select id="room-level" className="form-select" onChange={onChangeRoomLevel} value={roomLevel}>
                                                <option value="null">เลือกห้อง</option>
                                                <option value="ห้อง 1">ห้อง 1</option>
                                                <option value="ห้อง 2">ห้อง 2</option>
                                                <option value="ห้อง 3">ห้อง 3</option>
                                                <option value="ห้อง 4">ห้อง 4</option>
                                                <option value="ห้อง 5">ห้อง 5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="please-check mb-3">
                            <h5 className="mx-2 my-3">ข้อมูลการรับวัคซีน <i style={{color: '#ff0000'}}>*</i></h5>
                            <select className="form-select" onChange={onChangeVaccineStatus} value={vaccineStatus}>
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
                                    <select id="vaccine_1" className="form-select" onChange={onChangeVaccine_1} value={vaccine_1} >
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
                                    <input type="date" id="date_vaccine_1" className="form-control" onChange={onChangeDateVaccine_1} value={dateVaccine_1} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_1" className="form-check-input mx-1" onChange={onChangeReceived1} checked={received1} />
                                    <label htmlFor="checked_vaccine_1" className="form-label">ได้รับแล้ว</label>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="vaccine_2" className="form-label mx-2">วัคซีนที่ได้รับ เข็มที่ 2 <i style={{color: '#ff0000'}}>*</i></label>
                                    <select id="vaccine_2" className="form-select" onChange={onChangeVaccine_2} value={vaccine_2} >
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
                                    <input type="date" id="date_vaccine_2" className="form-control" onChange={onChangeDateVaccine_2} value={dateVaccine_2} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_2" className="form-check-input mx-1" onChange={onChangeReceived2} checked={received2} />
                                    <label htmlFor="checked_vaccine_2" className="form-label">ได้รับแล้ว</label>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="vaccine_3" className="form-label mx-2">วัคซีนที่ได้รับ เข็มที่ 3 (ถ้ามี)</label>
                                    <select id="vaccine_3" className="form-select" onChange={onChangeVaccine_3} value={vaccine_3} >
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
                                    <input type="date" id="date_vaccine_3" className="form-control" onChange={onChangeDateVaccine_3} value={dateVaccine_3} />
                                </div>
                                <div className="col-sm-12 my-1 mx-2">
                                    <input type="checkbox" id="checked_vaccine_3" className="form-check-input mx-1" onChange={onChangeReceived3} checked={received3} />
                                    <label htmlFor="checked_vaccine_3" className="form-label">ได้รับแล้ว</label>
                                </div>

                            </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-center align-items-center">
                                {loading ? <p>Loading...</p> : (
                                    <>
                                        <button className="btn btn-warning mx-2" onClick={funcCloseTap}>ยกเลิก</button>
                                        <button className="btn btn-primary mx-2" onClick={updateFamilyUser}>บันทึก</button>
                                    </>
                                )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateFamily
