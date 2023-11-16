import { FC, useEffect, useState } from "react";
import './section-five.scss';
import { getDiploms } from "../../Api/getDiploms";

interface ISectionFiveProps {

}

const SectionFive:FC<ISectionFiveProps> = () => {
    const [isShowed, setIsShowed] = useState<boolean>(false)
    const [data, setData] = useState<any>();

    const getDataFromBack = async () => {
        const res = await getDiploms()

        setData(res.data)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    return (
        <section className="section-five">
            <div className="special">
                <h3>Дипломы и сертификаты</h3>
            </div>
            <div className="block-five">
                {!isShowed ? data?.map((item: any) => (
                    <div className="item-five" key={item.attributes.description}>
                        <p className="big">{item.attributes.Year}</p>
                        <p>{item.attributes.description}</p>
                    </div>
                )).slice(0, 4) : data?.map((item: any) => (
                    <div className="item-five" key={item.attributes.description}>
                        <p className="big">{item.attributes.Year}</p>
                        <p>{item.attributes.description}</p>
                    </div>
                ))}
                
                <span onClick={() => setIsShowed(!isShowed)}>{!isShowed ? 'Посмотреть полностью' : 'Скрыть'} </span>
            </div>
        </section>
    )
}

export default SectionFive;
