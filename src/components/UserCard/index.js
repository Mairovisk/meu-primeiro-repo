import './styles.css';

export default function UserCard({
    name,
    jobRole,
    children,
    following

}) {
    return (
        <div className='user-card'>
            {children}
            <strong>{name}</strong>
            <span>{jobRole}</span>
            {
                <button
                    className={`bnt-card ${following ? 'following' : 'unfollowing'}`}
                >
                    {following ? 'Connected' : 'Connect'}
                </button>
            }


        </div>
    )
}

