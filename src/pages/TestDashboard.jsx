import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { dbFireStore } from "../config/firebase"
import { collection, onSnapshot } from "firebase/firestore"
import _ from 'lodash'
import StaffDashboard from './dashboard/StaffDashboard'
import ParentDashboard from './dashboard/ParentDashboard'

const TestDashboard = () => {

    const match = useRouteMatch()

    const [parent, setParent] = useState([])
    //console.log(parent)
    const [staff, setStaff] = useState([])
    //console.log(staff.length)
    const [both, setBoth] = useState([])
    //console.log(both.length)

    const [loading, setLoading] = useState(false)   
    useEffect(() => {
        setLoading(true)
        const fetchParent = onSnapshot(collection(dbFireStore, "parent"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setParent(data)
        });
        const fetchBoth = onSnapshot(collection(dbFireStore, "both"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setBoth(data)
        });
        const fetchStaff = onSnapshot(collection(dbFireStore, "staff"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setStaff(data)
        });
        setLoading(false)
    }, [])


    let limitAge = _.filter(parent, {'vaccinestatus': 'ข้อจำกัดด้านอายุ'})
    //console.log(limitAge)

    let received = _.filter(parent, {'vaccinestatus': 'ได้รับวัคซีน'})
    //console.log(received)

    let limitAgeStaff = _.filter(staff, {'vaccinestatus': 'ข้อจำกัดด้านอายุ'})
    //console.log(limitAge)

    let receivedStaff = _.filter(staff, {'vaccinestatus': 'ได้รับวัคซีน'})
    //console.log(received)

    let limitAgeBoth = _.filter(both, {'vaccinestatus': 'ข้อจำกัดด้านอายุ'})
    //console.log(limitAgeBoth.length)

    let receivedBoth = _.filter(both, {'vaccinestatus': 'ได้รับวัคซีน'})
    //console.log(received)
    
    let sumAgeBoth = limitAge.length + limitAgeBoth.length
    console.log(sumAgeBoth)

    // let findAgeParent = _.filter(parent, (o) => {
    //     return o.age > 4
    // })
    // console.log(findAgeParent)

    /** calculate percent */
    let calcu = received.length / parent.length * 100;
    //console.log(calcu)

    return (
        <>
            <div className="test-dashboard">
                <h1>Dashboard</h1>
                <div className="parent-dashboard">
                    <h4>ผู้ปกครอง</h4>
                <ul>
                    <li>จำนวนผู้ปกครอง : {parent.length}</li>
                    <li>ได้รับวัคซีน : {received.length} ({calcu}%)</li>
                    <li>ข้อจำกัดด้านอายุ : {limitAge.length}</li>
                </ul>
                </div>
                <div className="parent-dashboard">
                    <h4>ครูและบุคลากร</h4>
                <ul>
                    <li>จำนวนผู้ปกครอง : {staff.length}</li>
                    <li>ได้รับวัคซีน : {receivedStaff.length}</li>
                    <li>ข้อจำกัดด้านอายุ : {limitAgeStaff.length}</li>
                </ul>
                </div>
            </div>
            {/* <Switch>
                <Route path={`${match.path}/staff`} component={StaffDashboard} />
                <Route path={`${match.path}/parent`} component={ParentDashboard} />
            </Switch> */}
        </>
    )
}

export default TestDashboard
