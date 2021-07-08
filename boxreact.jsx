function Box(bannerdiv, textdiv, texttitle, image, elemento){
    return (
        <div style={{border: '3px solid #F29D00'}}>
            <div class="d-flex justify-content-between bd-highlight mb-3 align-items-center" style={bannerdiv}>
                <div class="p-2 bd-highlight">
                    <h2 style={{color: 'rgb(255,255,255)'}}><b>{texttitle}</b></h2>
                </div>
                <div class="p-2 bd-highlight">
                    <img src={image} alt="" width="80" height="73"/>
                </div>
            </div>
            <div style={textdiv}>
                <p>
                    {element}
                </p>
            </div>
        </div>
    )
}
function documento (){
    if(document.getElementById('saiba-mais')!= null)
        return elemento = document.getElementById('saiba-mais').childNodes[0].nodeValue;
    else if(document.getElementById('pausa-para-pipoca') != null)
        return elemento = document.getElementById('pausa-para-pipoca').childNodes[0].nodeValue;
}

function Saibamais(props) {
    const element = documento
    const divbanner = {
        background: '#F29D00',
    };
    const divtext = {
        padding: '#15px !important',
        margin: '0px !important'
    };
    const texttitle = 'SAIBA MAIS'
    const image = "https://drive.google.com/uc?id=1HCgHMDRb86oTkS5E9knc7LtaJ_VSfk1o"
    return (
        Box(divbanner, divtext, texttitle, image, element)
    );
}

function PausaParaPipoca(props){
    const element = documento
    const divbanner = {
        background: '#F29D00',
    };
    const divtext = {
        padding: '#15px !important',
        margin: '0px !important'
    };
    const texttitle = 'PAUSA PARA PIPOCA'
    const image = "https://drive.google.com/uc?id=10YqcALeY5qyZkW60LlZHgVZInrbYbrLL"
    return (
        Box(divbanner, divtext, texttitle, image, element)
    );
}

ReactDOM.render(<Saibamais/>, document.getElementById('saiba-mais'));
ReactDOM.render(<PausaParaPipoca/>, document.getElementById('pausa-para-pipoca'));
