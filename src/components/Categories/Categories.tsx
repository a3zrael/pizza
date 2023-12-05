interface CategoriesProps {
    value: number;
    onClickCategory: void;
}

export const Categories = ({ value, onClickCategory }: CategoriesProps) => {
    const categories = [
        { title: 'Все', id: 0 },
        { title: 'Мясные', id: 1 },
        { title: 'Вегетарианская', id: 2 },
        { title: 'Гриль', id: 3 },
        { title: 'Острые', id: 4 },
        { title: 'Закрытые', id: 5 },
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoriName, index) => (
                    <li
                        key={value.id}
                        onClick={() => onClickCategory(index)}
                        className={value === index ? 'active' : ''}
                    >
                        {categoriName.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
