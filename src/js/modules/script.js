// export function hiDear() {
//     console.log('Hi Dear')
// }

// hiDear()

// export function hiMan() {
//     console.log('Hi Man')
// }

// hiMan()

let object = {
    nameP: 'Evg',
    sername: 'Bazalev',
    age: 25,

    functionX() {
        let agex2 = object.age*2;
        return agex2;
    }
}

console.log(object.functionX())

let arr = [123, 158, 56, 32 , 'Vasia', 'petia']

function massminus(mas){
    mas[0]=mas[0]-10;
    mas[1]=mas[1]-10;
    mas[2]=mas[2]-10;
    mas[3]=mas[3]-10;
    mas[4]=mas[4]-10;
    mas[5]=mas[5]-10;

}

massminus(arr)

console.log(arr)