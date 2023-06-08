import './body.css'
import danceMan from '../assets/dance.png'
import CustomButton from '../myComponents/CustomButton'

function Body(props) {
    const nameList = [
        "oolala",
        "olala",
        "wohoo",
        "wohoo"
    ]
    return (
        <>
            {
                nameList.map(
                    (name) => {
                        return <h3>{name}</h3>
                    }
                )
            }
            <div className="body-main">
                <div className="intro">
                    <span>Hello, I am</span>
                    <code><h1 >Yesha Khadka</h1></code>
                    <h3>Learner</h3>
                    <p>Remember, the optimal values for these properties will depend on the specific photo and the desired outcome. Experimentation and personal preference play a significant role in achieving the perfect photo editing result. The value of various properties for perfect photo editing in an iPhone can vary depending on the specific requirements and preferences of the user. However, here are some general guidelines:</p>
                    <div className='action'>
                        <CustomButton onClick={() => console.log('body hire me clicked')} colorClass="btn-style1" title="Hire Me"></CustomButton>
                        <CustomButton onClick={() => console.log('body download clicked')} id="download" colorClass="btn-style2" title="Download CV" isDownload></CustomButton>
                    </div>
                </div>
                <div className="profile">
                    <img src={danceMan}></img>
                </div>
            </div>
        </>
    )
}

export default Body