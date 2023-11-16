import { FC, useEffect, useState } from "react";

import './fourth-section.scss';

import { getFourthBlock } from "../../Api/getFourthBlock";

interface ISectionFourProps {

}

const SectionFour:FC<ISectionFourProps> = () => {
    const [data, setData] = useState<any>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const url = 'http://localhost:1337'

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Очистка подписки
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getDataFromBack = async () => {
        const res = await getFourthBlock()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    return (
        <section className='fourth-back'>
            <div className="fourth-section">
                {windowWidth > 540 && (
                    <div className='title-block' style={{border: 0, backgroundColor: '#FFF', boxShadow: '0px 0px 10px 0px rgba(7, 6, 95, 0.10)', gridRow: 'span 1'}}>
                        <h4>Спикер <br />вебинара</h4>
                    </div>
                )}
                
                <div className='white-block'>
                    <h5>{data?.speaker}</h5>
                    <ul>
                        {data?.Li && data.Li.map((item: any) => (
                            <li key={item?.text}>{item?.text}</li>
                        ))}
                    </ul>
                </div>

                {windowWidth < 540 && (
                    <div className='title-block' style={{border: 0, backgroundColor: '#FFF', boxShadow: '0px 0px 10px 0px rgba(7, 6, 95, 0.10)', gridRow: 'span 1'}}>
                        <h4>Спикер<br /> вебинара</h4>
                    </div>
                )}
                <div className='fourth-image'>
                    <img
                    src={`${url}${data?.image.data.attributes.url}`}
                    alt='smiling'
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionFour;
