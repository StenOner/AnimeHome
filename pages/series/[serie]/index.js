import axios from 'axios'

const SerieDetail = ({ serie = '', chapters = [], error = '' }) => {
    const errorElement = (
        <div className='error'>{error || 'No hay capitulos'}</div>
    )

    return (
        <div className='flex flex-col m-10'>
            <div className='flex z-[900]'>
                <span className='text-4xl capitalize'>{serie.split('-').join(' ')}</span>
            </div>
            <div className='flex flex-col mt-6 z-[900]'>
                {(error || chapters.length < 0) && errorElement}
                <ul>
                    {chapters.map((chapter) => (
                        <li className='' key={Math.random().toString()}>
                            <a href={`/series/${serie}/${chapter}`} className='cursor-pointer hover:underline'>
                                {chapter}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: ['/series/[serie]'],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    let chapters = []
    let error = ''
    const serie = params.serie
    await axios.get(`${process.env.API_URL}anime/${serie}`)
        .then((res) => {
            chapters = res.data.chapters
        }).catch((err) => {
            error = err.message
        })

    return {
        props: {
            serie,
            chapters,
            error
        },
        revalidate: 10
    }
}

export default SerieDetail
