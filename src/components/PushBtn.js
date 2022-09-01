const PushBtn = () => {
    return(
        <div>
            <form>
                <div className='exercise'>
                    Bench Press:
                    <input name="ex1a" type="number" />
                    <input name="ex1b" type="number" />
                    <input name="ex1c" type="number" />
                </div>
                <div className='exercise'>
                    DB Shoulder Press:
                    <input name="ex2a" type="number" />
                    <input name="ex2b" type="number" />
                    <input name="ex2c" type="number" />
                </div>
                <div className='exercise'>
                    Weighted Dip:
                    <input name="ex3a" type="number" />
                    <input name="ex3b" type="number" />
                    <input name="ex3c" type="number" />
                </div>
                <div className='exercise'>
                    Low-to-High Cable Fly:
                    <input name="ex4a" type="number" />
                    <input name="ex4b" type="number" />
                    <input name="ex4c" type="number" />
                </div>
                <div className='exercise'>
                    DB Isolateral Skullcrusher:
                    <input name="ex5a" type="number" />
                    <input name="ex5b" type="number" />
                    <input name="ex5c" type="number" />
                </div>
                <div className='exercise'>
                    DB Lat Raise:
                    <input name="ex6a" type="number" />
                    <input name="ex6b" type="number" />
                    <input name="ex6c" type="number" />
                </div>
                <div className='exercise'>
                    Ab Wheel Rollout:
                    <input name="ex" type="number" />
                    <input name="ex" type="number" />
                    <input name="ex" type="number" />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PushBtn;