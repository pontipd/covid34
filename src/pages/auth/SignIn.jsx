import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, selectUserName } from '../../app/reducer/userSlice'
import { auth, providerGoogle, providerFacebook } from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

const SignIn = () => {

    useEffect(() => {
       document.title = "Sign in | Plearnpattana School"
    },[]);

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onInputEmail = (e) => setEmail(e.target.value)
    const onInputPassword = (e) => setPassword(e.target.value)

    const handleSubmitSignIn = (e) => {
        e.preventDefault()
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log('tokennnn => ' + user.getIdToken())
            dispatch(
                setActiveUser({
                    userId: user.uid,
                    userName: user.displayName,
                    userEmail: user.email,
                    userPhoto: user.photoURL,
                })
            )
            setLoading(false)
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            alert(error)
            console.log(error)
            setLoading(false)
        });
    }

    /** Sign in with Google Auth */
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, providerGoogle).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            dispatch(
                setActiveUser({
                userId: result.user.uid,
                userName: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
                })
            )
        }).catch((error) => {
            // const errorCode = error.code;const errorMessage = error.message;const email = error.email;
            console.log(error)
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    /** Sign in with Facebook Auth */
    const handleSignInWithFacebook = () => {
        signInWithPopup(auth, providerFacebook).then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            dispatch(
                setActiveUser({
                userId: result.user.uid,
                userName: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
                })
            )
        }).catch((error) => {
            // const errorCode = error.code;const errorMessage = error.message;const email = error.email;
            console.log(error)
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
    }

    // useEffect(() => {
    //     // if (userName) { return <Redirect to="/account" /> }
    //     return <Redirect to="/account" />
    // }, [])

    if (userName) { return <Redirect to="/account" /> }

    return (
        <>
            <div id="auth-page" className="container d-flex justify-content-center align-items-center">
                <div className="auth-content">
                    <div className="auth-title">
                        <h1>Sign in</h1>
                        <h5>ลงชื่อเข้าสู่ระบบ</h5>
                        <Link to="/"><button className="btn btn-primary btn-sm">Home</button></Link>
                    </div>
                    
                    <section id="sign-in-with-other">
                        <button onClick={handleSignInWithGoogle} className="btn btn-outline-light"><i className="bi bi-google" /> Sign in with Google</button>
                        <button onClick={handleSignInWithFacebook} className="btn btn-outline-light"><i className="bi bi-facebook" /> Sign in with Facebook</button>
                    </section>
                    
                    <p style={{margin: '1rem 0'}}>Or continue with <br/> หรือลงชื่อเข้าสู่ระบบด้วยอีเมล</p>

                    <section id="sign-in-with-email-password">
                        <form onSubmit={handleSubmitSignIn}>
                            <div className="form-floating">
                                <input type="email" name="email" id="inputyouremail" className="form-control" placeholder="example@email.com" onChange={onInputEmail} required />
                                <label htmlFor="inputyouremail">Email</label>                            
                            </div>
                            <div className="form-floating">
                                <input type="password" name="password" id="inputyourpassword" className="form-control" placeholder="password" onChange={onInputPassword} required />
                                <label htmlFor="inputyourpassword">Password</label>
                            </div>
                            
                            <div className="text-center my-3">
                                {loading ? <p>Loading...</p> : <button type="submit" className="mx-auto btn btn-outline-success my-2">Sign in</button>}
                                <div>
                                    <Link to="/forget-password">Forgotten password? <p>ลืมรหัสผ่าน?</p></Link>
                                </div>
                                <hr />
                                <div>
                                    <p>Need an account? <Link to="/sign-up">Sign up here.</Link><br/>
                                    ยังไม่มีบัญชี? <Link to="/sign-up">สร้างบัญชี</Link></p>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SignIn
