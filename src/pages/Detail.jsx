import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import '../styles/detail.scss'

const Detail = () => {
  let navigate = useNavigate()
  let [color, setColor] = useState(0)
  let { id } = useParams()
  return (
    <div className="detail--wrapper">
      <h3 className="detail--title">
        <span className="title--hl">{id}요일</span> 평점 남기기
      </h3>
      <div className="circle--wrapper">
        {[0, 1, 2, 3, 4].map((el, i) => {
          return (
            <div
              key={i}
              className={
                color > i ? 'detail--circle__yellow' : 'detail--circle__grey'
              }
              onClick={() => setColor(i + 1)}
            ></div>
          )
        })}
      </div>
      <button className="detail--button" onClick={() => navigate('/')}>
        평점 남기기
      </button>
    </div>
  )
}

export default Detail
