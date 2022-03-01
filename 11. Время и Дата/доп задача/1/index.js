function allowVisa(peopleWithVisa){
    
}

const peopleWithVisa = [
    {
       firstName: 'Stasia',
       lastName: 'Ward',
       criminalRecord: true,
       passportExpiration: '19.06.2023',
    },
    {
       firstName: 'Elliot',
       lastName: 'Baker',
       criminalRecord: false,
       passportExpiration: '04.06.2021',
    },
    {
       firstName: 'Leighann',
       lastName: 'Scott',
       criminalRecord: true,
       passportExpiration: '31.07.2022',
    },
    {
       firstName: 'Nick',
       lastName: 'Pop',
       criminalRecord: false,
       passportExpiration: '31.12.2021',
    },
 ];
  
 const result = allowVisa(peopleWithVisa);
 console.log('result', result);