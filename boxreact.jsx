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