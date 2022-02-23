import React, { useContext } from "react";
import { PatientContext } from "../Profile";
import { useRouteMatch } from "react-router-dom";


const Sidebar = () => {
	const thisPatient = useContext(PatientContext);
	const { url } = useRouteMatch();

	// console.log('path', path);
	// console.log('url', url);


	return(
		<div className="col-lg-2 d-flex flex-column flex-shrink-0 text-white bg-dark" >
			<ul className="nav nav-pills flex-column mb-auto pt-3">
				<li className="nav-item">
					<div href={url} className="nav-link active fw-bold" aria-current="page">
						{thisPatient.firstName} {thisPatient.lastName}
					</div>
				</li>
				<li>
					<a  href={url} className="nav-link">
						Profile
					</a>
				</li>
				<li>
					<a href={`${url}/allOrder`} className="nav-link">
						All Orders
					</a>
				</li>
				<li>
					<a href={`${url}/pendingOrder`} className="nav-link">
						Pending Orders
					</a>
				</li>
				<li>
					<a href={`${url}/completeOrder`} className="nav-link">
						Complete Orders
					</a>
				</li>
				<li>
					<a href={`${url}/glNew`} className="nav-link">
						New Glasses Order
					</a>
				</li>
				<li>
					<a href={`${url}/clNew`} className="nav-link">
						New Contact Order
					</a>
				</li>
			</ul>
			<hr />
			<div className="dropdown pb-3">
				<a href="/user" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
					<strong>mdo</strong>
				</a>
				<ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
					<li><a className="dropdown-item" href="/settings">Settings</a></li>
					<li><a className="dropdown-item" href="/user">Profile</a></li>
					<li><hr className="dropdown-divider" /></li>
					<li><a className="dropdown-item" href="/signout">Sign out</a></li>
				</ul>
			</div>
		</div>
		)
};

export default Sidebar;