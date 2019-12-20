function Color ({colors}) {
    return (
        <div className="color">
            {colors.map((item, key) => {
                return <div key={key} className='box' style={{backgroundColor: item}}></div>
            })}
            <style jsx>{`
.white {
    background-color: white; 
}
.black-19 {
    background-color: rgba(0,0,0, .19)
}
.black-39 {
    background-color: rgba(0,0,0, .39)
}
.black-59 {
    background-color: rgba(0,0,0, .59)
}
.black-79 {
    background-color: rgba(0,0,0, .79)
}
.black-100 {
    background-color: rgba(0,0,0, 1)
}

.primary {
    background-color: #6200ea;
}

.primary-light {
    background-color: #9d46ff;
}

.primary-dark {
    background-color: #0a00b6;
}

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
