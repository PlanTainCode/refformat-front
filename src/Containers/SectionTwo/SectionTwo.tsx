import { FC } from "react";
import './second-section.scss';

interface ISectionTwoProps {
  title: any,
  blocks: {
    number: string,
    text: string,
  }[]
}

const SectionTwo:FC<ISectionTwoProps> = ({title, blocks}) => {

    return (
        <section className="second-section">
          <div className='title-block'>
            <h4>{title}</h4>
          </div>
          {blocks && blocks.length > 0 && blocks?.map((item) => (
            <div className="standart-block" key={item.text}>
              <h4>{item.number}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </section>
    )
}

export default SectionTwo;
