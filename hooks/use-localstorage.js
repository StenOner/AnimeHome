import { useEffect, useState } from 'react'

const useLocalStorage = () => {
    const [configuration, setConfiguration] = useState({
        autoplay: true,
        autonext: false,
        enlarge: false
    })
    useEffect(() => {
        if (localStorage.getItem('reactplayer_configuration')) setConfiguration(JSON.parse(localStorage.getItem('reactplayer_configuration')))
    }, [setConfiguration])
    const setLocalStorage = (data = {}, name = 'reactplayer_configuration') => {
        if (!name || !data) return
        let parsedData
        if (typeof data === 'object') parsedData = JSON.stringify(data)
        if (typeof data !== 'object' && typeof (data) !== 'string') parsedData = data.toString()
        if (typeof data === 'string') parsedData = data
        localStorage.setItem(name, parsedData)
    }

    return {
        configuration,
        setLocalStorage
    }
}

export default useLocalStorage
