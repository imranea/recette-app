import React from 'react'

const Header = ({pseudo}) => {

    const formatPseudo = pseudo =>{
        const isFormat = /[aeiouy]/i.test(pseudo[0])
        return isFormat
    }

    return(
        <header>
            {formatPseudo ? <h1>La boite à recette d'{pseudo}</h1> : <h1>La boite à recette de {pseudo}</h1>}
        </header>
    )
}

export default Header
