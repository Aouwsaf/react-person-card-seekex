import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import SERVER_URL from '../../api/urls';
import PersonCard from '../utils/PersonCard'

export default function AllPerson() {
    const [personInfoArray, setPersonInfoArray] = useState([])
    useEffect(() => {
        let ignore = false;
        if(!personInfoArray.length && !ignore){
            const GetPersonData = async ()=>{
                await axios.get(SERVER_URL.getPersons).then(res=>{
                    if(!res || res.status !== 200){
                        console.log(res, "Req Failed")
                    }
                    else{
                        setPersonInfoArray(res.data.users)
                        console.log(personInfoArray, "Req Recieved", res)
                    }
                }).catch(e=>{
                    console.log(e, "Req Error")
                })
            }
            GetPersonData()
        }
        return () => {ignore=true}
    }, [personInfoArray])
    
    
    
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    {
                        personInfoArray.length?personInfoArray.map((elm, index)=>{
                            return <PersonCard key={index} PersonData={elm}/>
                        }):''
                    }
                    <Link to={"profile/add"} className="col-md-4 col-lg-3 col-6 mb-3">
                        <Card className='text-center justify-content-center h-100' as={Row}>
                            <i className='fa fa-plus display-1'></i>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    )
}
