import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';

const VerifyByAdmin = () => {



    const onClickToggle = () => {
        document.querySelector('.tr-family').classList.toggle('d-none')
    }

    return (

        <>
        


        </>

        // <div className="verify-dashboard">
        //     <h2 className="text-center">ตรวจสอบข้อมูล</h2>
        //     <div className="table-responsive">
        //         <table className="table text-center table-hover table-bordered table-sm">
        //             <thead className="table-primary">
        //                 <tr>
        //                     <th>ลำดับ</th>
        //                     <th>ชื่อ-นามสกุล</th>
        //                     <th>อายุ</th>
        //                     <th>วัน-เดือน-ปี เกิด</th>
        //                     <th>ชื่อ-นามสกุล</th>
        //                     <th>ชื่อ-นามสกุล</th>
        //                     <th>ชื่อ-นามสกุล</th>

        //                     <th>ชื่อ-นามสกุล</th>
        //                     <th>ชื่อ-นามสกุล</th>

        //                     <th>Down</th>
        //                     <th>เมนู</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>1</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
        //                     <td onClick={onClickToggle}><i className="bi bi-chevron-down" /></td>
        //                     <td className="d-flex">
        //                         <button className="btn btn-outline-success btn-sm mx-2">รับทราบข้อมูล</button>
        //                         <button className="btn btn-warning btn-sm mx-2">ข้อมูลไม่ถูกต้อง</button>
        //                         <button className="btn btn-danger btn-sm mx-2">ลบ</button>
        //                     </td>
        //                 </tr>
        //                 <tr className="tr-family d-none">
        //                     {/* <td colspan="7">
        //                         <span>
        //                                 firstname  lastname
        //                         </span>
        //                     </td>
                                
        //                     <td>Firstname Lastname</td>
        //                     <td>Firstname Lastname</td>
                                
        //                     <td></td>
        //                     <td className="d-flex">
        //                         <button className="btn btn-outline-success btn-sm mx-2">รับทราบข้อมูล</button>
        //                         <button className="btn btn-warning btn-sm mx-2">ข้อมูลไม่ถูกต้อง</button>
        //                         <button className="btn btn-danger btn-sm mx-2">ลบ</button>
        //                     </td> */}
        //                     <div className="d-flex">
        //                         <div>asdadadasd</div>
        //                         <div>asdadadasd</div>
        //                         <div>asdadadasd</div>
        //                         <div>asdadadasd</div>
        //                     </div>
        //                 </tr>                        
                        
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}

export default VerifyByAdmin
