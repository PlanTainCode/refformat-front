import { FC, useEffect, useState } from "react";

// @ts-ignore
import Slider from "react-slick";

import './section-three.scss';
import '../../Styles/slick.scss';
import '../../Styles/slick-theme.scss';

import { getSliderImages } from "../../Api/getSliderImages";

interface ISectionThreeProps {

}

const SectionThree:FC<ISectionThreeProps> = () => {
    const [data, setData] = useState<any>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [itemsDesc, setItemsDesc] = useState<any>();

    const url = 'https://refformatedu-admin.ru'

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Очистка подписки
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        arrows: windowWidth > 540 ? true : false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'skick-dots-custom',
    };

    const getDataFromBack = async () => {
        const res = await getSliderImages()

        setData(res.data)
    }

    function pairElementsToObject(array: any) {
        let result = [];
        for (let i = 0; i < array.length; i += 2) {
            // Создаем объект с двумя элементами или одним, если элементов нечетное количество
            let pair = {pic1: array[i], pic2: array[i + 1]};
            result.push(pair);
        }
        return result;
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    useEffect(() => {
        if (data) setItemsDesc(pairElementsToObject(data))
    }, [data])    

    return (
        <section className="section-three">
            <Slider {...settings}>
                {windowWidth > 540 ? itemsDesc && itemsDesc.length > 0 ? itemsDesc.map((item: any) => (
                    <div className="slider-div" key={item?.pic1.attributes.image.data.attributes.url}>
                        <img src={`${url}${item?.pic1.attributes.image.data.attributes.url}`} alt="" />
                        <img src={`${url}${item?.pic2.attributes.image.data.attributes.url}`} alt="" />
                    </div>
                )) : <div></div>
                 : data.length > 0 ? data.map((item:any) => (
                    <div className="slider-div" key={item?.attributes.image.data.attributes.url}>
                        <img src={`${url}${item?.attributes.image.data.attributes.url}`} alt="" />
                    </div>
                )) : <div></div>}
            </Slider>
        </section>
    )
}

export default SectionThree;