import { useState, useEffect } from "react";

type YoutubeData = {
   id: string | null;
   title: string | null;
   thumbnail: string;
};

export const useYouTubeData = (url: string) => {
   const [youtubeData, setYouTubeData] = useState<YoutubeData>({
      id: null,
      title: null,
      thumbnail: "",
   });

   const getVideoTitle = async (url: string) => {
      const oEmbedUrl = `https://www.youtube-nocookie.com/oembed?url=${url}&format=json`;

      try {
         const response = await fetch(oEmbedUrl);
         const data = await response.json();
         return data.title;
      } catch (error) {
         console.error("Error fetching video title:", error);
         return null;
      }
   };

   const extractYouTubeVideoId = (url: string) => {
      const videoIdRegex =
         /(?:youtu\.be\/|youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
      const match = url.match(videoIdRegex);

      if (match && match[1]) {
         return match[1];
      } else {
         return null; // Invalid or unrecognized YouTube URL
      }
   };

   useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
         const id = extractYouTubeVideoId(url);
         const title = await getVideoTitle(url);
         const thumbnail = `http://img.youtube.com/vi/${id}/mqdefault.jpg`;
         setYouTubeData({
            id,
            title,
            thumbnail,
         });
      };
      fetchData();
   }, [url]);

   return youtubeData;
};
