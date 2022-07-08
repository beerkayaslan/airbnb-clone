import { MainContext, useContext } from '../../../context';

export default function CategoryItem({item})
{

    const { setSelectCategory, selectCategory,setcardLoading} = useContext(MainContext);
    const clickHandle = (id) => {
        setSelectCategory(id)
        setcardLoading(1);
        setTimeout(() => {
            setcardLoading(0);
        }, 650);
    };
    return(
    <div className={`category-item ${selectCategory === item.id ? "active-category" : ""}`} onClick={() => clickHandle(item.id)}>
        <img src={item.img}/>
        <span>{item.title}</span>
    </div>)
}