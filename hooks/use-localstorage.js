import { useEffect, useState } from 'react'

const useLocalStorage = () => {
    const [configuration, setConfiguration] = useState({})
    useEffect(() => {
        const playerConfiguration = JSON.parse(localStorage.getItem('reactplayer_configuration')) || {
            autoplay: true,
            autonext: false,
            enlarge: false
        }
        const viewLater = JSON.parse(localStorage.getItem('view_later')) || []
        setConfiguration((prevState) => {
            return {
                ...prevState,
                playerConfiguration,
                viewLater,
            }
        })
    }, [setConfiguration])
    const setLocalStorage = (data = {}, name = 'reactplayer_configuration') => {
        if (!name || !data) return
        let parsedData
        switch (typeof data) {
            case 'string':
                parsedData = data
                break
            case 'object':
                parsedData = JSON.stringify(data)
                break
            default:
                parsedData = data.toString()
                break
        }
        switch (name) {
            case 'reactplayer_configuration':
                setConfiguration((prevState) => {
                    return {
                        ...prevState,
                        playerConfiguration: data
                    }
                })
                break
            case 'view_later':
                setConfiguration((prevState) => {
                    return {
                        ...prevState,
                        viewLater: data
                    }
                })
                break
        }
        localStorage.setItem(name, parsedData)
    }

    return {
        configuration,
        setLocalStorage
    }
}

export default useLocalStorage
