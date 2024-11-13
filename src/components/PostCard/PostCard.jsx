import style from './card.module.css'
import Button from '../button/button.jsx'


export default function PostCard({ data }) {

    return (


        <div className={style.blogCard}>
            <img src={data.image} alt="" />
            <div className={style.blogDescription}>
                <h3>{data.title}</h3>
                <div className={style.description}>
                    {data.content}
                </div>
                <div className="tag">{data.tags[0]}</div>
                <div className="tag">{data.tags[1]}</div>


                <Button />

            </div>
        </div>

    )
}