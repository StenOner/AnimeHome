import axios from 'axios'

const Series = ({ series = [], error = '' }) => {
    const errorElement = (
        <div className='error'>{error || 'No hay series'}</div>
    )

    return (
        <div className='flex flex-col m-10'>
            <div className='flex flex-row space-x-6 z-[900]'>
                <span className='text-4xl'>Series</span>
                <div className='flex items-end'>
                    <span>order</span>
                </div>
            </div>
            <div className='flex flex-wrap mt-6 z-[900]'>
                {(error || series.length < 0) && errorElement}
                {series.map((serie) => (
                    <div className='flex w-[20vw] mb-6 ml-6' key={Math.random().toString()}>
                        <a href={`/series/${serie}`} className='cursor-pointer capitalize hover:underline'>
                            {serie.split('-').join(' ')}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

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

export default Series
