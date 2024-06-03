export default function SubredditAbout({aboutData}){
    console.log(aboutData);
    const { display_name_prefixed, public_description } = aboutData;
    return (
        <div>
            <h2>{display_name_prefixed}</h2>
            <p>{public_description}</p>
        </div>
    )
}