interface CategoriesProps {
    value: number;
    onChangeCategory: (index: number) => void;
}

interface CategoriesArr {
    title: string;
    id: number;
}

export const Categories = ({ value, onChangeCategory }: CategoriesProps) => {
    const categories: CategoriesArr[] = [
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
                        key={categoriName.id}
                        onClick={() => onChangeCategory(index)}
                        className={value === index ? 'active' : ''}
                    >
                        {categoriName.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
