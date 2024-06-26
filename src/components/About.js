import React from 'react'
// import React, { useState } from 'react'

export default function About(props) {

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const toggleStyle = () => {
    //     if (mystyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })

    //         setBtnText("Enable Dark Mode");
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
            
    //         setBtnText("Disable Dark Mode");
    //     }
    // }

    const mystyle = {
        color: (props.mode_var === 'dark')? 'white':'rgba(33,37,41,1)',
        backgroundColor: (props.mode_var === 'dark')? 'rgba(33,37,41,1)':'white'
    };

    return (
        <>
            <div className='container my-3'>
                <h1>{props.aboutUs}</h1>
                <div className='container'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus maxime illum sint. Deserunt soluta saepe quasi! Iste doloribus obcaecati accusantium iusto, reiciendis tempora quasi. Nihil sed eveniet doloremque soluta, sint, inventore vitae dolorem similique adipisci beatae pariatur quaerat aut? Explicabo, saepe voluptatum? Tempora quos, blanditiis officia modi dolores excepturi!
                </div>

                <div className="accordion my-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* <button className="btn btn-primary" style={mystyle} onClick={toggleStyle}> {btntext} </button> */}
                {/* <div className='container my-3'>
                    <button className="btn btn-primary" style={{width: "11rem"}} onClick={toggleStyle}> {btntext} </button>
                </div> */}
            </div>

        </>
    );
};
