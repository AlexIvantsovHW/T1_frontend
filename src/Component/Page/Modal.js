import  React  from 'react';
import './popup.css'
const Modal=(props)=>{
    return(
        <div style={{backgroundColor:'#BCC3D080',width:'100vw',height:'100vh',position:'fixed',top:0,left:0,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='modal_card'>
                <div className='modal_top'>
                    <div className='modal_name'><p>{props.data.name}</p></div>
                    <div 
                        className='modal_exit' 
                        onClick={()=>props.setModal(false)}><img src='https://i.postimg.cc/Qdf7x7Hk/Vector-203-Stroke.png'/>
                    </div>
                </div>
                <div className='modal_body'>
                    <div className='mb-element'>
                        <div className='mb-el-left'>Телефон:</div> 
                        <div className='mb-el-right'>{props.data.phone}</div>
                    </div>
                    <div className='mb-element'>
                        <div className='mb-el-left'>Почта:</div> 
                        <div className='mb-el-right'>{props.data.email}</div>
                    </div>
                    <div className='mb-element'>
                        <div className='mb-el-left'>Дата приема:</div> 
                        <div className='mb-el-right'>{props.data.hire_date}</div>
                    </div>
                    <div className='mb-element'>
                        <div className='mb-el-left'>Должность:</div> 
                        <div className='mb-el-right'>{props.data.position_name}</div>
                    </div>
                    <div className='mb-element'>
                        <div className='mb-el-left'>Подразделение:</div> 
                        <div className='mb-el-right'>{props.data.department}</div>
                    </div>
                </div>
                <div className='modal_bottom'>
                    <div className='mbot-head'>Дополнительная информация</div>
                    <div className='mbot-bottom'>
                        Разработчики используют текст в качестве заполнителя макета страницы.
                         Разработчики используют текст в качестве заполнителя макета страницы.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;