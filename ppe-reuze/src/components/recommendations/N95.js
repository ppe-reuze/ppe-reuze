import React from 'react';

function N95() {
	return (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4 has-text-black">Dry Heat Treatment</p>
						<p className="subtitle is-6 has-text-black">Society of American Gastrointestinal and Endoscopic Surgeons - Updated 4/17/2020</p>
					</div>
				</div>
				<div className="content">
					"Dry heating of the mask at 70°C for 30 minutes has been suggested as a method of decontamination which can adequately kill virus and preserve the filter integrity for re-use. Recent tests at the NIH utilizing SARS-CoV-2 specifically indicated that this method can be used for two cycles to kill the virus without compromising fit. Research efforts are ongoing to determine optimal parameters (temperature and duration), and this is not yet recommended by the CDC."
                <br /><br />
					<p><strong>Source</strong>: <a href="https://www.sages.org/n-95-re-use-instructions/">https://www.sages.org/n-95-re-use-instructions/</a></p>
				</div>
			</div>
		</div>
	)
}

export default N95;