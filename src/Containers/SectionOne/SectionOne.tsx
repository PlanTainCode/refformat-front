import { FC, useEffect, useState } from "react"

import './section-one.scss';

import { getFirstBlock } from "../../Api/getFirstBlock";

interface ISectiononeProps {
    setOpenPopup: (data: boolean) => void;
}

const SectionOne:FC<ISectiononeProps> = ({setOpenPopup}) => {
    const [data, setData] = useState<any>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Очистка подписки
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getDataFromBack = async () => {
        const res = await getFirstBlock()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    const url = 'https://refformatedu-admin.ru'

    return (
        <section className='first-section'>
            <div className='left-part'>
                {data?.logo.data && data?.logoWhite.data && (
                    <img
                        src={windowWidth > 540 ? `${url}${data?.logo?.data.attributes.url}` : `${url}${data?.logoWhite?.data.attributes.url}`}
                        alt='logo'
                    />
                )}

                <p className='light'>Вебинар</p>

                <h3>23 ноября в 19:00</h3>

                <h2>{data?.title}</h2>

                <p>{data?.description}</p>

                <button onClick={() => setOpenPopup(true)}>Записаться</button>
                </div>
                <div className='rigth-part'>
                {data?.mediaDesc.data && data?.mediaMob.data && (
                    <img
                        src={windowWidth > 540 ? `${url}${data.mediaDesc.data.attributes.url}` : `${url}${data.mediaMob.data.attributes.url}`}
                        alt='asasasas'
                    />
                )}
            </div>
        </section>
    )
}

export default SectionOne;
