function Color ({colors}) {
    return (
        <div className="color">
            {colors.map((item, key) => {
                return <div key={key} className='box' style={{backgroundColor: item}}></div>
            })}
            <style jsx>{`
                .color {
                    display: flex;
                    margin-left: 2em;
                }
                .box {
                    width: 10em;
                    height: 10em;
                }
            `}</style>
        </div>
    )
}

export default Color
