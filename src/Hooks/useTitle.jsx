import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() => {
        document.title =` ${title} | E-Toys`;
    }, [title]);
};

export default useTitle;