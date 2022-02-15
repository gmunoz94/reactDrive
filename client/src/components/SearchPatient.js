import React, { useState } from 'react';
import Axios from 'axios';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchPatient = () =>{
	const [searchData, setSearchData] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: ""
	})
	
	const [rows, setRows] = useState([]);
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSearchData({ ...searchData, [name]: value });
	};
	
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(searchData);
		
		if(searchData.lastName) {
			Axios.get(`http://localhost:3001/api/patients/searchLast/${searchData.lastName}`)
			.then((response) => {
				console.log(response.data);
				setRows(response.data);
			})
		}
		if(searchData.firstName) {
			Axios.get(`http://localhost:3001/api/patients/searchFirst/${searchData.firstName}`)
			.then((response) => {
				console.log(response.data);
				setRows(response.data);
			})
		}
		if(searchData.dateOfBirth) {
			Axios.get(`http://localhost:3001/api/patients/searchDOB/${searchData.dateOfBirth}`)
			.then((response) => {
				console.log(response.data);
				setRows(response.data);
			})
		}
		if(searchData.lastName && searchData.firstName) {
			Axios.get(`http://localhost:3001/api/patients/searchLastFirst/${searchData.lastName}/${searchData.firstName}`)
			.then((response) => {
				console.log(response.data);
				setRows(response.data);
			})
		}
		if(searchData.lastName && searchData.firstName && searchData.dateOfBirth) {
			Axios.get(`http://localhost:3001/api/patients/searchAll/${searchData.lastName}/${searchData.firstName}/${searchData.dateOfBirth}`)
			.then((response) => {
				console.log(response.data);
				setRows(response.data);
			})
		}
	}

	const history = useHistory();
	
	const handleRowClick = (event) => {
		console.log(event.target)
		let path = `/patient/profile/${event.target.value}`
		history.push(path);
	};

	return(
		<div className="col-lg-9 mt-5">
			<Container className='bg-secondary'>
				<Row>
					<Form onSubmit={handleFormSubmit}>
						<Row className='p-3'>
							<Form.Group as={Col} controlId="formLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type='text' placeholder='Last Name' name='lastName' value={searchData.lastName} onChange={handleInputChange} />
							</Form.Group>
							<Form.Group as={Col} controlId="formFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control type='text' placeholder='First Name' name='firstName' value={searchData.firstName} onChange={handleInputChange} />
							</Form.Group>
							<Form.Group as={Col} controlId="formDateOfBirth">
								<Form.Label>Date Of Birth</Form.Label>
								<Form.Control type='date' name='dateOfBirth' value={searchData.dateOfBirth} onChange={handleInputChange} />
							</Form.Group>
							<Button type='submit'>Search</Button>
						</Row>
					</Form>
				</Row>
			</Container>
			<Container>
				<div className='table-responsive'>
					<Table className='table-striped table-hover'>
						<thead>
							<tr>
								<th scope='col'>Last Name</th>
								<th scope='col'>First Name</th>
								<th scope='col'>Date of Birth</th>
								<th scope='col'>Phone Number</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((r) => r === null ? (
								<tr>
									<td colSpan={4}>No Patients</td>
								</tr>
							) : (
								<tr key={r.patient_id}>
									<td>{r.lastName}</td>
									<td>{r.firstName}</td>
									<td>{r.dateOfBirth}</td>
									<td>{r.phoneNumber}</td>
									<td><Button value={r.patient_id} onClick={handleRowClick}>Select</Button></td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</Container>
		</div>
	)
}

export default SearchPatient;