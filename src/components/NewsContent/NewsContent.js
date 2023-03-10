import { Container } from "@mui/material";
// import { margin } from "@mui/system";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({newsArray,newsResults,loadmore, setLoadmore}) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                {
                    newsArray.map((newsItem)=> (
                        <NewsCard newsItem={newsItem} key={newsItem.title}/>
                    ))
                }
                {
                    loadmore <= newsResults && (
                        <>  
                            <button style={{ margin: "20px" }} className="loadMore" onClick={() =>setLoadmore(loadmore+ 15)}>
                                Load More
                            </button>
                        </>
                    )
                }

            </div>
        </Container>
    )
}
export default NewsContent