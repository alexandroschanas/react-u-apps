import reactImg from '../assets/react-core-concepts.png';


export default function Headerjsx(){

        let fund_arr = ["Fundamental","Core","Crucial"]
        let description = fund_arr[Math.floor(Math.random()*(fund_arr.length))];

    return (

        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>RE</h1>
            <p>
            {description} React concepts you will need for almost any app you are
            going to build!
            </p>
      </header>
    )
}