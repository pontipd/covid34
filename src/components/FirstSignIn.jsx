import React from 'react'
import StaffFirst from './create/StaffFirst'
import ParentFirst from './create/ParentFirst'
import BothFirst from './create/BothFirst'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'

const FirstSignIn = () => {
    
    const match = useRouteMatch()

    return (
        <>
            <div className="firstHref">
                
                <div className="form-link-select container-lg">
                <h2 className="text-center">เลือกแบบฟอร์มเพื่อให้ข้อมูลเบื้องต้น</h2>

                    <div className="form-s row mx-auto">
                        <div className="col-md-4 my-2 mx-auto">
                            <Link to={`${match.url}/staff`}><button >ครูและบุคลากร</button></Link>
                        </div>
                        <div className="col-md-4 my-2 mx-auto">
                            <Link to={`${match.url}/parent`}><button >ผู้ปกครอง</button></Link>
                        </div>
                        <div className="col-md-4 my-2 mx-auto">
                            <Link to={`${match.url}/both`}><button >ครู บุคลากร<br/>ที่เป็นผู้ปกครอง</button></Link>
                        </div>
                    </div>
                    
                    {/* <Link to={`${match.url}/staff`}><button className="btn btn-outline-primary">ครูและบุคลากร</button></Link>
                    <Link to={`${match.url}/parent`}><button className="btn btn-outline-primary">ผู้ปกครอง</button></Link>
                    <Link to={`${match.url}/both`}><button className="btn btn-outline-primary">ครู บุคลากรที่เป็นผู้ปกครอง</button></Link> */}
                    

                    {/* <Link to={`${match.url}/staff`}>ครูและบุคลากร</Link>
                    <Link to={`${match.url}/parent`}>ผู้ปกครอง</Link>
                    <Link to={`${match.url}/both`}>ครู บุคลากรที่เป็นผู้ปกครอง</Link> */}

                </div>
            </div>

            <Switch>
                <Route path={`${match.path}/parent`}>
                    <ParentFirst type={'parent'} />
                </Route>
                <Route path={`${match.path}/staff`}>
                    <StaffFirst type={'staff'} />
                </Route>
                <Route path={`${match.path}/both`}>
                    <BothFirst type={'both'} />
                </Route>
            </Switch>
        </>
    )
}

export default FirstSignIn
