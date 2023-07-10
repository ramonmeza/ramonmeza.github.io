import { useParams } from "react-router-dom";


export default function DocumentViewer() {
    let { id } = useParams();
    console.log(id)

    let paths = [
        './txt/the_nakhovny_incident/31_dec_1952_chebodny_official_statement.txt',
        './txt/the_nakhovny_incident/01_jan_1953_the_peoples_daily.txt',
        './txt/the_nakhovny_incident/03_jan_1953_first_hand_accounts.txt',
        './txt/the_nakhovny_incident/07_jan_1953_the_peoples_daily.txt'
    ]

    let path = paths[id]
    let data = null

    fetch(path)
        .then((response) => response.text())
        .then((data) => {
            data = data
        })

    return (
        <div className='dv'>
            <p>
                {data}
            </p >
        </div>
    )
}
