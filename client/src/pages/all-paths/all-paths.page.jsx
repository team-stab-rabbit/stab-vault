import React from 'react'

import styles from './all-paths.style.css'


const AllPaths = () => (
    <div className={styles.Background}>
        <main className={styles.Main}>
            <HoverButton name={"Frontend"} />
            <HoverButton name={"Backend"} />
            <HoverButton name={"Devops"} />
            <HoverButton name={"Design"} />
        </main>
    </div>

)

const HoverButton = ({name}) => (
    <button className={styles.Link}>
        <span data-content={name}/>
        {'\u00A0\u00A0\u00A0'}
        {name}
        {'\u00A0\u00A0\u00A0'}
    </button>
)

export default AllPaths