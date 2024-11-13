import style from './card.module.css'
import Button from '../button/button.jsx'


export default function PostCard({ data }) {
    const tags = data.tags.join(" ")

    console.log(tags);
    console.log(data);




    return (


        <div className={style.blogCard}>
            <img src={data.image} alt="" />
            <div className={style.blogDescription}>
                <h3>{data.title}</h3>
                <div className={style.description}>
                    {data.content}
                </div>
                <div className={style.tagSpace}>
                    {data.tags.map((tag, index) => <span key={index} className={style[tag]}>{tag}</span>)}
                </div>



                <Button />

            </div>
        </div>

    )
}