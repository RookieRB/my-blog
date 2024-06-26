import { Navigate } from "react-router-dom";

import Home from '@/views/home'
import LoginPage from "@/views/pageLogin";
import PageLeaveMessage from "@/views/leaveMessage";

import PageMusic from "@/views/music";
import PageMusicBoke from "@/views/music/c-cpns/music-views/PageMusicBoke";
import PageMusicCommunity from "@/views/music/c-cpns/music-views/PageMusicCommunity";
import PageMusicFeatured from "@/views/music/c-cpns/music-views/PageMusicFeatured";
import PageMusicRecommend from "@/views/music/c-cpns/music-views/PageMusicRecommend";
import PageMusicRoaming from "@/views/music/c-cpns/music-views/PageMusicRoaming";
import PageMusicMyFavorite from "@/views/music/c-cpns/music-views/PageMusicMyFavorite";
import PageMusicLastPlay from "@/views/music/c-cpns/music-views/PageMusicLastPlay";
import PageMusicMyBoke from "@/views/music/c-cpns/music-views/PageMusicMyBoke";
import PageMusicMyCollection from "@/views/music/c-cpns/music-views/PageMusicMyCollection";
import PageMusicLoadingManagement from "@/views/music/c-cpns/music-views/PageMusicLoadingManagement";
import PageMusicLocalMusic from "@/views/music/c-cpns/music-views/PageMusicLocalMusic";
import PageMusicMyYunMusic from "@/views/music/c-cpns/music-views/PageMusicMyYunMusic";

import WorkDisplay from "@/views/worksDisplay";
import PageCut from "@/components/pageCut";
import PageStar from "@/components/pageStar";


const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path:"/leaveMessage",
        element: <PageLeaveMessage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: '/worksdisplay',
        element: <WorkDisplay/>,
        children: [
            {
                path: "pagecut",
                element: <PageCut/>
            },
            {
                path: "pageStar",
                element: <PageStar/>
            },
        ]
    },
    {
        path:"/music",
        element: <PageMusic/>,
        children:[
            {
                path: "recommend",
                element: <PageMusicRecommend/>,
            },
            {
                path: "featured",
                element: <PageMusicFeatured/>,
            },
            {
                path: "boke",
                element: <PageMusicBoke/>,
            },
            {
                path: "roaming",
                element: <PageMusicRoaming/>,
            },
            {
                path: "community",
                element: <PageMusicCommunity/>,
            },
            {
                path: "my_favorite",
                element: <PageMusicMyFavorite/>,
            },
            {
                path: "last_play",
                element: <PageMusicLastPlay/>,
            },
            {
                path: "my_boke",
                element: <PageMusicMyBoke/>,
            },
            {
                path: "my_collection",
                element: <PageMusicMyCollection/>,
            },
            {
                path: "loading_management",
                element: <PageMusicLoadingManagement/>,
            },
            {
                path: "local_music",
                element: <PageMusicLocalMusic/>,
            },
            {
                path: "my_yun_music",
                element: <PageMusicMyYunMusic/>,
            }
        ]
    }
    
    
]

export default routes