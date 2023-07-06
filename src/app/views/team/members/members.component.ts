import { Component } from '@angular/core';
import { member } from 'src/app/models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  public members: member[] = [
    {
      name: "Henrique Franco Fickert Graziosi",
      role: "Game Programmer and Game Designer",
      photo: "../../../../assets/img/photos/group/henrique.jpg",
      linkedin: "https://www.linkedin.com/in/henriquefickert/",
      github: "https://github.com/HenriqueFickert",
      instagram: "https://www.instagram.com/kikefickert/",
      behance: "",
      artstation: "",
      descriptions: ["Henrique Franco Fickert Graziosi is a game programmer and web developer (back-end and front-end). During the production of Disorder, he worked as a Game Designer and Game Programmer. He has a deep passion for game development and is always dedicated to creating immersive and enjoyable experiences for players. Henrique is known for his easygoing nature, making him a pleasant and collaborative team member.", "In addition to his professional endeavors, he finds inspiration by playing games like League of Legends, Ragnarok, and Grand Chase. These games not only provide entertainment but also fuel his creativity and innovative thinking when it comes to his own game projects. His love for games and his commitment to creating exceptional experiences make him a valuable asset in the industry."]
    }
    ,
    {
      name: "Yuri Inoue Duarte",
      role: "Motion Designer and Sound Designer",
      photo: "../../../../assets/img/photos/group/yuri.png",
      linkedin: "http://linkedin.com/in/yduarte12/",
      github: "",
      instagram: "",
      behance: "https://www.behance.net/yduarte",
      artstation: "",
      descriptions: ["Yuri Duarte is a talented motion designer with expertise in motion, design, and editing. His versatility and commitment to delivering work have been valuable assets at Fumetsu, where he contributed to art direction and soundtrack development. Yuri's love for anime and Japanese culture has been a significant influence on his professional journey, serving as a constant source of inspiration and creativity. His repertoire has been shaped by these hobbies, allowing him to produce impressive work and continually expand his skills.", "His dedication to bringing creativity to life through motion design has been a driving force. Although he has shifted away from the gaming industry, Yuri remains open to collaborations with his colleagues, recognizing the potential for joint projects."]
    },
    {
      name: "Rafael Balbino Pereira",
      role: "2D Artist and 2D Animator",
      photo: "../../../../assets/img/photos/group/rafael.png",
      linkedin: "",
      github: "",
      instagram: "https://www.instagram.com/trevowood/",
      behance: "",
      artstation: "",
      descriptions: ["Rafael Balbino Pereira is a talented Game Designer, 2D artist, and animator with a mind full of ideas. His ability to convey stories and concepts through captivating images and animations is impressive. Inspired by his love for anime, comics, and games, his creativity knows no bounds. He has the skill to immerse viewers in visually stunning worlds, evoking emotions through his art.", "In addition to his artistic abilities, Rafael stands out as an empathetic and supportive friend. He values collaboration and understands the importance of building meaningful connections. His ability to put himself in others' shoes is evident in his creations, developing characters and narratives that deeply resonate with the audience. He is also an excellent team player, working in harmony with others to bring projects to life. His ability to listen, understand, and respect different perspectives promotes a collaborative and harmonious work environment."]
    },
    {
      name: "André Sonzzini Ribeiro de Souza",
      role: "2D Artist and 2D Animator",
      photo: "../../../../assets/img/photos/group/andre.png",
      linkedin: "",
      github: "",
      instagram: "",
      behance: "",
      artstation: "",
      descriptions: ["André Sonzzini is a data engineer, 2D artist, and animator. In addition to his technical skills, he also has a deep love for manga and anime, which serve as a constant source of inspiration for his creative work. His cheerful and friendly personality makes him a reliable partner and a beloved member of the team.", "André is known for his attention to detail in every project he undertakes. His dedication to delivering high-quality work is evident in every pixel and stroke of his creations. With his infectious joy, artistic abilities, and meticulous attention to detail, André Sonzzini is an invaluable part of the Fumetsu team."]
    },
    {
      name: "Pedro Biagi Borges Ferreira",
      role: "2D Artist and Concept Designer",
      photo: "../../../../assets/img/photos/group/pedro.png",
      linkedin: "",
      github: "",
      instagram: "",
      behance: "",
      artstation: "",
      descriptions: ["Pedro Biagi brings with him extensive experience as a Concept Artist and 3D Modeler and Texture Artist. With his laid-back personality and beloved sense of humor, he easily connects with his colleagues, creating a pleasant work environment.", "In his free time, Pedro is dedicated to his hobbies of gaming, particularly enjoying games he can play with his friends, and immersing himself in the world of manga. His passion for games and manga serves as a constant source of inspiration for his creative work. With his diverse interests and technical skills, he is a valuable and well-rounded member of the Fumetsu team."]
    },
    {
      name: "Gabriel Fazanaro Marra",
      role: "2D Artist and Concept Designer",
      photo: "../../../../assets/img/photos/group/gabriel.png",
      linkedin: "",
      github: "",
      instagram: "",
      behance: "",
      artstation: "https://www.artstation.com/gabriel-marra",
      descriptions: ["Gabriel Marra is a talented Concept Artist and 2D Artist who brings a relaxed and captivating energy to the team. His dedication to his work is remarkable, with painting being his strong suit. He played a crucial role as a 2D Artist and Sound Designer in the development of the game Disorder.", "In addition to his passion for the artistic world, Gabriel is also a gaming enthusiast, always seeking fun experiences to share with his friends or games with compelling stories. His personality and artistic skills make him a valuable presence at Fumetsu and a reliable friend you can always count on."]
    },
    {
      name: "Felipe M Rivorete Monteiro Padial",
      role: "Game Designer and Game Programmer",
      photo: "../../../../assets/img/photos/group/felipe.png",
      linkedin: "",
      github: "",
      instagram: "https://www.instagram.com/fe_padial/",
      behance: "",
      artstation: "",
      descriptions: ["Felipe Padial, Game Designer and Programmer, is a dedicated professional in his deliverables, always striving for impeccable work. His passion for digital games, board games, and anime serves as a source of inspiration to fuel his creations. Additionally, Felipe made significant contributions to the storyline of the game Disorder, showcasing his skills in various areas.", "The diversity of Felipe's interests and abilities makes him a valuable asset to the Fumetsu team. His attentiveness to friends and colleagues also makes him a very pleasant person to have on the team, always willing to help and create a collaborative environment."]
    }
  ];


}
