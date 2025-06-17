export default function CoreConcept({title,description,img}){
    return(
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={img} />
        </li>
    )
}