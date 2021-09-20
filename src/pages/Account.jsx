import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUserName, selectUserId, selectUserType, setTypeOfUser } from "../app/reducer/userSlice"
import { dbFireStore } from "../config/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import FirstSignIn from '../components/FirstSignIn'
import SecondStep from '../components/SecondStep'
import Loading from '../components/Loading'


const Account = () => {
    useEffect(() => document.title = "บัญชีของฉัน | Plearnpattana School" ,[])
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userId = useSelector(selectUserId)
    const userType = useSelector(selectUserType)
    //console.log(userType)

    const [loading, setLoading] = useState(false)
    const [arr, setArr] = useState([])
    //console.log(arr.length)
    
    async function checkType (uid) {
        setLoading(true)
        const qStaff = query(collection(dbFireStore, 'staff'), where("primary", "==", true), where("createby", "==", `${uid}`));
        const qParent = query(collection(dbFireStore, 'parent'), where("primary", "==", true), where("createby", "==", `${uid}`));
        const qBoth = query(collection(dbFireStore, 'both'), where("primary", "==", true), where("createby", "==", `${uid}`));
        
        const querySnapshotStaff = await getDocs(qStaff);
        const querySnapshotParent = await getDocs(qParent);
        const querySnapshotBoth = await getDocs(qBoth);

        querySnapshotStaff.forEach((doc) => {
            if (doc.id !== 0) {
                setArr(doc.id)
                dispatch(
                    setTypeOfUser({
                        userType: doc.data().type
                    })
                )
            }
        })

        querySnapshotParent.forEach((doc) => {
            if (doc.id !== 0) {
                setArr(doc.id)
                dispatch(
                    setTypeOfUser({
                        userType: doc.data().type
                    })
                )
            }
        })

        querySnapshotBoth.forEach((doc) => {
            if (doc.id !== 0) {
                setArr(doc.id)
                dispatch(
                    setTypeOfUser({
                        userType: doc.data().type
                    })
                )
            }
        })

        setLoading(false)
    }

    useEffect(() => {
        checkType(userId)
    }, [])

    if (loading) {return <Loading />}
    if (!userName) {return <Redirect to="/" />}
      
    return (
        <>
            <div id="account" className="account">
                {arr.length !== 0 ? <SecondStep prpsType={userType} /> : <FirstSignIn />}
            </div>
        </>
    )
}

export default Account
