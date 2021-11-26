


export const Service = ({ name, text, svg, color }) => {
    return (
        <div className='services__service flex flex-col justify-center items-center w-full h-80 px-5'>
            <div className={ `relative flex justify-center items-center` }>
                <svg
                    className={ `svg-bg ${ color }` }
                    width={ 100 }
                    height={ 100 }
                    viewBox='0 0 600 600'
                >
                    <path
                        fill='#f5f5f5'
                        d={ svg[0] }
                    />
                </svg>
                <svg
                    className={ `fill-current text-${ color } absolute inset-0 mx-auto my-auto svg-i` }
                    width={ 32 }
                    height={ 32 }
                    viewBox='0 0 24 24'
                >
                    {
                        ( name === 'Performance' && <path d="m13 6-6 7h4v5l6-7h-4z"/> )
                    }
                    {
                        ( name === 'Creative Design' &&
                            <>
                                <circle cx="7.5" cy="14.5" r="1.5"/>
                                <circle cx="7.5" cy="10.5" r="1.5"/>
                                <circle cx="10.5" cy="7.5" r="1.5"/>
                                <circle cx="14.5" cy="7.5" r="1.5"/>
                            </>
                        )
                    }
                    
                    <path
                        d={ svg[1] }
                    />
                </svg>
            </div>
            <h3 className='font-semibold text-xl text-primary-font-color my-5'>{ name }</h3>
            <div className='h-16'>
                <p className='text-secondary-font-color text-sm text-center'>{ text }</p>
            </div>
        </div>
    )
}

