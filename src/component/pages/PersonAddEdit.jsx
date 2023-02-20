import {useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import axios from '../../api/axios';
import SERVER_URL from '../../api/urls';


export default function PersonAddEdit({PersonData}) {
    const params = useParams();
    // useEffect(() => {
    //     let ignore = false;
    //     if(PersonData && !ignore){
    //         SetPersonFormData(prevState =>{
    //             return {...prevState, ...PersonData }
    //         })
    //     }
    //     return () => {ignore = true}
    // }, [])
    
    const handleLoginSubmit = async (event)=>{
        const form = event.currentTarget;
        setSubmitClicked(true)
		event.preventDefault();
		event.stopPropagation();
		if (form.checkValidity() === false) {
			console.log("Login Invalid")
			return
		}
        else if(!(PersonFormData.isNameValid && PersonFormData.isEmailValid && PersonFormData.isImageValid && PersonFormData.isGenderValid && PersonFormData.isBirthDateValid)){
			console.log("Something went wrong")
			return
		}
        else{
			if(params.id && PersonData){
                // Call to Edit PersonAPI
                await axios.put(SERVER_URL.getPerson + PersonData.id, {...PersonFormData, id: PersonData.id}).then(res=>{
                    if(!res || res.status !== 200){
                        console.log(res, "Req Failed")
                    }
                    else{
                        // setPersonInfoArray(res.data)
                        console.log("Req Recieved", res)
                    }
                }).catch(e=>{
                    console.log(e, "Req Error")
                })
            }
            else{
                //Call to Add PersonAPI
                await axios.post(SERVER_URL.getPerson, PersonFormData).then(res=>{
                    if(!res || res.status !== 200){
                        console.log(res, "Req Failed")
                    }
                    else{
                        // setPersonInfoArray(res.data)
                        console.log("Req Recieved", res)
                    }
                }).catch(e=>{
                    console.log(e, "Req Error")
                })
            }
        }
    }
	const USER_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let urlRegex = new RegExp(
        "^(https?:\\/\\/)" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+@,:=#()]*)*" + // port and path
            "(\\?[;&a-z\\d%_@,.:()~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    );
    const [validationMessages, setValidationMessages] = useState({
        PersonNameValMessage: "Please enter a Name",
        PersonEmailValMessage: "Please enter a Email",
        PersonBirthDateValMessage: "Please enter a Date",
        PersonGenderValMessage: "Please enter a Gender",
        PersonImageValMessage: "Please enter a Image URL",
    })
    const [submitClicked, setSubmitClicked] = useState(false);
    const [PersonFormData, SetPersonFormData] = useState({
        firstName: PersonData && PersonData.firstName ? PersonData.firstName: "",
        isNameValid: PersonData && PersonData.firstName ? true: false,
        email: PersonData && PersonData.email ? PersonData.email: "",
        isEmailValid: PersonData && PersonData.email ? true: false,
        birthDate: PersonData && PersonData.birthDate ? PersonData.birthDate: "",
        isBirthDateValid: PersonData && PersonData.birthDate ? true: false,
        gender: PersonData && PersonData.gender ? PersonData.gender: "",
        isGenderValid: PersonData && PersonData.gender ? true: false,
        image: PersonData && PersonData.image ? PersonData.image: "",
        isImageValid: PersonData && PersonData.image ? true: false
    })
    const updateInputValue = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log()
        switch (name) {
            case "firstName":
                if(value){
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonNameValMessage: ""} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isNameValid: true, firstName: value } }
                    })
                }
                else{
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonNameValMessage: "Please enter a Name"} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isNameValid: false, firstName: value } }
                    })
                }
                break;
            case "email":
                if(value && USER_EMAIL_REGEX.test(value)) {
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonEmailValMessage: ""} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isEmailValid: true, email: value } }
                    })
                }
                else{
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonEmailValMessage: value?"Please enter a valid email":"Please enter a Email"} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isEmailValid: false, email: value } }
                    })
                }
                break;
            case "birthDate":
                if(value) {
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonBirthDateValMessage: ""} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isBirthDateValid: true, birthDate: value } }
                    })
                }
                else{
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonBirthDateValMessage: "Please enter a Date"} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isBirthDateValid: false, birthDate: value } }
                    })
                }
                break;
            case "gender":
                if(value) {
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonGenderValMessage: ""} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isGenderValid: true, gender: value } }
                    })
                }
                else{
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonGenderValMessage: "Please enter a Gender"} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isGenderValid: false, gender: value } }
                    })
                }
                break;
            case "image":
                if(value && urlRegex.test(value)) {
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonImageValMessage: ""} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isImageValid: true, image: value } }
                    })
                }
                else{
                    setValidationMessages(prevState =>{
                        return {...prevState, ...{ PersonImageValMessage: value?"Please enter a valid Image URL":"Please enter a Image URL"} }
                    })
                    SetPersonFormData(prevState =>{
                        return {...prevState, ...{ isImageValid: false, image: value } }
                    })
                }
                break;
            default:
                break;
        }
    }
    return (
        <>
            <section className="py-5">
                <Container>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                    </nav>
                </Container>
            </section>
            <section className="py-5">
                <Form noValidate onSubmit={handleLoginSubmit} >
                    <Container>
                        <Row>
                            <Form.Group as={Col} lg={4} sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><i className="fa fa-user"></i></InputGroup.Text>
                                    <Form.Control
                                        autoComplete="off" required
                                        onChange={event => {updateInputValue(event)}}
                                        isInvalid={submitClicked?PersonFormData.isNameValid?false:true:false}
                                        value={PersonFormData.firstName}
                                        name="firstName" type="text"
                                        placeholder="Name" />
                                        {
                                            submitClicked && validationMessages.PersonNameValMessage?
                                            <Form.Control.Feedback type={PersonFormData.isNameValid?"valid":"invalid"} className="text-start">{validationMessages.PersonNameValMessage}</Form.Control.Feedback>
                                            :""
                                        }
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><i className="fa fa-envelopes-bulk"></i></InputGroup.Text>
                                    <Form.Control
                                        autoComplete="off" required
                                        onChange={event => updateInputValue(event)}
                                        isInvalid={submitClicked?PersonFormData.isEmailValid?false:true:false}
                                        value={PersonFormData.email}
                                        name="email" type="email"
                                        placeholder="Email" />
                                        {
                                            submitClicked?
                                            <Form.Control.Feedback type={PersonFormData.isEmailValid?"valid":"invalid"} className="text-start">{validationMessages.PersonEmailValMessage}</Form.Control.Feedback>
                                            :''
                                        }
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><i className="fa fa-calendar-days"></i></InputGroup.Text>
                                    <Form.Control
                                        autoComplete="off" required
                                        onChange={event => updateInputValue(event)}
                                        isInvalid={submitClicked?PersonFormData.isBirthDateValid?false:true:false}
                                        value={PersonFormData.birthDate}
                                        name="birthDate" type="date"
                                        placeholder="Date of Birth" />
                                        {
                                            submitClicked?
                                            <Form.Control.Feedback type={PersonFormData.isBirthDateValid?"valid":"invalid"} className="text-start">{validationMessages.PersonBirthDateValMessage}</Form.Control.Feedback>
                                            :''
                                        }
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><i className="fa fa-map"></i></InputGroup.Text>
                                    <Form.Select
                                        autoComplete="off" required
                                        onChange={event => updateInputValue(event)}
                                        isInvalid={submitClicked?PersonFormData.isGenderValid?false:true:false}
                                        value={PersonFormData.gender}
                                        name="gender" type="text"
                                        placeholder="Gender">
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                    </Form.Select>
                                        {
                                            submitClicked?
                                            <Form.Control.Feedback type={PersonFormData.isGenderValid?"valid":"invalid"} className="text-start">{validationMessages.PersonGenderValMessage}</Form.Control.Feedback>
                                            :''
                                        }
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} lg={4} sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><i className='fa fa-globe'></i></InputGroup.Text>
                                    <Form.Control
                                        autoComplete="off" required
                                        onChange={event => updateInputValue(event)}
                                        isInvalid={submitClicked?PersonFormData.isImageValid?false:true:false}
                                        value={PersonFormData.image}
                                        name="image" type="url"
                                        placeholder="Image URL" />
                                        {
                                            submitClicked?
                                            <Form.Control.Feedback type={PersonFormData.isImageValid?"valid":"invalid"} className="text-start">{validationMessages.PersonImageValMessage}</Form.Control.Feedback>
                                            :''
                                        }
                                </InputGroup>
                            </Form.Group>
                            <Col lg={4}>
                                <Button type="submit" variant="primary">Add Person Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </section>
        </>
    )
}
