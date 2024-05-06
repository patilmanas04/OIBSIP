import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    max-width: 500px;
    width: 100%;
    gap: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 8px;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 0 30px;
`

const Title = styled.h1`
    font-weight: 600;
`

const SubTitle = styled.h3`
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 90%;
    padding: 0 30px;    
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3px;
`

const Label = styled.label`
    width: 100%;
    text-align: left;
`

const Input = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;

    &:focus {
        border: 1px solid #000;
    }
`

const RememberMe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    font-size: 14px;
    height: 30px;
`

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: 0.3s;      
`

const SignUpButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #EA454C;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #333;
    } 
`

const Switch = styled.div`
    font-size: 14px;
`

const Span = styled.a`
    color: #EA454C;
    cursor: pointer;
    transition: 0.3s;
`

const Register = (props) => {
    const navigate = useNavigate()
    const { showAlert, setUsername } = props
    const checkBoxRef = useRef(null)

    const loadUser = async() => {
        const authToken = localStorage.getItem("authToken")
		if(authToken) {
			const url = "http://localhost:5000/api/auth/getuser"
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Auth-Token": authToken
				}
			})
			const json = await response.json()

			if(json.success){
                setUsername(json.userDetails.username)
				navigate('/secured')
			}
		}
    }

	useEffect(() => {
        document.title = "Register | Auth App"
		loadUser()
	}, [])

    const [userCredentials, setUserCredentials] = useState({
        username: "",
        passoword: ""
    })

    const onChange = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        
        const url = "http://localhost:5000/api/auth/register"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCredentials)
        })

        const json = await response.json()

        if(json.success){
            if(checkBoxRef.current.checked){
                localStorage.setItem("authToken", json.authToken)
            }
            showAlert("success", "Account created successfully.")
            navigate('/login')
        }
        else{
            showAlert("error", "Enter a valid username or password")
        }
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Create a new account</Title>
                <SubTitle>It's quick and easy</SubTitle>
            </TitleWrapper>
            <Form onSubmit={onSubmit}>
                <FieldWrapper>
                    <Label>Username</Label>
                    <Input type="text" name="username" placeholder="Enter your username" onChange={onChange} required/>
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Password must be 8 characters long" onChange={onChange} required/>
                </FieldWrapper>
                <RememberMe>
                    <Checkbox ref={checkBoxRef} type="checkbox" id="rememberMe" name="rememberMe"/>
                    <Label htmlFor="rememberMe">Remember Me</Label>
                </RememberMe>
                <SignUpButton type="submit">Sign up</SignUpButton>
            </Form>
            <Switch>
                <SubTitle>Already have an account? <Span><Link to="/login">Login</Link></Span></SubTitle>
            </Switch>
        </Wrapper>
    )
}

export default Register