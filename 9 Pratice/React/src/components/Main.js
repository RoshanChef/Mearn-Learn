import './main.css'

function Main() {
    return (
        <div className='main'>
            <div className='wrapper' >
                <div className="left">
                    <p>your feet deserve the best</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio magni excepturi doloribus cumque quaerat quasi distinctio provident ad quas quidem. in! Eos aperiam accusamus, quidem dolore eaque expnumquam quod error harum culpa excepturi, paria</p>
                    <div className="btnBar">
                        <div className="leftbtn">Shop Now</div>
                        <div className="rightbtn">Category</div>
                    </div>
                </div>

                <div className="right">
                    <img src="/images/shoes.png" alt="not found"  width={600} height={700}  loading='lazy'/>
                </div>
            </div>

            <div className="footer">
                <p>More Available on</p>
                <div className="logos">
                    <img src="/images/flipkart.png" alt="not found" />
                    <img src="/images/amazon.png" alt="not found" />
                </div>
            </div>

        </div>
    )
}

export default Main
