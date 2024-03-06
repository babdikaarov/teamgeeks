import { /* useEffect,  */ useState } from "react";

const usePagination = (initialItemsPerPage = 8, initialPage = 1) => {
   const [currentPage, setCurrentPage] = useState(initialPage);
   // const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

   // const handleResize = () => {
   //    // FIX_ME check with Kanykei

   //    // const width = window.innerWidth;
   //    // if (width < 850 && width >= 500) {
   //    //   setItemsPerPage(8);
   //    // } else if (width < 500) {
   //    //   setItemsPerPage(4);
   //    // } else {
   //    setItemsPerPage(initialItemsPerPage);
   //    // }
   // };
   // useEffect(() => {
   //    handleResize();

   //    window.addEventListener("resize", handleResize);

   //    return () => {
   //       window.removeEventListener("resize", handleResize);
   //    };
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [initialItemsPerPage]);

   const getVisibleItems = (items: Slice.IGetBandImages[]) => {
      const startItemIndex = 0;
      const endItemIndex = currentPage * initialItemsPerPage;
      return items.slice(startItemIndex, endItemIndex);
   };
   const nextPage = () => {
      // console.log("next page");
      setCurrentPage((prevPage) => prevPage + 1);
   };

   const prevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
   };

   const goToPage = (page: number) => {
      setCurrentPage(page);
   };

   return {
      currentPage,
      getVisibleItems,
      nextPage,
      prevPage,
      goToPage,
   };
};

export default usePagination;
