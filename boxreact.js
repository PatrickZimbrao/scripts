var imported1 = document.createElement('script');
imported1.src = 'https://unpkg.com/react@17/umd/react.development.js'

var imported2 = document.createElement('script');
imported2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.development.js'

var imported3 = document.createElement('script');
imported3.src = 'https://unpkg.com/@babel/standalone/babel.min.js'

const divbanner = {
    background: '#F29D00',
};
const divtext = {
    padding: '#15px !important',
    margin: '0px !important'
};
<script type="text/babel">
	const divbanner = {
		background: '#F29D00',
	};
	const divtext = {
		padding: '#15px !important',
		margin: '0px !important'
	};
	function Welcome(props) {
		return (
			<div style={{border: '3px solid #F29D00'}}>
				<div class="d-flex justify-content-between bd-highlight mb-3 align-items-center" style={divbanner}>
					<div class="p-2 bd-highlight">
						<h2 style={{color: 'rgb(255,255,255)'}}><b>SAIBA MAIS</b></h2>
					</div>
					<div class="p-2 bd-highlight">
						<img src="https://drive.google.com/uc?id=1HCgHMDRb86oTkS5E9knc7LtaJ_VSfk1o" alt="" width="80" height="73"/>
					</div>
				</div>
				<div style={divtext}>
					<p>
						{element}
					</p>
				</div>
			</div>
		);
	}
	const child = document.getElementById('saiba-mais');
	const element = document.getElementById('saiba-mais').childNodes[0].nodeValue;
	ReactDOM.render(<Welcome/>, document.getElementById('saiba-mais'));
</script>

const child = document.getElementById('saiba-mais');
const element = document.getElementById('saiba-mais').childNodes[0].nodeValue;
ReactDOM.render(<Welcome/>, document.getElementById('saiba-mais'));

document.body.appendChild(imported1, imported2, imported3);
