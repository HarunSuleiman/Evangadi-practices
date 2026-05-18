import { useState, useEffect } from "react";

function YouTubeVideoes() {
  const [YouTubeVideos, setYouTubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "/json.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setYouTubeVideos(data.items);
      });
  }, []);
  //   console.log(YouTubeVideos);

  return (
    <section className="allvideoswraper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              Latest Videos Using "API" Intedration
              <br />
              <br />
            </div>
          </div>
          {YouTubeVideos?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink}></a>
                    <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                    <a />
                  </div>
                  <div className="videoInfoWraper">
                    <div className="videoTitle">
                      <a href={vidLink} target=" _blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </section>
  );
}
export default YouTubeVideoes;
