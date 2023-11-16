import { FC, useEffect, useState } from "react";

import './section-nine.scss';
import { getNine } from "../../Api/getNine";

interface ISectionNineProps {

}

const SectionNine:FC<ISectionNineProps> = () => {
    const [data, setData] = useState<any>();

    const getDataFromBack = async () => {
        const res = await getNine()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    return (
        <section className="section-nine">
            <div className="nine-block">
                <div className='title-block' style={{border: 0, backgroundColor: '#FFF', boxShadow: '0px 0px 10px 0px rgba(7, 6, 95, 0.10)'}}>
                    <h4 style={{fontWeight: 700}}>Контакты</h4>
                </div>
                <div className='title-block' style={{border: 0, backgroundColor: '#FFF', boxShadow: '0px 0px 10px 0px rgba(7, 6, 95, 0.10)'}}>
                    <div className="contacts">
                        <a href={`tel:${data?.telHref}`}>{data?.tel}</a>
                        <a href={`mailto:${data?.email}`}>{data?.email}</a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default SectionNine;