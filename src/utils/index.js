
export const isFalsy = (v) => v===0? true: !!v;

export const cleanObject =(object) =>{
    const result = {...object};
    Object.keys(object).forEach(i=>{
        const value = object[i];
        if(isFalsy(value)){
            delete result[i];
        }
    })
    return result;
}