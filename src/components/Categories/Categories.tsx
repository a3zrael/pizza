import React from 'react';

export const Categories = () => {
    const categories = [
        { title: 'Все', id: 0 },
        { title: 'Мясные', id: 1 },
        { title: 'Вегетарианская', id: 2 },
        { title: 'Гриль', id: 3 },
        { title: 'Острые', id: 4 },
        { title: 'Закрытые', id: 5 },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li
                        key={value.id}
                        onClick={() => onClickCategory(index)}
                        className={activeIndex === index ? 'active' : ''}
                    >
                        {value.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
