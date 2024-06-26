import Article from "./Article";

function ListofArticles({posts}){

    const individualArticles=posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    })
return(
    <>
    <main>
        {individualArticles}
    </main>
</>
)

}

export default ListofArticles;