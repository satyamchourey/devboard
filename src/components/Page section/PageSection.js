import React from 'react'
import Img from './Abstract.jpg'
export default (props) => {
    const thumbnail={height:"300px"};
    const styles={textAlign:"justify"};
    return (
        <div className='container-fluid bg-dark'>
            <div className="row m-5  text-light">
                <div className='col'>
                    <img style={thumbnail} src={Img} alt="..."/>

                </div>
                <div className='col'>
                    <h2>{props.psHead.psHead}</h2>
                    <p className={styles}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                
            </div>
        </div>
    )
}
