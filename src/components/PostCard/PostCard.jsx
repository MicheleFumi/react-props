import style from './card.module.css'
import Button from '../button/button.jsx'


export default function PostCard({ data }) {
    const tags = data.tags.join(" ")



    return (


        <div className={style.blogCard}>
            <img src={data.image} alt="" />
            <div className={style.blogDescription}>
                <h3>{data.title}</h3>
                <div className={style.description}>
                    {data.content}
                </div>
                <div className={style.tagSpace}>
                    {tags.includes("html") && (
                        <div className={style.html}>{tags}</div>
                    )}
                    {tags.includes("css") && (
                        <div className={style.css}>{tags}</div>
                    )}
                    {tags.includes("js") && (
                        <div className={style.js}>{tags}</div>
                    )}
                </div>



                <Button />

            </div>
        </div>

    )
}