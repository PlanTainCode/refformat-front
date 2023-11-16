import { FC, useEffect, useState } from "react";
import './section-seven.scss';
import { getSeven } from "../../Api/getSeven";

interface ISectionSevenProps {

}

const SectionSeven:FC<ISectionSevenProps> = () => {
    const [data, setData] = useState<any>();
    const url = 'http://localhost:1337'

    const getDataFromBack = async () => {
        const res = await getSeven()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    return (
        <section className="seven-block">
            <div className="seven-block__text">
                <span>До</span>
                <span>После</span>
            </div>
            <img src={`${url}${data?.image.data.attributes.url}`} alt="до после" />
        </section>
    )
}

export default SectionSeven;
