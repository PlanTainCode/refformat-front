import { FC, useEffect, useState } from "react";

import './section-eight.scss';
import { getEight } from "../../Api/getEight";

interface ISectionEightProps {
    setOpenPopup: (data: boolean) => void;
}

const SectionEight:FC<ISectionEightProps> = ({setOpenPopup}) => {
    const [data, setData] = useState<any>();
    const url = 'https://refformatedu-admin.ru'

    const getDataFromBack = async () => {
        const res = await getEight()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])
    return (
        <section className="section-eight">
            <div className='title-block'>
                <h4 style={{fontWeight: 700}}>Стоимость вебинара</h4>
            </div>
            <div className='title-block'>
                <h4 style={{fontWeight: 500}}>{data?.coast}</h4>
            </div>
            <div className='title-block'>
                <h4 style={{fontWeight: 700}}>Дата вебинара</h4>
            </div>
            <div className='title-block'>
                <h4 style={{fontWeight: 500}}>{data?.date}</h4>
            </div>


            <button onClick={() => setOpenPopup(true)}>Записаться</button>
        </section>
    )
}

export default SectionEight;
