import React from 'react';

export const Categories = () => {
    const categories = [
        { title: 'Все', id: 1 },
        { title: 'Мясные', id: 2 },
        { title: 'Вегетарианская', id: 3 },
        { title: 'Гриль', id: 4 },
        { title: 'Острые', id: 5 },
        { title: 'Закрытые', id: 6 },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((value) => (
                    <li
                        key={value.id}
                        onClick={() => onClickCategory(0)}
                        className={activeIndex === 1 ? 'active' : ''}
                    >
                        {value.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
