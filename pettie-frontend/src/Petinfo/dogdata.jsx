// export const dogs = [
import { IoFemale } from "react-icons/io5";
import  { IoMale } from "react-icons/io5";

const dogs = [
  {
    id: 0,
    name: 'Lucky',
    img: require('./img/dog0.jpg'),
    weight: '4kg',
    age: '3才' ,
    sex: <IoFemale/>,
    neutered: true, // 是否已結紮
    vaccinated: true, // 是否已接受疫苗
    lastCheckup: '2023-01-15', // 最後一次健診時間
    clinic: 'PetCare Hospital', // 健診醫院名  
    birth:'2012/12/12',
    love:'xghjgh',
    hate:'x',
    walk:'x',
    eat:'x',
    shit:'x',
  }, 
  {
    id: 1,
    name: 'Benz',
    img: require('./img/cat0.jpg'),
    weight: '6kg',
    age: '5才' ,
    sex: <IoMale/>,
  
  },
  {
    id: 2,
    name: 'Money',
    img: require('./img/dog2.jpg'),
    weight: '4.5kg',
    age: '2才' ,
    sex: <IoMale/>,
  
  },
  {
    id: 3,
    name: 'Happy',
    img: require('./img/dog1.jpg'),
    weight: '5kg',
    age: '4才' ,
    sex: <IoFemale/>,
  }
];

export default dogs