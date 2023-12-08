'use client';

import ThemeSwitcher from "./ThemeSwitcher";

// import React from 'react'

function PortfolioHead() {
	return (
		<>
			<div className="portfolio-head">
				<div className="left">
					<button>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png"
							alt=""
						/>
					</button>
					<div className="website">Fullstack.edu.vn F8</div>
					<div className="tabs">Home</div>
				</div>

				<div className="right">
					<div className="social-networks">
						<button className="network-item">F8</button>
						<button className="network-item">FB</button>
						<button className="network-item">YT</button>
					</div>
					<div className="actions">
						{/* <button className="change-theme">light/dark</button> */}
						<ThemeSwitcher />
						<button className="change-language">en</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default PortfolioHead;
