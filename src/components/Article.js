
function Article({preview, title, date}){


    return(
    <article>
        <h3>{title}</h3>
        {date ? <small>{date}</small> : <small>January 1, 1970</small>}
        <p>{preview}</p>
    </article>
    )
}
export default Article;