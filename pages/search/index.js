import axios from 'axios'
import { useRef, useState } from 'react'

const Search = ({ series = [], error = '' }) => {
    const searchRef = useRef()
    const [filteredSeries, setFilteredSeries] = useState([...series])
    const filterSeries = () => {
        setFilteredSeries(series.filter((serie) => serie.toLowerCase().includes(searchRef.current.value.toLowerCase().replaceAll(' ', '-'))))
    }

    return (
        <div className='flex flex-col m-10'>
            <div className='flex flex-col z-[900]'>
                <div className='form__group self-center'>
                    <label htmlFor='search' className='hidden'>Buscar</label>
                    <input ref={searchRef} onChange={filterSeries} type='input' className='form__field' id='search' placeholder='Busca tu serie favorita por nombre' autoComplete='off' />
                </div>
                <div className='flex flex-col m-10'>
                    <span className='text-2xl italic font-bold mb-10'>Populares</span>
                    <div className='flex flex-row flex-wrap'>
                        {filteredSeries.map((serie) => (
                            <div key={Math.random().toString()} className='ml-6 mb-6 w-[20vw]'>
                                <a href={`/series/${serie}`} className='capitalize hover:underline'>
                                    {serie.split('-').join(' ')}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

export async function getStaticProps() {
    let animes = []
    let error = ''
    await axios.get(`${process.env.API_URL}animes`)
        .then((res) => {
            animes = res.data.animes
        }).catch((err) => {
            error = err.message
        })

    return {
        props: {
            series: animes,
            error
        },
        revalidate: 10
    }
}