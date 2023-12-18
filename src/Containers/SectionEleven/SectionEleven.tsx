import { FC } from "react";

import './section-eleven.scss';

// @ts-ignore
import SectionPic from '../../Assets/section-eleven.png'

interface ISectionElevenProps {

}

const SectionEleven:FC<ISectionElevenProps> = () => {
    return (
        <section className="section-eleven">
            <div className="section-eleven__blocks">
                <div className='title-block'>
                    <h4 style={{fontWeight: 700}}>Остались вопросы?</h4>
                </div>
                <div className='title-block'>
                    <p>Задайте их нам. <br /><br />Заполните форму ниже и с вами свяжутся для ответа на все ваши вопросы</p>
                </div>
            </div>
            <div className="section-eleven__form-del">
                <div className="section-eleven__form">

                </div>

                <img src={SectionPic} alt="" />
            </div>
        </section>
    )
}

export default SectionEleven;
