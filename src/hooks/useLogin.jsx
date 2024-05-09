import { useState, useEffect } from "react";

const useSignup = (props) => {

    const [approved, setApproved] = useState(false);


    return{
        approved
    }
}

export default useSignup;