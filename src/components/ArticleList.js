import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
// console.log(posts)
    const articleArray = posts.map(post => {
    // const articleArray = posts.map(post => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
        )
    })

    return (
        <main>
            {articleArray}
        </main>
    )
}


export default ArticleList;