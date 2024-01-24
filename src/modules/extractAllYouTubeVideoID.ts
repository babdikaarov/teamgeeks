export const extractAllYouTubeVideoID = (urls: string[]) => {
   const extractYouTubeVideoId = (url: string) => {
      const videoIdRegex =
         /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(videoIdRegex);

      if (match && match[1]) {
         return match[1];
      } else {
         return null; // Invalid or unrecognized YouTube URL
      }
   };

   return urls.map((el) => extractYouTubeVideoId(el));
};
