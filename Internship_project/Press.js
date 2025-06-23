import React from "react";
import "./HomeHead.css";

function Videos() {
  return (
    <div className="video-wrapper">
      <div className="video-grid">
        <iframe
          src="https://www.youtube.com/embed/zhe_cZ1YQ4c?si=MqAiXF6USQfTxXyb"
          title="Video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9nV0-0tZlM?si=VKsJPtxNFvd3LeoH" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe
          src="https://www.youtube.com/embed/ZLoMJGeSj3E?si=u5EpisOtj6mYvcQP"
          title="Video 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_HbXfqvdPWQ?si=cA_5GtjlzqTouZbU" title="YouTube video player"
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EKv_axVX7_A?si=D_Yhm9buMHTjgeof" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe
          src="https://www.youtube.com/embed/eU0FjU7d7eY?si=J_SLWOm-fcLJHafV"
          title="Video 4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
