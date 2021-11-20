import { useNavigate } from 'react-router'
import '../styles/main.scss'

const Main = () => {
  let navigate = useNavigate()
  const week = ['일', '월', '화', '수', '목', '금', '토']

  // 시간복잡도 보다 공간복잡도를 올리는 편이 낫다
  const randomArr = [
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
    Math.floor(Math.random() * 5 + 1),
  ]
  const day = new Date().getDay()
  let temp = []
  temp.push(...week.slice(day, week.length))
  temp.push(...week.slice(0, day))

  return (
    <div className="main--wrapper">
      <h3 className="main--title">내 일주일은?</h3>
      {temp.map((el, index) => {
        return (
          <div className="main--rate" key={index}>
            <p className="rate--date">{el}</p>
            {[0, 1, 2, 3, 4].map((e, i) => {
              return (
                <div
                  key={i}
                  className={
                    randomArr[index] < i + 1
                      ? 'rate--circle__grey'
                      : 'rate--circle__yellow'
                  }
                ></div>
              )
            })}
            <div
              className="rate--arrow"
              onClick={() => navigate(`/detail/${el}`)}
            ></div>
          </div>
        )
      })}
    </div>
  )
}

export default Main
