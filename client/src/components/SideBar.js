import React from "react";

const Sidebar = () => {

	return(
		<div className="col-lg-2 d-flex flex-column flex-shrink-0 text-white bg-dark" >
			<ul className="nav nav-pills flex-column mb-auto pt-3">
				<li className="nav-item">
					<a href="/" className="nav-link active" aria-current="page">
						Home
					</a>
				</li>
				<li>
					<a href="/dashboard" className="nav-link">
						Dashboard
					</a>
				</li>
				<li>
					<a href="/orders" className="nav-link">
						Orders
					</a>
				</li>
				<li>
					<a href="/patient/search" className="nav-link">
						Patients
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