import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams, useNavigate  } from 'react-router-dom';




const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,
url("https://images.pexels.com/photos/10003524/pexels-photo-10003524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ;
background-size:100% 100% ;
display: flex;
align-items:center ;
justify-content: center;

`
const Wrapper = styled.div`
    
padding: 20px;
width: 70%;
background-color:white ;
border-radius:20px ;

`
const Title = styled.h1`
    font-size:24px ;
    font-weight:300 ;
`
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
    height:  50px;
`
const Text = styled.p`
font-size:12px ;
margin:20px 0px ;
color:white ;
cursor: pointer;
`
const Button = styled.button`
width: 40%;
border:none ;
background-color:teal ;
padding: 15px 20px;
cursor: pointer;
`
const Select = styled.select`
 flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;

`
const Option = styled.option`

`
const StyledTextarea = styled.textarea`
flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Container2 = styled.div`

width:100% ;
display: flex;
justify-content:space-between ;


`

const Edit = () => {

const navigate = useNavigate()

    const [inpval, setINP] = useState(
        {
            order: "",
            date: "",
            po: "",
            name: "",
            id: "",
            status: "",
            createdby: "",
            address: ""

        }
    )
    const setdata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setINP(
            (preval) => {
                return {
                    ...preval,
                    [name]: value
                }
            }
        )

    }


    const { id } = useParams("");
    console.log(id)

    const getdata = async (e) => {
        const res = await fetch(`http://localhost:8003/getpo/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 404 || !data) {
            console.log("error")
        } else {
            setINP(data)
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const editpo = async (e) => {
        e.preventDefault();
        const { order, date, po, name, status, createdby, address } = inpval;

        const res2 = await fetch(`http://localhost:8003/edit/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                order, date, po, name, id, status, createdby, address

            })
        });
        const data2 = await res2.json();
        console.log(data2)

        if (res2.status === 404 || !data2) {
            alert("Fill the data")
        } else {

            alert("data updated")
            navigate("/")

        }
    }

    return (
        <>
            <Container>

                <Wrapper>
                    <Container2>
                        <Title>EDIT PO</Title>
                        <Link to="/">
                            <HomeIcon fontSize='large' />
                        </Link>
                    </Container2>
                    <Form>
                        <Input placeholder="Order#" type="number" value={inpval.order} name="order" onChange={setdata} ></Input>

                        <Input placeholder="Order Date" type="date" value={inpval.date} name="date" onChange={setdata}></Input>

                        <Input placeholder="PO#" value={inpval.po} name="po" onChange={setdata}></Input>

                        <Input placeholder="Customer Name" type="text" value={inpval.name} name="name" onChange={setdata}></Input>

                        <Input placeholder="Item ID" value={inpval.id} name="id" onChange={setdata}></Input>

                        <Select value={inpval.status} name="status" onChange={setdata}>
                            <Option hidden >Pease select the status</Option>
                            <Option>Draft</Option>
                            <Option>Shipping Label Generated</Option>
                            <Option>Shipped</Option>
                            <Option>Delivered</Option>
                        </Select>

                        <Input placeholder="Created By" value={inpval.createdby} name="createdby" onChange={setdata}></Input>

                        <StyledTextarea placeholder="Please enter the complete shipping address" value={inpval.address} name="address" onChange={setdata}></StyledTextarea>

                    </Form>
                    <Button className='mt-4' onClick={editpo}>ADD PO</Button>
                </Wrapper>
            </Container>

        </>
    )
}

export default Edit