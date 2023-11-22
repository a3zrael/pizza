import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="295" rx="10" ry="10" width="280" height="26" />
        <rect x="0" y="330" rx="10" ry="10" width="280" height="64" />
        <rect x="0" y="407" rx="10" ry="10" width="136" height="35" />
        <rect x="163" y="407" rx="10" ry="10" width="110" height="35" />
        <circle cx="137" cy="137" r="137" />
    </ContentLoader>
);

export default Skeleton;
