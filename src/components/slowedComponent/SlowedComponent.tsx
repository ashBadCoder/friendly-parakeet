import React ,{useState , useEffect} from 'react'

export  const SlowedComponent = () => {
    const [canShow , setCanShow] = useState(false)

    // Set Time out
    useEffect(()=>{
        const timer = setTimeout( () => setCanShow(true) , 3000)
        return () => clearTimeout(timer);
    })

    return ( <>
            {canShow ? <h1> visible </h1> : <> </>}
    </>
    )
}