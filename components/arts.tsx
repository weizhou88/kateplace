import style from '../styles/arts.module.css'
import ArtsService from '../services/artservice'

export default function arts({ type, age }) {
  const artservice = new ArtsService();
  const arts = artservice.getArts(type, age);

  return (
    <div id="drawing-container" className="pt-5">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {arts.map((art=>{
          var baseUrl = "https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/"
          var ext = type==='animations'?'gif':'png';
          var imageUrl = baseUrl + `${type}/a${age}/${type}${art.id}-512.${ext}`;
          console.log(imageUrl);
          return (
            <div className={`${style.card} mb-5`}>
              <img className="img-fluid" id={`${art.id}`}
                src={imageUrl} />
              <p className="card-footer">{art.desc}</p>
            </div>
          )}
        ))}
      </div>
    </div>
  )
}
