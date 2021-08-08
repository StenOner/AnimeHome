import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import classes from './WatchChapter.module.css'
import useLocalStorage from '../../../../hooks/use-localstorage'

const WatchChapter = ({ serie = '', chapter = '', videoUrl = '', subtitles = {}, previousChapter = null, nextChapter = null }) => {
    const router = useRouter()
    const { configuration, setLocalStorage } = useLocalStorage()
    const redirectToSerie = (chapter) => {
        if (chapter) router.push(`/series/${serie}/${chapter}`)
    }

    return (
        <div className='flex flex-col m-10'>
            <div className='flex mb-6 z-[900]'>
                <span className='text-4xl capitalize'>{serie.split('-').join(' ')} / {chapter.substring(0, chapter.lastIndexOf('.'))}</span>
            </div>
            <div className='flex mb-3 z-[900] h-[30vh] md:h-[60vh] lg:h-[80vh]'>
                {videoUrl && (
                    <ReactPlayer
                        className={classes['custom-video-subtitles']}
                        url={videoUrl}
                        width='100%'
                        height='100%'
                        config={{
                            file: {
                                attributes: {
                                    crossOrigin: 'anonymous',
                                    disablePictureInPicture: true,
                                    controlsList: ['nodownload']
                                },
                                tracks: [
                                    { kind: 'subtitles', label: 'English', src: subtitles.ENG, srcLang: 'en', default: true },
                                    { kind: 'subtitles', label: 'Spanish', src: subtitles.SPA, srcLang: 'es' }
                                ]
                            }
                        }}
                        playing={configuration.autoplay}
                        controls
                        onEnded={() => configuration.autonext && redirectToSerie(nextChapter)}
                    />
                )}
            </div>
            <div className='flex flex-row z-[900]'>
                {previousChapter && (
                    <Link href={`/series/${serie}/${previousChapter}`}>
                        <a className='mr-auto hover:underline'>
                            {previousChapter}
                        </a>
                    </Link>
                )}
                {nextChapter && (
                    <Link href={`/series/${serie}/${nextChapter}`}>
                        <a className='ml-auto hover:underline'>
                            {nextChapter}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: ['/series/[serie]/[chapter]'],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const serie = params.serie
    const chapter = params.chapter
    const videoUrl = `${process.env.API_URL}anime/${serie}/${chapter}`
    const subtitles = {
        'ENG': `${process.env.API_URL}subtitle/${serie}/${chapter?.substring(0, chapter.lastIndexOf('.'))}/ENG`,
        'SPA': `${process.env.API_URL}subtitle/${serie}/${chapter?.substring(0, chapter.lastIndexOf('.'))}/SPA`,
    }
    const { data } = await axios.get(`${process.env.API_URL}anime/${serie}`)
    const index = data.chapters.indexOf(chapter)
    const previousChapter = data.chapters[index - 1] || null
    const nextChapter = data.chapters[index + 1] || null

    return {
        props: {
            serie,
            chapter,
            videoUrl,
            subtitles,
            previousChapter,
            nextChapter
        },
        revalidate: 10
    }
}

export default WatchChapter
