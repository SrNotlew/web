import React from "react";

import {Container, VideoListWrapper} from "./styles"

import AddVideo from "../AddVideo"
import Video from "../Video"

import { useAxios } from "../hooks/useAxios";


export default function VideoList() {
    const { data } = useAxios('videos');

    return(
        <Container>
            <VideoListWrapper>
                {data?.videos?.map((video) => (
                    <Video
                    key={video._id}
                    id={video._id}
                    title={video.title}
                    link={video.link}
                    liked={video.liked}
                    />
                ))}
                <AddVideo />                
            </VideoListWrapper>
        </Container>
    );
}