import ReactDOM from 'react-dom/client';
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function One(props)
{
  const staticTime = "10:30";
  return(
    <div className='box'>
      <img src={props.img} alt={props.name} className='profile-img' />
      <div className='text-container'>
        <h2>{props.name}</h2>
        <p>{props.msg}</p>
      </div>
      <div className='time-container'>
        <span className='time'>{staticTime}</span>
        <span className='star'>⭐</span>
      </div>
    </div>
  );
}

let obj=[
  {
    name:"Jesica",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name:"Lily",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    name:"Atlas",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    name:"Ryle",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name:"Rachel",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/women/57.jpg'
  },
  {
    name:"Jefy",
    msg:"Hey I'm here to help you",
    img:'https://randomuser.me/api/portraits/women/20.jpg'
  }
]

root.render(
 <>
 <input type="text" class="search-input" placeholder="Search..."></input>
 {
 obj.map(function(item)
 {
  return <One name={item.name} msg={item.msg} img={item.img}></One>
 })
}

  </>
);


