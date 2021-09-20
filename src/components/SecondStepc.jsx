import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { selectUserName, selectUserId } from "../app/reducer/userSlice"
import { dbFireStore } from '../config/firebase'
import { collection, addDoc, doc, getDoc, getDocs, query, where, onSnapshot, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import AddFamily from './create/AddFamily'

const SecondStepc = () => {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const [loading, setLoading] = useState(false)

    /** Check type of user */
    const [data, setData] = useState([])
    //console.log(data)

    // const staff = async () => {
    //     const q = query(collection(dbFireStore, "staff"), where("primary", "==", true), where("createby", "==", `${userId}`));
    //     const docSnap = await getDocs(q)

    //     // console.log(docSnap.docs.map((doc) => doc.data()))
    //     setData(docSnap.docs.map((doc) => doc.data()))
    //     const result = docSnap.docs.map( (doc) => ({...doc.data(), id: doc.id}) )
    //     //console.log(result.length)
    //     // if (result.length !== 0) {
    //     //     setData(docSnap.docs.map((doc) => doc.data()))
    //     // }
    // }
    // staff()

    // const parent = async () => {
    //     const q = query(collection(dbFireStore, "parent"), where("primary", "==", true), where("createby", "==", `${userId}`));
    //     const docSnap = await getDocs(q)
    //     // console.log(docSnap.docs.map((doc) => doc.data()))
    
    //     const result = docSnap.docs.map( (doc) => ({...doc.data(), id: doc.id}) )
    //     //console.log(result.length)
    //     // if (result.length !== 0) {
    //     //     setData(docSnap.docs.map((doc) => doc.data()))
    //     // }
    // }
    // parent()

    // const staff = async () => {
    //     const q = query(collection(dbFireStore, "staff"), where("primary", "==", true), where("createby", "==", `${userId}`));
    //     const docSnap = await getDocs(q)

    //     // console.log(docSnap.docs.map((doc) => doc.data()))
    //     setData(docSnap.docs.map((doc) => doc.data()))
    //     const result = docSnap.docs.map( (doc) => ({...doc.data(), id: doc.id}) )
    //     //console.log(result.length)
    //     // if (result.length !== 0) {
    //     //     setData(docSnap.docs.map((doc) => doc.data()))
    //     // }
    // }
    // staff()

    // const parent = async () => {
    //     const q = query(collection(dbFireStore, "parent"), where("primary", "==", true), where("createby", "==", `${userId}`));
    //     const docSnap = await getDocs(q)
    //     // console.log(docSnap.docs.map((doc) => doc.data()))
    
    //     const result = docSnap.docs.map( (doc) => ({...doc.data(), id: doc.id}) )
    //     //console.log(result.length)
    //     // if (result.length !== 0) {
    //     //     setData(docSnap.docs.map((doc) => doc.data()))
    //     // }
    // }
    // parent()

    useEffect(() => {
        
    }, [])
    
    /** Fetching Data */
    useEffect(() => {
        // const queryFamily = query(collection(dbFireStore, `${data.type}`), where("createby", "==", `${userId}`))
        const queryFamily = query(collection(dbFireStore, "staff"), where("createby", "==", `${userId}`))
        const unsubscribe = onSnapshot(queryFamily, (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setFamilyData(data)
        })
    })

    const [familyData, setFamilyData] = useState([])
    //console.log(familyData)

    const [ preview, setPreview ] = useState(null);
    function onClickAddFamily (e) {
        setPreview(e);
    }

    function onCloseImages () {
        setPreview(null);
    }

    let imagePrev = null;
    if(!!preview) {
        // imagePrev = <AddFamily funcCloseTap={onCloseImages} prpsType={`${data.type}`} prpsName={`${data.firstname}`} />
        imagePrev = <AddFamily />
    }

    return (
        <div id="second-step" className="second-step">
            <div className="container-md">
                <h1>Second Step</h1>
                <div className="primary-user-true">
                    <h3 className="text-center">ข้อมูลของคุณ {
                        familyData.map((data, index) => {if (data.primary !== false) {return data.firstname+' '+data.firstname}})
                    }</h3>
                    {
                        familyData.map((data, index) => {
                            if (data.primary !== false) {
                                return (
                                    <div key={index}>
                                        <div>{data.firstname}</div>
                                        <div>{data.lastname}</div>
                                        <div>{data.birthday}</div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <hr />

                <div className="primary-user-false">
                    <div className="head-primary-user-false">
                        <h3>ข้อมูลครอบครัว</h3>
                        <button onClick={onClickAddFamily}><i className="bi bi-plus" /></button>
                    </div>
                    <div className="row">
                        {
                            familyData.map((data, index) => {
                                if (data.primary !== true) {
                                    return (
                                        <div key={index} className="col-md-6 col-lg-4 data-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h5 className="text-center">{data.firstname} {data.lastname}</h5>
                                                    </div>
                                                    <div>อายุ: {data.age} เพศ: {data.gender}</div>
                                                    <div>ข้อมูลเกี่ยวกับวัคซีน: {data.vaccinestatus}</div>
                                                    <div>ความเกี่ยวข้อง: {data.type}</div>
                                                    <div>เบอร์โทรศัพท์: {data.tel}</div>
                                                    <div>Line ID: {data.line}</div>
                                                </div>
                                                <div className="manage-tool-card d-flex justify-content-between">
                                                    <i className="bi bi-pencil-fill" />
                                                    <i className="bi bi-x-circle-fill" />
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
            <div>
                {imagePrev}
            </div>
        </div>
    )
}

export default SecondStepc
