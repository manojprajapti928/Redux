import { getData } from "./ProductReduser";

import axios from "axios";

export const fetchData = () => async (dispatch) => {

    const Res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(Res.data)
    dispatch(getData(Res.data))

   
}