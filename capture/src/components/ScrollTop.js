import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = () => {

    const {pathname} = useLocation();
    useEffect(() => {
        window.scroll({
            top:0,
            left:0
        })
    },[pathname])
    console.log(pathname);
    return null;
};

export default ScrollTop;