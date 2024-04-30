import myRequest from "../request";

export function getHomePageData(page = 1, pageSize = 5){
  return myRequest.get({
    url: "/home/page",
    params:{
      page,
      pageSize
    }
  })
}