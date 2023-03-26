import React, {useRef, useState} from 'react';
import styles from "./tags.module.css"
import {set} from "mobx";
const Tags = () => {
    const [name, setName] = useState('')
    const [tags, setTags] = useState([{"name": "sun","id": 1},
        {"name": "mun","id": 2}])
    const createTag = (e) => {
        e.preventDefault()
        setTags(prev => [...prev, {'name': name, 'id': prev.length+1}])
        setName('')
    }
    return (
        <div className={styles.main}>
            <div className={styles.flex_parent} id={styles.tagcloud}>
                {tags.map(tag => {
                    return <div key={tag.id} className={styles.tag}>{tag.name}</div>
                })
                }
            </div>
            <span id="spanAddTag">Add a new tag:</span>
            <form action=''>
                <input type="text" name="tagInput" id={styles.tagInput} onChange={e => setName(e.target.value)} value={name}></input>
                <input type="submit" name="submit_plus" id={styles.submit_plus} value="+" onClick={e => createTag(e)}>
                </input>
            </form>
        </div>
    )
}

export default Tags;