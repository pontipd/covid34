import React, { useState, useEffect } from 'react'
import { dbFireStore } from '../../config/firebase'
import { getDoc, updateDoc, serverTimestamp, doc } from 'firebase/firestore'

const UpdateTesting = ({docid, funcCloseTap, prpsName, prpsType}) => {

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
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }, [])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [born, setBorn] = useState('')
    const [age, setAge] = useState('')
    const onChangFirstName = (e) => setFirstName(e.target.value)
    const onChangLastName = (e) => setLastName(e.target.value)
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
    const onChangeAge = (e) => setAge(e.target.value)

    const onUpdate = async (id) => {
        try {
            await updateDoc(doc(dbFireStore, `${prpsType}`, `${docid}`), {
                fullname: firstName,
                lastname: lastName,
                birthday: born,
                age: age,
                updated_timestamp: serverTimestamp(),
            })
        } catch (e) {
            console.error("Error updating document: ", e)
        }
    }

    return (
        <div>
            <button onClick={funcCloseTap} className="btn btn-danger">Close</button>

            <h2>เกี่ยวข้องกับ <b>{prpsName}</b></h2>
            <input type="text" className="form-control" placeholder="first name" onChange={onChangFirstName} value={firstName} />
            <input type="text" className="form-control" placeholder="last name" onChange={onChangLastName} value={lastName} />
            <input type="date" className="form-control" onChange={onChangeBorn} value={born} />
            <input type="text" className="form-control" onChange={onChangeAge} value={age} />
            <div className="d-flex justify-content-center">
                <button className="btn btn-warning" onClick={funcCloseTap} >ยกเลิก</button>
                <button className="btn btn-success" onClick={onUpdate}>บันทึก</button>
            </div>
        </div>
    )
}

export default UpdateTesting
