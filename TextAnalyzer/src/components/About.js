import React from "react";
//import PropTypes from 'prop-types'

export default function About(props) {
    /*const [myStyle, setMyStyle] = useState({
        color: 'black',
        background: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                background: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                background: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }*/
  return (
    <div className="container" style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}>
        <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}>
              <strong>TextUtils</strong> is a free character counting utility that offers real-time word and character counts for a given text. The quantity of <code> words and characters </code> is reported by TextUtils. As a result, it is appropriate for material with word or character limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Browser Compitable</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}>
              <strong>Any online browser,</strong> including Chrome, Firefox, Internet Explorer, Safari, and Opera, may use this word counter software. In Facebook, blogs, novels, excel documents, PDF documents, essays, etc., <code>character counts</code> are appropriate.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      {/*<button type="button"  className="btn btn-primary my-3">{btnText}</button>*/}
      </div>
    </div>
  );
}
