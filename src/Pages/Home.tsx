import { useEffect, useState } from "react"
import { getProgramItem } from "../Api/getPropgramItems"
import { getAfter } from "../Api/getAfter"
import SectionOne from "../Containers/SectionOne/SectionOne"
import SectionTwo from "../Containers/SectionTwo/SectionTwo"
import SectionThree from "../Containers/SectionThree/SectionThree"
import SectionFour from "../Containers/SectionFour/SectionFour"
import SectionFive from "../Containers/SectionFive/SectionFive"
import SectionSeven from "../Containers/SectionSeven/SectionSeven"
import SectionEight from "../Containers/SectionEight/SectionEight"
import SectionNine from "../Containers/SectionNine/SectionNine"
import Footer from "../Containers/Footer/Footer"
import Popup from "../Features/Popup/Popup"


const Home = () => {
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [dataSecond, setDataSecond] = useState<any>()
    const [dataSix, setDataSix] = useState<any>()

    const getDataFromBackSecond = async () => {
        const res = await getProgramItem()

        setDataSecond(res.data)
    }

    const getDataFromBackSix = async () => {
        const res = await getAfter()

        setDataSix(res.data)
    }

    useEffect(() => {
        getDataFromBackSecond()
        getDataFromBackSix()
    }, [])

    const secondBlocks = dataSecond && dataSecond?.map((item: any) => ({
        number: item.attributes.number,
        text: item.attributes.text,
        })
    );

    const sixBlocks = dataSix && dataSix?.map((item: any) => ({
        number: item.attributes.number,
        text: item.attributes.text,
        })
    );
    return (
        <>
            <div className="wrapper">
                <SectionOne setOpenPopup={(data: boolean) => setOpenPopup(data)} />
                <SectionTwo 
                title={`Программа вебинара`}
                blocks={secondBlocks}
                />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionTwo 
                title='После вебинара'
                blocks={sixBlocks}
                />
                <SectionSeven />
                <SectionEight setOpenPopup={(data: boolean) => setOpenPopup(data)} />
                <SectionNine />
                <Footer />
            </div>
            <Popup openPopup={openPopup} setOpenPopup={(data: boolean) => setOpenPopup(data)} />
        </>
    )
}

export default Home;
