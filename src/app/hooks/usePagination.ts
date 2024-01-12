import { useEffect, useState } from "react";

type Item = {
  alt: string;
  src: string;
  view: string;
};

const usePagination = (initialItemsPerPage = 8, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handleResize = () => {
    // TODO keep it just incase

    // const width = window.innerWidth;
    // if (width < 850 && width >= 500) {
    //   setItemsPerPage(8);
    // } else if (width < 500) {
    //   setItemsPerPage(4);
    // } else {
    setItemsPerPage(initialItemsPerPage);
    // }
  };
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialItemsPerPage]);

  const getVisibleItems = (items: (Item | undefined)[]) => {
    // TODO verify behavior with designers if uncomments and delete 0
    // const startItemIndex = (currentPage - 1) * itemsPerPage;
    const startItemIndex = 0;
    const endItemIndex = currentPage * itemsPerPage;
    return items.slice(startItemIndex, endItemIndex);
  };
  // FIXME handle edge cases
  const nextPage = () => {
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
