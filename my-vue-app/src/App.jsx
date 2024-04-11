import { useState } from 'react'
import srcMyPhoto from './assets/my_photo.jpg'
import './App.css'
import { Photo } from './components/photo'
import { SliderCards } from './components/slider'
function App() {
  const competence = [
    "Опыт работы с базами данных",
     "Базовые знания Java, C#, C++", 
     "Работаю над дипломом на Flutter", 
     "Есть опыт разработки небольшого сайта на CMS Umbraco (была практика в вузе)"];
     const study = [
      "Правильное использование Git",
       "Концепции правильного написания кода", 
       "Фишки для написания короткого и читабельного кода", 
       "React",
       "PosgreSql",
       "Продолжить изучать базы данных",
       "Как правильно тестировать свой код",
       "Навыки по составлению красивых web приложений без костылей",
       "Использование Docker",
       "Умения по взаимодействую в команде",];
  return (
    <>
      <div>
      <h1>Бердюгин Илья Алексеевич</h1>
      <Photo src={srcMyPhoto} href={"https://t.me/Foleen"} className={"round-img"} alt={"Моё фото"}/>
      </div>
      <h1>Мои компетенции</h1>
      <SliderCards cards={competence}/>
      <h1>Хотел бы изучить</h1>
      <SliderCards cards={study}/>
  
      
    </>
  )
}

export default App
