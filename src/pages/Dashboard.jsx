import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogOutState, selectUserName } from '../app/reducer/userSlice'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { dbFireStore } from "../config/firebase"
import { collection, doc, onSnapshot, deleteDoc } from "firebase/firestore"
import swal from 'sweetalert'
import CountUp from 'react-countup'
import { Pie, Doughnut, Line, Bar, bubble, Bubble } from 'react-chartjs-2';
import Loading from '../components/Loading'

const Dashboard = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const [loading, setLoading] = useState(true)

    const [today, setToday] = useState('')
    function setDate () {
        let d = new Date('12-2-2021');
        let ye = new Intl.DateTimeFormat('th', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('th', { month: 'long' }).format(d);
        let da = new Intl.DateTimeFormat('th', { day: 'numeric' }).format(d);
        console.log(`${da} ${mo} ${ye}`);
        setToday(`${da} ${mo} ${ye}`)
    }

    const [data, setData] = useState([])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(setUserLogOutState())
        }).catch((err) => alert(err.message))
    }

    const onDelete = async (id, name) => {
        //console.log(id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file! \n pleace input your name for confirm delete.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            content: 'input',
        })
        .then((val) => {
            if (val == name) {
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
                alert('Not Match')
            }
        })
        // .then((willDelete) => {
        //     if (willDelete) {
        //         async function del() {
        //             try {
        //                 await deleteDoc(doc(dbFireStore, "users", id));
        //                 console.log('Doc deleted')
        //             } catch (e) {
        //                 console.error("Error delete document: ", e)
        //             }
        //         }
        //         del()
        //         swal("Poof! Your imaginary file has been deleted!", {icon: "success",})
        //     } else {
        //       swal("Your imaginary file is safe!");
        //     }
        // });
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(dbFireStore, "staff"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setData(data)
            //console.log(data)
            setLoading(false)
            // console.log("Current data: ", data)
        });

        setDate()
    }, [])

    const stateBar = {
        labels: ['ได้รับวัคซีนแล้ว', 'ยังไม่ได้รับวัคซีน'],
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
            data: [1903, 1097]
          }
        ]
    }

    const stateCircle = {
        labels: ['ได้รับวัคซีนแล้ว', 'ยังไม่ได้รับวัคซีน'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
                '#e60000',
                '#0322ff'
            ],
            hoverBackgroundColor: [
                '#175000',
                '#35014F'
            ],
            data: [1903, 1097]
          }
        ]
    }

    if (loading) {return <Loading />}

    if(!userName) { return <Redirect to="/" /> }

    return (
        <div className="container">
            <h1 className="text-center">Welcome {userName}</h1>
            <h2 className="text-center">Dashboard Plearnpattana Covid Statistics</h2>

            <hr />

            <div className="dashboard-data">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-end">{today}</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 text-center bg-light">
                            <h2>จำนวนผู้ให้ข้อมูล</h2>
                            <CountUp start={0} end={3298} duration={1} delay={0}>
                                {({ countUpRef }) => (
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                )}
                            </CountUp>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card p-3 text-center">
                            <h2>ได้รับวัคซีนแล้ว</h2>
                            <CountUp start={0} end={1903} duration={1} delay={0}>
                                {({ countUpRef }) => (
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                )}
                            </CountUp>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 text-center bg-light">
                            <h2>ยังไม่ได้รับวัคซีน</h2>
                            <CountUp start={0} end={1097} duration={1} delay={0}>
                                {({ countUpRef }) => (
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                )}
                            </CountUp>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <Bar
                            data={stateBar}
                            options={{
                                title:{
                                display:true,
                                text:'Average Rainfall per month',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                    </div>
                    <div className="col-lg-4 mt-4">
                        <Pie
                            data={stateCircle}
                            options={{
                                title:{
                                display:true,
                                text:'Average Rainfall per month',
                                fontSize:20,
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* <div>
                {
                    data.map((data, index) => (
                        
                        <li key={index}>{data.fullname} {'=>'} {data.age} [{data.gender}]<button onClick={(e) => onDelete(data.id, data.fullname)} className="btn btn-danger btn-sm">Delete</button></li>
                        
                    ))
                }
            </div> */}

            <Link to="/dashboard/parent" ><button className="btn btn-primary">Parent</button></Link>
        </div>
    )
}

export default Dashboard
