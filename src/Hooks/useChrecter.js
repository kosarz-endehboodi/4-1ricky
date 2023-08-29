import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function useCharecter(query) {

    const [characters, setcharacter] = useState([]);
    const [isLoading, setlodaing] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        async function fetchlistloader() {
            try {
                setlodaing(true)
                    ;
                const response = `https://rickandmortyapi.com/api/character/?name=${query}`;
                const { data } = await axios.get(response, { signal })
                setcharacter(data.results)

                //for array set
                //{data}=> set(data.res)
                //data=set(data.data.res)
            } catch (err) {
                //fetch => err .name === aborterror
                //axios => axios.cancel
                if (!axios.isCancel()) {
                    setcharacter([]);

                    // for real project : err.response.data.message or error
                    toast.error(err.response.data.error)
                }

            } finally {
                setlodaing(false)
            }


        }
        fetchlistloader();
        return () => {
            //controller
            controller.abort();
        }
    }, [query])

    return { characters, isLoading }
}