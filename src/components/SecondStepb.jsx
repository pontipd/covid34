import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectUserName, selectUserId } from "../app/reducer/userSlice"
import { setFireStoreUserDoc, selectUserDocId, selectUserDocFullName, selectUserDocAge, selectUserDocGender } from "../app/reducer/fireStoreUserSlice"
import { dbFireStore } from "../config/firebase"
import { collection, addDoc, doc, setDoc, getDoc, query, where, onSnapshot, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore"
import swal from 'sweetalert'

const SecondStepb = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userId = useSelector(selectUserId)
    const [loading, setLoading] = useState(false)

    /** State Add User */
    const [type, setType] = useState("Teacher")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [tel, setTel] = useState("")
    const [address, setAddress] = useState("")

    /** Part 2 Vaccine */
    const [vaccine_1, setVaccine_1] = useState("")
    const [dateVaccine_1, setDateVaccine_1] = useState("")
    const [received1, setReceived1] = useState(false)
    const [vaccine_2, setVaccine_2] = useState("")
    const [dateVaccine_2, setDateVaccine_2] = useState("")
    const [received2, setReceived2] = useState(false)
    const [vaccine_3, setVaccine_3] = useState("")
    const [dateVaccine_3, setDateVaccine_3] = useState("")
    const [received3, setReceived3] = useState(false)

    /** State onChange User */
    const onChangeFirstName = (e) => setFirstName(e.target.value)
    const onChangeLastName = (e) => setLastName(e.target.value)
    const onChangeAge = (e) => setAge(e.target.value)
    const onChangeGender = (e) => setGender(e.target.value)
    const onChangeTel = (e) => setTel(e.target.value)
    const onChangeAddress = (e) => setAddress(e.target.value)

    const onChangeVaccine_1 = (e) => setVaccine_1(e.target.value)
    const onChangeDateVaccine_1 = (e) => setDateVaccine_1(e.target.value)
    const onChangeReceived1 = (e) => setReceived1(e.target.checked)
    const onChangeVaccine_2 = (e) => setVaccine_2(e.target.value)
    const onChangeDateVaccine_2 = (e) => setDateVaccine_2(e.target.value)
    const onChangeReceived2 = (e) => setReceived2(e.target.checked)
    const onChangeVaccine_3 = (e) => setVaccine_3(e.target.value)
    const onChangeDateVaccine_3 = (e) => setDateVaccine_3(e.target.value)
    const onChangeReceived3 = (e) => setReceived3(e.target.checked)

    const addUser = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(dbFireStore, "users"), {
                primary: false,
                type: type,
                firstname: firstName,
                lastname: lastName,
                age: age,
                gender: gender,
                tel: tel,
                address: address,
                vaccine_1: vaccine_1,
                dateVaccine_1: dateVaccine_1,
                received1: received1,
                vaccine_2: vaccine_2,
                dateVaccine_2: dateVaccine_2,
                received2: received2,
                vaccine_3: vaccine_3,
                dateVaccine_3: dateVaccine_3,
                received3: received3,
                createby: userId,
                timestamp: serverTimestamp(),
            })
            // setType('Teacher');
            setFirstName('');
            setLastName('');
            setAge('');
            setGender('');
            setTel('');
            setVaccine_1('');
            setDateVaccine_1('');
            setReceived1(false);
            setVaccine_2('');
            setDateVaccine_2('');
            setReceived2(false);
            setVaccine_3('');
            setDateVaccine_3('');
            setReceived3(false);
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    const onUpdate = async (id) => {
        try {
            await updateDoc(doc(dbFireStore, "users", `${id}`), {
                fullname: 'fullName',
                age: 'age',
                gender: 'gender',
                timestamp: serverTimestamp(),
            })
        } catch (e) {
            console.error("Error updating document: ", e)
        }
    }

    const onDelete = async (id, firstname) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            content: 'input',
        })
        .then((val) => {
            if (val == firstname) {
                async function del() {
                    try {
                        await deleteDoc(doc(dbFireStore, "users", id));
                        console.log('Doc deleted')
                    } catch (e) {
                        console.error("Error delete document: ", e)
                    }
                }
                del()
                swal("Poof! Your imaginary file has been deleted!", {icon: "success",})
            } else {
                swal('First name are not match', '', 'warning')
                //alert('Not Match')
            }
        });
    }

    useEffect(() => {
        const q = query(collection(dbFireStore, "users"), where("createby", "==", `${userId}`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const family = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setData(family)
        })
    }, [])

    const [data, setData] = useState([])
    
    const handleAddUser = () => {
        document.querySelector('#form-add-u').classList.toggle('d-none')
    }

    return (
        <>
            <div className="container pt-3">
                <div id="form-add-u" className="d-none">
                    <h1 className="text-center">เพิ่มผู้ร่วมอาศัย</h1>
                    <button onClick={handleAddUser} className="btn btn-danger">X</button>
                    <div className="form-personal-data my-4">
                        <div className="d-flex justify-content-between mb-3">
                            <input type="radio" className="btn-check mx-1" name="options-outlined" id="primary-outlined-teacher" autoComplete="off" defaultValue="Teacher"  onChange={(e) => setType(e.target.value)} defaultChecked />
                            <label className="btn btn-outline-primary mx-1 w-100" htmlFor="primary-outlined-teacher">Teacher</label>
                            <input type="radio" className="btn-check mx-1" name="options-outlined" id="primary-outlined-student" autoComplete="off" defaultValue="Student"  onChange={(e) => setType(e.target.value)} />
                            <label className="btn btn-outline-primary w-100" htmlFor="primary-outlined-student">Student</label>
                            <input type="radio" className="btn-check" name="options-outlined" id="primary-outlined-parent" autoComplete="off" defaultValue="Parent"  onChange={(e) => setType(e.target.value)} />
                            <label className="btn btn-outline-primary w-100" htmlFor="primary-outlined-parent">Parent</label>
                        </div>
                        
                        {/* {handleOnSelectType()} */}

                    </div>
                </div>

                <hr />

                
                <div className="getDataDoc">
                        {
                            data.map((p, i) => {
                                if (p.primary !== false) {
                                   return (
                                        <div className="data-primary" key={i}>
                                            <h3>{p.firstname}</h3>
                                            <p>{p.gender}</p>
                                        </div>
                                    )
                                }
                            })
                        }


                    <h2>ข้อมูลครอบครัว</h2><button onClick={handleAddUser} className="btn btn-primary">Add</button>
                    <div className="data-family">
                        <div className="row">
                        {
                            /** fetch doc by user id login */
                            data.map((data, index) => {
                                if (data.primary !== true) {
                                    return (
                                        <div className="col-sm-4" key={data.id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h3>{data.firstname} {data.lastname}</h3>
                                                        <h6>{data.type}</h6>
                                                    </div>

                                                    <button onClick={(e) => onUpdate(data.id)} className="card-link btn btn-success btn-sm">Update</button>
                                                    <button onClick={(e) => onDelete(data.id, data.firstname)} className="card-link btn btn-danger btn-sm">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } 
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondStepb
