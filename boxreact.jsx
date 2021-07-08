function Box(border, bannerdiv, textdiv, texttitle, image, textarea){
    return(
        <div style={border}>
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
                    {textarea}
                </p>
            </div>
        </div>
    )
}

function Saibamais(props) {
    const textarea = props.children;
    const divbanner = {
        background: '#F29D00',
    };
    const border = {
        border: '3px solid #F29D00'
    }
    const divtext = {
        padding: '#15px !important',
        margin: '0px !important'
    };
    const texttitle = 'SAIBA MAIS';
    const image = ""
    return (
        Box(border, divbanner, divtext, texttitle, image, textarea)
    );
}

function PausaParaPipoca(props){
    const textarea = props.children;
    const divbanner = {
        background: '#0554BF',
    };
    const border = {
        border: '3px solid #0554BF'
    }
    const divtext = {
        padding: '#15px !important',
        margin: '0px !important'
    };
    const texttitle = 'PAUSA PARA PIPOCA';
    const image = ""
    return (
        Box(border, divbanner, divtext, texttitle, image, textarea)
    );
}
const saibamais = document.getElementById('saiba-mais').childNodes[0].nodeValue
ReactDOM.render(<Saibamais>{saibamais}</Saibamais>, document.getElementById('saiba-mais'));
const pausaparapipoca = document.getElementById('pausa-para-pipoca').childNodes[0].nodeValue
ReactDOM.render(<PausaParaPipoca>{pausaparapipoca}</PausaParaPipoca>, document.getElementById('pausa-para-pipoca'));
