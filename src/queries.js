const getPrizoners = 'SELECT * FROM public.levaiadata'
//здесь можно писать запросы 
const firstPrizoner = 'SELECT * FROM public.levaiadata WHERE id=$1'
//проверка на наличие айди
const addPrizoner = 'INSERT INTO public.levaiadata (id,name,surname,condemnation,degreedanger,prisonterm,hardness,token) VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
//экспорты для того что бы это видеть в других файлах
const deletePrizoner = 'DELETE FROM public.levaiadata WHERE id=$1'
const updatePrizoner = 'UPDATE public.levaiadata SET name=$1 , surname=$2 ,condemnation =$3,degreedanger=$4,prisonterm=$5,hardness=$6 WHERE id=$7'
const getToken = "SELECT * FROM public.levaiadata WHERE token=$1"
module.exports={
    getPrizoners,
    firstPrizoner,
    addPrizoner,
    deletePrizoner,
    updatePrizoner,
    getToken
}
