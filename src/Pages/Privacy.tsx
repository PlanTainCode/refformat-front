import Footer from "../Containers/Footer/Footer";
//@ts-ignore
import logo from '../Assets/logo.png'
import { Link } from "react-router-dom";
import '../Styles/privacy.scss';
import { getPrivacy } from "../Api/getPrivacy";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";


const Privacy = () => {
    const [data, setData] = useState<any>();
    
    const getDataFromBack = async () => {
        const res = await getPrivacy()

        setData(res.data.attributes)
    }

    useEffect(() => {
        getDataFromBack()
    }, [])

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <img src={logo} alt="logo" />
                    <Link to="/">Вернуться на главную</Link>
                </div>
                <span className="arrow">
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M42 22H2M2 22L22 42M2 22L22 2" stroke="#343640" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </span>
            </header>
            <div className="markdown-title">
                <h1>{data?.title}</h1>
                <p>{data?.description}</p>
            </div>

            {data?.Markdown.map((item:any) => (
                <div className="markdown-block">
                    <Markdown>{item.Block}</Markdown>
                </div>
            ))}
            {/* <div className="markdown-block">
                <h2>I. Общие положения</h2>
                <p>1. Настоящая Политика определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных в «ИП Окпыш Илья Геннадьевич» с целью защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
                <ul>
                    <li>оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</li>
                    <li>персональные данные — любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных);</li>
                    <li>автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники;</li>
                </ul>
            </div> */}

            <span className="ultraspan"></span>
            <Footer />
        </>
    )
}

export default Privacy;
