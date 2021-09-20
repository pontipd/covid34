import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { selectUserId, selectUserType } from "../app/reducer/userSlice"
import { dbFireStore } from "../config/firebase"
import { collection, query, where, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import swal from 'sweetalert'
import AddFamily from './create/AddFamily'
import UpdateFamily from './update/UpdateFamily'
import UpdatePrimaryStaff from './update/UpdatePrimaryStaff'
import UpdatePrimaryParent from './update/UpdatePrimaryParent'
import UpdatePrimaryBoth from './update/UpdatePrimaryBoth'

const SecondStep = () => {
    const userId = useSelector(selectUserId)
    const userType = useSelector(selectUserType)
    const [primary, setPrimary] = useState([])
    //console.log(primary)
    const [data, setData] = useState([])
    //console.log(data)
    const [loading, setLoading] = useState(false)
    
    /********************** Fetching data single primary user onSnapshot **********************/
    const fetchDataPrimaryUser = async () => {
        const queryPrimaryOnSnapShot = query(collection(dbFireStore, `${userType}`), where("primary", "==", true), where("createby", "==", `${userId}`))
        const unsubscribe = onSnapshot(queryPrimaryOnSnapShot, (snapshot) => {
            snapshot.forEach((doc) => {
                setPrimary({...doc.data(), id: doc.id})
                //setLoading(false)
            })
        })
    }
    
    /********************** Fetching data onSnapshot **********************/
    const fetchDataOnSnapShot = async () => {
        setLoading(true)
        const queryOnSnapShot = query(collection(dbFireStore, `${userType}`), where("createby", "==", `${userId}`))
        const unsubscribe = onSnapshot(queryOnSnapShot, (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setData(data)
            setLoading(false)
        })
        
    }

    useEffect(() => {
        fetchDataPrimaryUser()
        fetchDataOnSnapShot()
    }, [])

    let popup = null;
    const [popupAdd, setPopupAdd ] = useState(null)
    const onClickAddFamily = (e) => setPopupAdd(e)
    const onClosePopupAdd = () => setPopupAdd(null)
    if(!!popupAdd) {popup = <AddFamily funcCloseTap={onClosePopupAdd} prpsType={primary.type} prpsName={primary.firstname} />}

    let popupPrimary = null;
    const [popupUpdatePrimary, setPopupUpdatePrimary ] = useState()
    const onClickUpdatePrimary = (e) => setPopupUpdatePrimary(e)
    const onClosePopupUpdatePrimary = () => setPopupUpdatePrimary(null)
    switch (popupUpdatePrimary) {
        case 'teacher':
            popupPrimary = <UpdatePrimaryStaff docid={primary.id} funcCloseTap={onClosePopupUpdatePrimary} prpsType={primary.type} prpsName={primary.firstname} />
            break;
        case 'parent':
            popupPrimary = <UpdatePrimaryParent docid={primary.id} funcCloseTap={onClosePopupUpdatePrimary} prpsType={primary.type} prpsName={primary.firstname} />
            break;
        case 'both':
            popupPrimary = <UpdatePrimaryBoth docid={primary.id} funcCloseTap={onClosePopupUpdatePrimary} prpsType={primary.type} prpsName={primary.firstname} />
            break;
        default:
            break;
    }
    //console.log(popupUpdatePrimary)

    let popupUp = null;
    const [popupUpdate, setPopupUpdate ] = useState(null)
    const onClickUpdateFamily = (e) => setPopupUpdate(e)
    const onClosePopupUpdate = () => setPopupUpdate(null)
    if(!!popupUpdate) {popupUp = <UpdateFamily docid={popupUpdate} funcCloseTap={onClosePopupUpdate} prpsType={primary.type} prpsName={primary.firstname} />}
    // if(!!popupUpdate) {popupUp = <UpdateTesting docid={popupUpdate} funcCloseTap={onClosePopupUpdate} prpsType={primary.type} prpsName={primary.firstname} />}
    //console.log(popupUp)


    /************************ CRUD systems ************************/
    const onDelete = async (id, firstname) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            content: 'input',
            closeOnCancel: true,
        })
        .then((val) => {
            if (val == firstname) {
                async function del() {
                    try {
                        await deleteDoc(doc(dbFireStore, `${userType}`, id));
                        console.log('Doc deleted')
                    } catch (e) {
                        console.error("Error delete document: ", e)
                    }
                }
                del()
                swal("Poof! Your imaginary file has been deleted!", {icon: "success",})
            } else if (val == null) {
                return false
            } else {
                swal('First name are not match', '', 'warning')
            }
        });
    }

    return (
        <div id="second-step" className="second-step">
            <div className="container-md">
                <h1>Second Step</h1>
                <div className="primary-user-true">
                    <h3 className="text-center">ข้อมูลของคุณ {primary.firstname+' '+primary.lastname} </h3>
                    <div>
                        <div>ชื่อ-นามสกุล : {primary.firstname} {primary.lastname}</div>
                        <div>วัน-เดือน-ปี เกิด : {primary.birthday}</div>
                        <div>อายุ: {primary.age} เพศ: {primary.gender}</div>
                        <div>ข้อมูลเกี่ยวกับวัคซีน: {primary.vaccinestatus}</div>
                        {/* <div>ความเกี่ยวข้อง: {primary.type}</div> */}
                        <div>เบอร์โทรศัพท์: {primary.tel}</div>
                        <div>Line ID: {primary.line}</div>
                    </div>
                    <div className="manage-tool d-flex justify-content-end">
                        <button className="btn btn-success btn-sm" onClick={(e) =>  onClickUpdatePrimary(primary.type)}>
                            <i className="bi bi-pencil-fill" />
                        </button>
                    </div>
                </div>

                <hr />

                <div className="primary-user-false">
                    <div className="head-primary-user-false">
                        <h3>ข้อมูลครอบครัว</h3>
                        <button onClick={onClickAddFamily}><i className="bi bi-plus" /></button>
                    </div>
                    <div className="row">
                        {
                            data.map((data, index) => {
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
                                                    <div>ความเกี่ยวข้อง: {data.relation}</div>
                                                    <div>เบอร์โทรศัพท์: {data.tel}</div>
                                                    <div>Line ID: {data.line}</div>
                                                </div>
                                                <div className="manage-tool-card d-flex justify-content-between">
                                                    <i className="bi bi-pencil-fill" onClick={(e) => onClickUpdateFamily(data.id)} />
                                                    <i className="bi bi-x-circle-fill" onClick={(e) => onDelete(data.id, data.firstname)} />
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
            {popup}
            {popupUp}
            {popupPrimary}
            </div>
        </div>
    )
}

export default SecondStep
