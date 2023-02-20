import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PersonAddEdit from './PersonAddEdit';
import axios from '../../api/axios';
import SERVER_URL from '../../api/urls';



export default function PersonInfo() {
    const params = useParams();
    const [personInfoArray, setPersonInfoArray] = useState(null)
    useEffect(() => {
        let ignore = false;
        if(!personInfoArray && !ignore){
            const GetPersonData = async ()=>{
                await axios.get(SERVER_URL.getPerson + params.id.toString()).then(res=>{
                    if(!res || res.status !== 200){
                        console.log(res, "Req Failed")
                    }
                    else{
                        setPersonInfoArray(res.data)
                        console.log(personInfoArray, "Req Recieved", res)
                    }
                }).catch(e=>{
                    console.log(e, "Req Error")
                })
            }
            GetPersonData()
        }
        return () => {ignore=true}
    }, [])
    return (
        <>
            {
                personInfoArray?
                <PersonAddEdit PersonData={personInfoArray} />
                :""
            }
        </>
        
    )
}
